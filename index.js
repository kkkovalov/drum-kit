var i = 0;
while (i < document.querySelectorAll("button").length) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {

/*    var audioSource = "./sounds/" + +".mp3";
    var audio = new Audio(audioSource);
    audio.play(); */
    makeVisible(this.innerText);
    switch (this.innerText) {
      case 'w':
        var audioSource = "./sounds/crash.mp3";
        var audio = new Audio(audioSource);
        audio.play();
        break;

      case 'a':
        var audioSource = "./sounds/kick-bass.mp3";
        var audio = new Audio(audioSource);
        audio.play();
        break;
      case 's':
        var audioSource = "./sounds/snare.mp3";
        var audio = new Audio(audioSource);
        audio.play();
        break;
      case 'd':
        var audioSource = "./sounds/tom-1.mp3";
        var audio = new Audio(audioSource);
        audio.play();
        break;

      case 'j':
        var audioSource = "./sounds/tom-2.mp3";
        var audio = new Audio(audioSource);
        audio.play();
        break;
      case 'k':
        var audioSource = "./sounds/tom-3.mp3";
        var audio = new Audio(audioSource);
        audio.play();
        break;
      case 'l':
        var audioSource = "./sounds/tom-4.mp3";
        var audio = new Audio(audioSource);
        audio.play();
        break;
    };
  });
  i++;
}

document.addEventListener("keypress", function(event) {
  makeVisible(event.key);
  switch (event.key) {
    case 'w':
      var audioSource = "./sounds/crash.mp3";
      var audio = new Audio(audioSource);
      audio.play();
      break;

    case 'a':
      var audioSource = "./sounds/kick-bass.mp3";
      var audio = new Audio(audioSource);
      audio.play();
      break;
    case 's':
      var audioSource = "./sounds/snare.mp3";
      var audio = new Audio(audioSource);
      audio.play();
      break;
    case 'd':
      var audioSource = "./sounds/tom-1.mp3";
      var audio = new Audio(audioSource);
      audio.play();
      break;

    case 'j':
      var audioSource = "./sounds/tom-2.mp3";
      var audio = new Audio(audioSource);
      audio.play();
      break;
    case 'k':
      var audioSource = "./sounds/tom-3.mp3";
      var audio = new Audio(audioSource);
      audio.play();
      break;
    case 'l':
      var audioSource = "./sounds/tom-4.mp3";
      var audio = new Audio(audioSource);
      audio.play();
      break;
  };
});


function makeVisible(currentButton){

  var curBtn  = document.querySelector("." + currentButton);
  curBtn.classList.toggle("pressed");
  setTimeout(function(){curBtn.classList.toggle("pressed");}, 100);
}
