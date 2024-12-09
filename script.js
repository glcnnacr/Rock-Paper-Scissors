// Skorlar
let playerScore = 0;
let computerScore = 0;

// Seçim elemanları
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

// Modal elemanları
const modal = document.getElementById('game-modal');
const winnerMessage = document.getElementById('winner-message');
const restartButton = document.getElementById('restart-button');

// Oyun seçimi butonları
const buttons = document.querySelectorAll('button');

// Taş Kağıt Makas seçenekleri
const choices = ['Rock', 'Paper', 'Scissors'];

// Oyun mekaniği
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = button.id.charAt(0).toUpperCase() + button.id.slice(1); // Seçimi al
        const computerSelection = choices[Math.floor(Math.random() * choices.length)]; // Bilgisayar seçimi

        playerChoiceDisplay.textContent = playerSelection;
        computerChoiceDisplay.textContent = computerSelection;

        determineWinner(playerSelection, computerSelection);
    });
});

// Kazananı belirleme
function determineWinner(player, computer) {
    if (player === computer) {
        return; // Beraberlik
    }

    if (
        (player === 'Rock' && computer === 'Scissors') ||
        (player === 'Paper' && computer === 'Rock') ||
        (player === 'Scissors' && computer === 'Paper')
    ) {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }

    checkGameEnd();
}

// Oyunu bitirme kontrolü
function checkGameEnd() {
    if (playerScore === 3 || computerScore === 3) {
        const winner = playerScore === 3 ? 'You Win!' : 'Computer Wins!';
        showModal(winner);
    }
}

// Modalı gösterme
function showModal(winner) {
    winnerMessage.textContent = winner;
    modal.style.display = 'flex'; // Modalı görünür yap
}

// Oyunu yeniden başlatma
restartButton.addEventListener('click', restartGame);

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    playerChoiceDisplay.textContent = '-';
    computerChoiceDisplay.textContent = '-';
    modal.style.display = 'none'; // Modalı gizle
}
