/* Flash card app logic. Reads deck data from window.DECKS (js/questions.js). */

(function () {
  var state = {
    groupIndex: null, // index into window.DECK_GROUPS, null until user picks a company
    deckIndex: null, // index into window.DECKS, null until user picks a deck
    order: [], // indices into current deck's cards for the active session
    position: 0, // index into "order"
    flipped: false,
    results: {}, // cardIndex -> "correct" | "missed", reset per deck session
    reviewMode: false // true while cycling through only missed cards
  };

  var els = {};

  function init() {
    els.groupSelect = document.getElementById("group-select");
    els.deckSelect = document.getElementById("deck-select");
    els.emptyState = document.getElementById("empty-state");
    els.deckSession = document.getElementById("deck-session");
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

    buildGroupOptions();
    resetDeckSelect();

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
    els.groupSelect.addEventListener("change", function () {
      onGroupChosen(Number(els.groupSelect.value));
    });
    els.deckSelect.addEventListener("change", function () {
      onDeckChosen(Number(els.deckSelect.value));
    });
  }

  function buildGroupOptions() {
    var placeholder = disabledHeaderOption("Company");
    placeholder.selected = true;
    els.groupSelect.appendChild(placeholder);
    window.DECK_GROUPS.forEach(function (group, index) {
      var option = document.createElement("option");
      option.value = index;
      option.textContent = group.label;
      els.groupSelect.appendChild(option);
    });
  }

  // Clears the deck dropdown back to just its "Deck" placeholder, used
  // both on first load and whenever the company changes.
  function resetDeckSelect() {
    els.deckSelect.innerHTML = "";
    var placeholder = disabledHeaderOption("Deck");
    placeholder.selected = true;
    els.deckSelect.appendChild(placeholder);
  }

  function onGroupChosen(groupIndex) {
    state.groupIndex = groupIndex;
    state.deckIndex = null;
    els.deckSession.hidden = true;
    els.emptyState.hidden = false;

    resetDeckSelect();
    els.deckSelect.disabled = false;
    window.DECK_GROUPS[groupIndex].decks.forEach(function (deck) {
      var option = document.createElement("option");
      option.value = window.DECKS.indexOf(deck);
      option.textContent = deck.label;
      els.deckSelect.appendChild(option);
    });
  }

  function onDeckChosen(deckIndex) {
    state.deckIndex = deckIndex;
    els.emptyState.hidden = true;
    els.deckSession.hidden = false;
    restartDeck();
  }

  // A grayed-out, unselectable option shown only when the dropdown is
  // opened, so the user sees what the list represents (e.g. "Company").
  function disabledHeaderOption(text) {
    var option = document.createElement("option");
    option.disabled = true;
    option.textContent = text;
    return option;
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

  function currentModeOrder(deck) {
    return state.reviewMode
      ? buildOrder(missedIndices(), deck)
      : buildOrder(orderedIndices(deck.cards.length), deck);
  }

  function toggleReviewMode() {
    var deck = currentDeck();
    if (state.reviewMode) {
      state.reviewMode = false;
    } else {
      if (missedIndices().length === 0) return;
      state.reviewMode = true;
    }
    state.order = currentModeOrder(deck);
    state.position = 0;
    state.flipped = false;
    renderCard();
    updateReviewButton();
  }

  function gradeCard(result) {
    var cardIndex = state.order[state.position];
    state.results[cardIndex] = result;
    updateReviewButton();

    if (state.position === state.order.length - 1) {
      // Last card graded: loop back to the start in a fresh order,
      // staying in whichever mode (review or full deck) we're in.
      var deck = currentDeck();
      state.order = currentModeOrder(deck);
      if (state.reviewMode && state.order.length === 0) {
        // Everything just got graded correct; nothing left to review.
        state.reviewMode = false;
        state.order = currentModeOrder(deck);
        updateReviewButton();
      }
      state.position = 0;
      state.flipped = false;
      renderCard();
    } else {
      goTo(state.position + 1);
    }
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
