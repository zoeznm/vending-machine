// script.js
document.addEventListener('DOMContentLoaded', function() {
  let coinCount = 0;
  const coinCountDisplay = document.getElementById('coin-count');
  const coinSlot = document.getElementById('coin-slot');
  const coins = document.querySelectorAll('.coin');

  coins.forEach(coin => {
      coin.addEventListener('dragstart', function(event) {
          event.dataTransfer.setData('text/plain', null); 
          event.dataTransfer.setData('text', 'coin');
      });
  });

  coinSlot.addEventListener('dragover', function(event) {
      event.preventDefault();
  });

  coinSlot.addEventListener('drop', function(event) {
      event.preventDefault();
      const data = event.dataTransfer.getData('text');
      if (data === 'coin') {
          const draggedCoin = document.querySelector('.coin[draggable="true"]:hover');
          if (draggedCoin) {
              // 동전 수 증가
              coinCount++;
              // 동전 수 업데이트
              coinCountDisplay.textContent = coinCount;

              // 동전 제거
              draggedCoin.parentNode.removeChild(draggedCoin);

              // 애니메이션 효과
              coinCountDisplay.classList.add('coin-inserted');
              setTimeout(() => {
                  coinCountDisplay.classList.remove('coin-inserted');
              }, 500); // 0.5초 동안 애니메이션
          }
      }
  });
});
