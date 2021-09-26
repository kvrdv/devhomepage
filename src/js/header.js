// parallax background
let bg = document.querySelector('.header-dots');

window.addEventListener('mousemove', function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});

// hand wave animation timer
let hand = document.querySelector('.hello-image');

function waveOff() {
  hand.classList.remove('hello-image-animation');
}

function waveOn() {
  hand.classList.add('hello-image-animation');
}

function waveTimer() {
  setTimeout(waveOff, 1000);
  setTimeout(waveOn, 2000);
}

setInterval(waveTimer, 7000);