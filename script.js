document.addEventListener("DOMContentLoaded", () => {
    let user = prompt("Ваше ім'я:");
    document.getElementById("user-name").innerHTML = user;
    if(!user) {
        user = "User";
        document.getElementById("user-name").innerHTML = user;
    }

    // створення масивів мастей та значень
    let values = [6, 7, 8, 9, 10, 2, 3, 4, 11];
    let suit = ['6.png', '7.png', '8.png', '9.png', '10.png', 'jack.png', 'queen.png', 'king.png', 'ace.png'];

    let userCount = 0;
    let computerCount = 0;
    let play = 0;

    function randomCardIndex() {
        let ind = Math.floor(Math.random() * suit.length);
        return ind;
    }

    let startPlay = document.getElementById("btn");
    startPlay.addEventListener("click", () => {
        if (play === 0)
            play = 1;

        let userCard = randomCardIndex();
        let computerCard = randomCardIndex();

        document.getElementById("user-card").src = "./images/"+suit[userCard];
        document.getElementById("computer-card").src = "./images/"+suit[computerCard];

        userCount += values[userCard];
        computerCount += values[computerCard];

        document.getElementById("user-count").innerHTML = `Your points: ${userCount}`;
        document.getElementById("computer-count").innerHTML = `Opponent's points: ${computerCount}`;
        document.getElementById("play-count").innerHTML = `This is attempt ${play} of 3`;

        if (play === 3 || (play < 3 && (userCount === 21 || computerCount === 21)) || (play === 3 && (userCount >= 18 && userCount < 21) || (computerCount >= 18 && computerCount < 21)) || (play === 3 && userCount < 21 && computerCount < 21)) {
            /*setTimeout(function() {
                resultOfTheGame();
                resetGame();
            }, 30);*/
            setTimeout(resultOfTheGame, 30);
        }
        else
        play++;
    });

    function resultOfTheGame () {
        let champion;
        document.getElementById("btn").disabled = true; 
        if((userCount > computerCount && userCount === 21) || (userCount < computerCount && userCount === 21)) {
            champion = user;
            alert(`${champion} wins!`);
        }
        else if ((userCount < computerCount && computerCount === 21) || (userCount > computerCount && computerCount === 21)) {
            champion = "Computer";
            alert(`${champion} wins!`);
        }
        else if (userCount === 21 && computerCount === 21){
            alert("Dead heat! Game is over");
        }
        else if (userCount === computerCount && userCount !== 21 && computerCount !== 21) {
            alert("Dead heat! But nobody has 21 points!");
        }
        else if (userCount > 21 && computerCount > 21) {
            alert("Nobody has 21 points!");
        }
        else if ((userCount >= 18 && userCount < 21) && computerCount > 21) {
            champion = user;
            alert(`${champion} wins!`);
        }
        else if (userCount > 21 && (computerCount >= 18 && computerCount < 21)) {
            champion = "Computer";
            alert(`${champion} wins!`);
        }
        else if ((userCount >= 18 && userCount < 21) && computerCount < 21) {
            champion = user;
            alert(`${champion} wins because of > 18 points!`);
        }
        else if (userCount < 21 && (computerCount >= 18 && computerCount < 21)) {
            champion = "Computer";
            alert(`${champion} wins because of > 18 points!`);
        }
        else {
            alert("Game is over! There are no matching points");
        }
        setTimeout(resetGame, 3000);
    }

    function resetGame() {
        //userCount = 0;
        //computerCount = 0;

        //document.getElementById("user-count").innerHTML = `Your points: ${userCount}`;
        //document.getElementById("computer-count").innerHTML = `Opponent's points: ${computerCount}`;
        
        //document.getElementById("user-card").src="images/card-back.png";
        //document.getElementById("computer-card").src="images/card-back.png";
        //document.getElementById("play-count").innerHTML = "Attempt 0 of 3";
        location. reload();
    }
});
