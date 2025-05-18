let mysteryNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");
const restartBtn = document.getElementById("restartBtn");

function checkGuess() {
  const userGuess = Number(guessInput.value);
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    feedback.textContent = "⛔ Entre un nombre valide entre 1 et 100.";
    feedback.className = "text-red-500";
    return;
  }

  attempts++;
  if (userGuess === mysteryNumber) {
    feedback.textContent = `🎉 Bravo ! Tu as trouvé le nombre en ${attempts} essai(s) !`;
    feedback.className = "text-green-600";
    submitGuess.disabled = true;
    guessInput.disabled = true;
    restartBtn.classList.remove("hidden");
  } else if (userGuess < mysteryNumber) {
    feedback.textContent = "🔼 Trop petit !";
    feedback.className = "text-yellow-600";
  } else {
    feedback.textContent = "🔽 Trop grand !";
    feedback.className = "text-yellow-600";
  }

  attemptsDisplay.textContent = `Essai n°${attempts}`;
  guessInput.value = "";
  guessInput.focus();
}

function restartGame() {
  mysteryNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  feedback.textContent = "";
  attemptsDisplay.textContent = "";
  guessInput.value = "";
  guessInput.disabled = false;
  submitGuess.disabled = false;
  restartBtn.classList.add("hidden");
  guessInput.focus();
}

submitGuess.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", restartGame);
guessInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") checkGuess();
});
