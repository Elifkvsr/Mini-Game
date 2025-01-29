function startGame(playerChoice) {
    const choices = ['taş', 'kağıt', 'makas'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("countdown").innerText = "3...";
    setTimeout(() => document.getElementById("countdown").innerText = "2...", 1000);
    setTimeout(() => document.getElementById("countdown").innerText = "1...", 2000);
    setTimeout(() => {
        document.getElementById("countdown").innerText = "";
        document.getElementById("player-hand").classList.add("shake");
        document.getElementById("computer-hand").classList.add("shake");
    }, 3000);

    setTimeout(() => {
        document.getElementById("player-hand").classList.remove("shake");
        document.getElementById("computer-hand").classList.remove("shake");
        document.getElementById("player-hand").innerText = getEmoji(playerChoice);
        document.getElementById("computer-hand").innerText = getEmoji(computerChoice);

        let result = "";
        if (playerChoice === computerChoice) {
            result = "Berabere!";
            document.getElementById("draw-sound").play();
        } else if ((playerChoice === 'taş' && computerChoice === 'makas') ||
            (playerChoice === 'kağıt' && computerChoice === 'taş') ||
            (playerChoice === 'makas' && computerChoice === 'kağıt')) {
            result = "Kazandın!";
            document.getElementById("win-sound").play();
            document.getElementById("user-score").innerText++;
        } else {
            result = "Kaybettin!";
            document.getElementById("lose-sound").play();
            document.getElementById("computer-score").innerText++;
        }
        document.getElementById("result").innerText = result;
    }, 4000);
}

function getEmoji(choice) {
    switch (choice) {
        case 'taş': return "🪨";
        case 'kağıt': return "📜";
        case 'makas': return "✂️";
    }
}