function generateBinaryText(rows, cols) {
  let binaryText = '';
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const binary = Math.random() < 0.5 ? '0' : '1';
      const visibilityClass = Math.random() < 0.05 ? 'hidden' : ''; // 5% 확률로 숨기기
      binaryText += `<span class="${visibilityClass}">${binary}</span>`;
    }
    binaryText += '<br>'; // 줄 바꿈을 위한 <br> 태그
  }
  return binaryText;
}

function updateBinaryText() {
  const binaryContainer = document.getElementById('binary-container');
  const { innerWidth, innerHeight } = window;
  const rows = Math.ceil(innerHeight / 20); // 20 is approximate line height with padding
  const cols = Math.ceil(innerWidth / 16); // 16 is approximate character width with padding
  binaryContainer.innerHTML = generateBinaryText(rows, cols);
}

window.addEventListener('resize', updateBinaryText);
window.addEventListener('load', updateBinaryText);
