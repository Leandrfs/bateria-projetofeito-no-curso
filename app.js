const numberOfDrumButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    const buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener('keydown', function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case 'w':
      playSound('./sounds/tom-1.mp3');
      break;
    case 'a':
      playSound('./sounds/tom-2.mp3');
      break;
    case 's':
      playSound('./sounds/tom-3.mp3');
      break;
    case 'd':
      playSound('./sounds/tom-4.mp3');
      break;
    case 'j':
      playSound('./sounds/snare.mp3');
      break;
    case 'k':
      playSound('./sounds/crash.mp3');
      break;
    case 'l':
      playSound('./sounds/kick-bass.mp3');
      break;
    default:
      console.log(key);
      break;
  }
}

function playSound(soundPath) {
  const sound = new Audio(soundPath);
  sound.addEventListener('error', function (event) {
    console.log('Erro ao reproduzir o som:', event.target.error);
  });
  sound.play();
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector(`.${currentKey}`);
  activeButton.classList.add('pressed');
  setTimeout(function () {
    activeButton.classList.remove('pressed');
  }, 300);
}

