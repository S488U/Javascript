document.body.addEventListener('click', () => {

    var diceImage = ["images/dice1.png",
                        "images/dice2.png",
                        "images/dice3.png",
                        "images/dice4.png",
                        "images/dice5.png",
                        "images/dice6.png"
                    ];

    const image1 = document.querySelector(".img1");
    const image2 = document.querySelector(".img2");

    var randomNumber1 = Math.floor(Math.random() * 6);
    image1.setAttribute("src", diceImage[randomNumber1]);

    var randomNumber2 = Math.floor(Math.random() * 6);
    image2.setAttribute("src", diceImage[randomNumber2]);

    var h1 = document.querySelector('h1');

    if( randomNumber1 === randomNumber2) {
        h1.innerHTML = "Draw!";
    } else if ( randomNumber1 > randomNumber2) {
        h1.innerHTML = "Player 1 wins!";
    } else  {
        h1.innerHTML = "Player 2 wins!";
    }

});
