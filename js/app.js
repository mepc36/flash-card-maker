/* Flash card app logic. Reads deck data from window.DECKS (js/questions.js). */

(function () {
  var state = {
    deckIndex: 0,
    order: [], // shuffled indices into current deck's cards
    position: 0, // index into "order"
    flipped: false
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

    populateDeckPicker();

    els.card.addEventListener("click", flipCard);
    els.prevBtn.addEventListener("click", function () {
      goTo(state.position - 1);
    });
    els.nextBtn.addEventListener("click", function () {
      goTo(state.position + 1);
    });
    els.repeatBtn.addEventListener("click", restartDeck);
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

  function shuffledIndices(length) {
    var indices = [];
    for (var i = 0; i < length; i++) indices.push(i);
    // Fisher-Yates shuffle
    for (var j = indices.length - 1; j > 0; j--) {
      var k = Math.floor(Math.random() * (j + 1));
      var temp = indices[j];
      indices[j] = indices[k];
      indices[k] = temp;
    }
    return indices;
  }

  function restartDeck() {
    var deck = currentDeck();
    state.order = shuffledIndices(deck.cards.length);
    state.position = 0;
    state.flipped = false;
    renderCard();
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
      "Card " + (state.position + 1) + " of " + state.order.length;

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
