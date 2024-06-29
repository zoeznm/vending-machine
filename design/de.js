const sun = document.querySelector(".sun");
const can = document.querySelector(".can");

sun.addEventListener("click", () => {
  can.style.backgroundColor = "red";
});


document.addEventListener('DOMContentLoaded', function() {
  const starLimit = 20;
  
  const lampClasses = [
      { lamp: 'radiationlamp', light: 'radiationlamplight', imgClass: 'radiation_rock', imgSrc: '/img/radiation_rock.png' },
      { lamp: 'crimelamp', light: 'crimelamplight', imgClass: 'crime_rock', imgSrc: '/img/crime_rock.png' },
      { lamp: 'animallamp', light: 'animallamplight', imgClass: 'animal_rock', imgSrc: '/img/animal_rock.png' },
      { lamp: 'timelamp', light: 'timelamplight', imgClass: 'time_rock', imgSrc: '/img/time_rock.png' },
      { lamp: 'spacelamp', light: 'spacelamplight', imgClass: 'space_rock', imgSrc: '/img/space_rock.png' }
  ];

  let activeLight = null;

  lampClasses.forEach(lampClass => {
      const lampElement = document.querySelector(`.${lampClass.lamp}`);
      const lightElement = document.querySelector(`.${lampClass.light}`);

      lampElement.addEventListener('click', function() {
          if (activeLight && activeLight !== lightElement) {
              activeLight.style.display = 'none';
          }

          lightElement.style.display = (lightElement.style.display === 'none' || lightElement.style.display === '') ? 'block' : 'none';
          activeLight = (lightElement.style.display === 'block') ? lightElement : null;

          if (lightElement.style.display === 'block') {
              const starsContainer = document.getElementById('stars-container');
              starsContainer.innerHTML = ''; // 기존 별들을 모두 삭제
              starsContainer.style.opacity = 1; // 별들을 보이도록 설정

              for (let i = 0; i < starLimit; i++) {
                  const star = document.createElement('div');
                  star.className = 'star';
                  star.innerHTML = `<img draggable="true" class="${lampClass.imgClass}" src="${lampClass.imgSrc}" alt="">`;

                  // 무작위 위치 설정
                  const endY = getRandomInt(685, 700);
                  const endX = getRandomInt(80, 1500);
                  const rotateAngle = getRandomInt(-90, 90);

                  star.style.transform = `translateY(${endY}px) translateX(${endX}px) rotate(${rotateAngle}deg)`;
                  star.style.transition = 'transform 5s ease-in-out';

                  starsContainer.appendChild(star);
              }
          } else {
              document.getElementById('stars-container').style.opacity = 0; // 별들을 숨기도록 설정
          }
      });
  });

  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
});

