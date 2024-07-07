// Javascript example of Rock | Paper | Scissors 
let matchResults = {
    wins: 0,
    losses: 0,
    ties: 0,
    games: 0
};

function welcome() {
    let startQuestion;
    while (startQuestion !== null) {
        startQuestion = prompt(`Welcome to Rock Paper Scissors! Would you like to play? Enter: (Y, N)`);
        if ((startQuestion === 'N') || (startQuestion === null)) {
            return 'end';
        } else if (startQuestion === 'Y') {
            break;
        } else {
            alert(`Invalid entry. Please try again.`)
        };
    };
};

function choice() {
    let gameQuestion;
    while (gameQuestion !== null) {
        gameQuestion = prompt(`Please enter either R (Rock), P (Paper) or S (Scissors):`);
        if ((gameQuestion === 'R') || (gameQuestion === 'P') || (gameQuestion === 'S')) {
            break;
        } else if (gameQuestion === null) {
            return results();
        } else {
            alert(`Invalid entry. Please try again.`)
        };
    };
    return gameQuestion;
};

function virtual() {
    const handChoice = ['R', 'P', 'S'];
    const randomIndex = Math.floor(Math.random() * handChoice.length);
    const virtualChoice = handChoice[randomIndex];
    return virtualChoice;
};

function game() {
    let playerHand; 
    while (playerHand !== null) {
        playerHand = choice();
        virtualPlayer = virtual(); 
        if (playerHand === virtualPlayer) {
            alert(`It's a draw. Try again.`)
            counter('tie');
        } else if ((playerHand === 'R' && virtualPlayer !== 'P') || (playerHand === 'S' && virtualPlayer !== 'R')
            || (playerHand === 'P' && virtualPlayer !== 'S')) {
            alert(`You win.`);
            counter('win');
            break;
        } else if (playerHand === undefined) {
            break;
        } else {
            alert(`You lost.`);
            counter('lost');
            break;
        };
    };
    return playerHand;
};

function decision() {
    let playerDecision;
    while (playerDecision !== null) {
        let gameOptOut = '';
        playerDecision = prompt(`Would you like another game? Enter: (Y, N)`);
        if ((playerDecision === 'N') || (playerDecision === null)) {
            counter('newGame');
            break;
        } else if ((playerDecision !== 'Y')) {
            alert(`Invalid entry. Please try again.`)
        } else if (gameOptOut === undefined) {
            return;
        } else {
            counter('newGame');
            gameOptOut = game();        
        };
    };
    return results();
};

function counter(result) {
    switch (result) {
        case 'win':
            matchResults['wins']++;
            break;
        case 'lost':
            matchResults['losses']++;
            break;
        case 'tie':
            matchResults['ties']++;
        case 'newGame':
            matchResults['games']++;
        default:
            break;
    };
    return;
};

function results() {
    let matchStats = matchResults;
    alert(`Here are your match results. Total games: ${matchStats['games']}.
         Wins: ${matchStats['wins']}. Losses: ${matchStats['losses']}. 
         Ties: ${matchStats['ties']}. Thank you for playing!`);
};

function mainGame() {
    let startGame = welcome();
    if (startGame === 'end') {
        return;
    };
    let setGame = game();
    if (setGame === undefined) {
        return;
    };
    decision();
};

mainGame();