/* Flash card app logic. Reads deck data from window.DECKS (js/questions.js). */

(function () {
  var state = {
    deckIndex: 0,
    order: [], // indices into current deck's cards for the active session
    position: 0, // index into "order"
    flipped: false,
    results: {}, // cardIndex -> "correct" | "missed", reset per deck session
    reviewMode: false // true while cycling through only missed cards
  };

  var els = {};

  function init() {
    els.deckSelect = document.getElementById("deck-select");
    els.card = document.getElementById("card");
    els.cardInner = document.getElementById("card-inner");
    els.questionText = document.getElementById("question-text");
    els.answerText = document.getElementById("answer-text");
    els.progress = document.getElementById("progress");
    els.prevBtn = document.getElementById("prev-btn");
    els.nextBtn = document.getElementById("next-btn");
    els.repeatBtn = document.getElementById("repeat-btn");
    els.reviewBtn = document.getElementById("review-btn");
    els.gradeButtons = document.getElementById("grade-buttons");
    els.correctBtn = document.getElementById("correct-btn");
    els.missedBtn = document.getElementById("missed-btn");

    populateDeckPicker();

    els.card.addEventListener("click", flipCard);
    els.prevBtn.addEventListener("click", function () {
      goTo(state.position - 1);
    });
    els.nextBtn.addEventListener("click", function () {
      goTo(state.position + 1);
    });
    els.repeatBtn.addEventListener("click", restartDeck);
    els.reviewBtn.addEventListener("click", toggleReviewMode);
    els.correctBtn.addEventListener("click", function () {
      gradeCard("correct");
    });
    els.missedBtn.addEventListener("click", function () {
      gradeCard("missed");
    });
    els.deckSelect.addEventListener("change", function () {
      state.deckIndex = Number(els.deckSelect.value);
      restartDeck();
    });

    restartDeck();
  }

  function populateDeckPicker() {
    window.DECKS.forEach(function (deck, index) {
      var option = document.createElement("option");
      option.value = index;
      option.textContent = deck.label;
      els.deckSelect.appendChild(option);
    });
  }

  function currentDeck() {
    return window.DECKS[state.deckIndex];
  }

  function orderedIndices(length) {
    var indices = [];
    for (var i = 0; i < length; i++) indices.push(i);
    return indices;
  }

  function buildOrder(indices, deck) {
    return deck.randomShuffle ? shuffleInPlace(indices) : indices;
  }

  function shuffleInPlace(indices) {
    // Fisher-Yates shuffle
    for (var j = indices.length - 1; j > 0; j--) {
      var k = Math.floor(Math.random() * (j + 1));
      var temp = indices[j];
      indices[j] = indices[k];
      indices[k] = temp;
    }
    return indices;
  }

  function missedIndices() {
    var indices = [];
    for (var key in state.results) {
      if (state.results[key] === "missed") indices.push(Number(key));
    }
    return indices;
  }

  function restartDeck() {
    var deck = currentDeck();
    state.results = {};
    state.reviewMode = false;
    state.order = buildOrder(orderedIndices(deck.cards.length), deck);
    state.position = 0;
    state.flipped = false;
    renderCard();
    updateReviewButton();
  }

  function toggleReviewMode() {
    var deck = currentDeck();
    if (state.reviewMode) {
      state.reviewMode = false;
      state.order = buildOrder(orderedIndices(deck.cards.length), deck);
    } else {
      var missed = missedIndices();
      if (missed.length === 0) return;
      state.reviewMode = true;
      state.order = buildOrder(missed, deck);
    }
    state.position = 0;
    state.flipped = false;
    renderCard();
    updateReviewButton();
  }

  function gradeCard(result) {
    var cardIndex = state.order[state.position];
    state.results[cardIndex] = result;
    updateReviewButton();
    goTo(state.position + 1);
  }

  function updateReviewButton() {
    var missedCount = missedIndices().length;
    els.reviewBtn.textContent = state.reviewMode
      ? "Back to full deck"
      : "Review missed (" + missedCount + ")";
    els.reviewBtn.disabled = !state.reviewMode && missedCount === 0;
  }

  function goTo(newPosition) {
    if (newPosition < 0 || newPosition >= state.order.length) return;
    state.position = newPosition;
    state.flipped = false;
    renderCard();
  }

  function flipCard() {
    state.flipped = !state.flipped;
    els.cardInner.classList.toggle("flipped", state.flipped);
  }

  function renderCard() {
    var deck = currentDeck();
    var card = deck.cards[state.order[state.position]];

    els.questionText.textContent = card.question;
    els.answerText.textContent = card.answer;
    els.cardInner.classList.remove("flipped");

    els.progress.textContent =
      (state.reviewMode ? "Reviewing missed - Card " : "Card ") +
      (state.position + 1) +
      " of " +
      state.order.length;

    els.prevBtn.disabled = state.position === 0;
    els.nextBtn.disabled = state.position === state.order.length - 1;
  }

  // app.js can load after DOMContentLoaded already fired (e.g. when
  // injected dynamically for cache-busting), so check readyState first.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
