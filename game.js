// initializes variables
var level = 0;
var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

// functions
// generates random number between 0 and 4
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    // flashes + plays audio for random button
    $('#' + randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    $("h1").text("Level " + level)
    level += 1;
}
// plays sound via given color
function playSound(color) {
    var audio = new Audio('./sounds/' + color + '.mp3');
    audio.play();
}
// changes button color when pressed
function animatePress(color) {
    $('#' + color).addClass('pressed')
    setTimeout(function() {
        $('#' + color).removeClass('pressed');
    }, 500);
}

// events
// if any button is clicked
$('[type = "button"]').click(function () {
    var userChosenColor = $(this).attr("id");
    playSound(userChosenColor); // plays audio
    animatePress(userChosenColor); // animates press
    userClickedPattern.push(userChosenColor);
})

var start = True;
$(document).keypress(function () {
    if (start == True) {
        randomChosenColor = buttonColors[nextSequence()];
        $("h1").text("Level 0")
        start = False;
    }
})


