var bt = document.querySelectorAll(".drum").length;
for (let index = 0; index < bt; index++) {
  document
    .querySelectorAll(".drum")
    [index].addEventListener("click", function () {
      var keyorClick = this.innerHTML;
      makeSound(keyorClick);
      buttonAnimation(keyorClick);
    });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function handleFunc(tom) {
  var sound = new Audio("./sounds/" + tom + ".mp3");
  sound.play();
}

function makeSound(key) {
  switch (key) {
    case "w":
      handleFunc("tom-1");
      break;
    case "a":
      handleFunc("tom-2");
      break;

    case "s":
      handleFunc("tom-3");
      break;
    case "d":
      handleFunc("tom-4");
      break;

    case "j":
      handleFunc("crash");
      break;
    case "k":
      handleFunc("kick-bass");
      break;

    case "l":
      handleFunc("snare");
      break;
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
