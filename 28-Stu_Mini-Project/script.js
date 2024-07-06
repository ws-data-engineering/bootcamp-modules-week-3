const handSign = {
    rock: 'R',
    paper: 'P',
    scissors: 'S'
};

function rockPaperScissors() {
    let gameResults = {
        wins: 0,
        losses: 0,
        games_played: 0,
        invalid_entry: 0
    };

    const choice = Object.values(handSign);
   
    const randomIndex = Math.floor(Math.random() * choice.length);

    const virtualPlayer = choice[randomIndex];

    let gameDecision = prompt(`Welcome to Rock Paper Scissors! 
        Would you like to play? Enter: (Y, N)`);

    while (gameDecision !== null) {
        if (gameDecision === 'Y' || gameDecision === 'N') {
            break;
        }
        gameResults['invalid_entry']++
        gameDecision = prompt(`Invalid entry. Please enter: (Y, N)`);
    };

    while (gameDecision !== null && gameDecision !== 'Y') {
        if (gameDecision === 'N') {
            finalDecision = confirm(`Are you sure you don't want to play`);
        }
        if (finalDecision) {
            break;
        };
    };

    while (gameDecision === 'Y') {  
        let playerChoice = prompt(`Please enter either R (Rock), P (Paper) or S (Scissors):`);
  
        while (playerChoice !== null) {        
            if (playerChoice === 'R') {
               break;
            } else if (playerChoice === 'P') {
                break;
            } else if (playerChoice === 'S') {
                break
            } else {
                gameResults['invalid_entry']++
                playerChoice = prompt(`Invalid entry. Please enter either R, P or S.`)
            };
        };

        while (playerChoice === virtualPlayer) {
            playerChoice = prompt(
                `The game was a draw! You selected ${playerChoice} and the virtual player chose ${virtualPlayer}. Please choose again!`
            );
            while (playerChoice !== null) {
                if (playerChoice === 'R' || playerChoice === 'P' || playerChoice === 'S') {
                    break;
                }
                gameResults['invalid_entry']++
                playerChoice = prompt(`Invalid entry. Please enter: (R, P, S)`);
            };
        };

        if ((playerChoice === 'R' && virtualPlayer !== 'P') || 
            (playerChoice === 'S' && virtualPlayer !== 'R') ||
            (playerChoice === 'P' && virtualPlayer !== 'S')) {
            alert(`You win! Your choice: ${playerChoice}. The virtual player: ${virtualPlayer}`);
            gameResults['wins']++
        } else {
            alert(`You lose! Your choice: ${playerChoice}. The virtual player: ${virtualPlayer}`);
            gameResults['losses']++
        };

        let keepPlaying = prompt(`Would you like another game? Enter: (Y, N)`);

        while (keepPlaying !== null) {
            if (keepPlaying === 'Y' || keepPlaying === 'N') {
                gameResults['games_played']++
                break;
            };
            gameResults['invalid_entry']++
            keepPlaying = prompt(`Invalid entry. Would you like another game? Enter: (Y, N)`);
        };

        if (keepPlaying === 'N') {
            alert(`You have ${gameResults['wins']} wins & ${gameResults['losses']} losses. You played a total of ${gameResults['games_played']} games played. You had ${gameResults['invalid_entry']} invalid entries entered.`);
            break;
        };           
    };
};

rockPaperScissors();

