function animateStars() {
  const starsContainer = document.getElementById('stars-container');
  starsContainer.style.opacity = 1; // 별들을 보이도록 설정


  const stars = document.querySelectorAll('.star');
  stars.forEach(star => {
      // Add a falling animation
      star.style.transform = `translateY(${getRandomInt(700, 685)}px) rotate(${getRandomInt(-90, 90)}deg)`;

  });

}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 50)) + min;
}

