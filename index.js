// detecting button click
var drumKeys = document.querySelectorAll(".drum").length;
for (var i = 0; i < drumKeys; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    logkey(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

// Detecting keybord press
document.addEventListener('keypress', function(e) {
  logkey(e.key);
  buttonAnimation(e.key);
});


// making the correct sound
function logkey(drumkeypress) {
  switch (drumkeypress) {
    case "w":
      var key1 = new Audio('sounds/tom-1.mp3');
      key1.play();
      break;
    case "a":
      var key2 = new Audio('sounds/tom-2.mp3');
      key2.play();
      break;
    case "s":
      var key3 = new Audio('sounds/tom-3.mp3');
      key3.play();
      break;
    case "d":
      var key4 = new Audio('sounds/tom-4.mp3');
      key4.play();
      break;
    case "j":
      var key5 = new Audio('sounds/crash.mp3');
      key5.play();
      break;
    case "k":
      var key6 = new Audio('sounds/kick-bass.mp3');
      key6.play();
      break;
    case "l":
      var key7 = new Audio('sounds/snare.mp3');
      key7.play();
      break;
    default:

  }
}

// animation
function buttonAnimation(currentKey) {
  var activeKey = document.querySelector("." + currentKey);
  activeKey.classList.add("pressed");
  setTimeout(function() {
    activeKey.classList.remove("pressed");
  }, 100);
}