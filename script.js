function change() {
    var button = document.querySelector(".button");

    // Generate random x and y coordinates between 1 and 500
    var randomX = Math.floor(Math.random() * 1300) + 1;
    var randomY = Math.floor(Math.random() * 700) + 1;

    // Set the button's position
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";

    // Get the current score element
    var scoreElement = document.querySelector(".score");

    // Get the current score value
    var currentScore = parseInt(scoreElement.innerText);

    // Increase the score by 1
    var newScore = currentScore + 1;

    // Update the score in the HTML
    scoreElement.innerText = newScore;
}
