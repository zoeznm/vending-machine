function createStars() {
    const numberOfStars = 200; // 생성할 별의 개수
    const container = document.body;
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      container.appendChild(star);
    }
  }
  createStars();


// 별똥별
document.addEventListener('DOMContentLoaded', () => {
  const numStars = 100;
  const container = document.querySelector('.shooting-stars');

  for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      star.style.animationDuration = `${2 + Math.random() * 3}s`;
      container.appendChild(star);
  }
});