function getRandomSpeed(min, max) {
  return Math.random() * (max - min) + min;
}

function setCloudAnimation() {
  const cloud1 = document.querySelector('.cloud1');
  const cloud2 = document.querySelector('.cloud2');

  const cloud1Speed = getRandomSpeed(5, 15); // Random speed between 5s and 15s
  const cloud2Speed = getRandomSpeed(5, 15); // Random speed between 5s and 15s

  cloud1.style.animation = `moveCloud1 ${cloud1Speed}s linear infinite`;
  cloud2.style.animation = `moveCloud2 ${cloud2Speed}s linear infinite`;
}

window.addEventListener('load', setCloudAnimation);
