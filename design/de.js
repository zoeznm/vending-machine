const sun = document.querySelector(".sun");
const can = document.querySelector(".can");

sun.addEventListener("click", () => {
  can.style.backgroundColor = "red";
});


document.addEventListener('DOMContentLoaded', function() {
  const radiationlamp = document.querySelector('.radiationlamp');
  const radiationlamplight = document.querySelector('.radiationlamplight');
  const animallamp = document.querySelector('.animallamp');
  const animallamplight = document.querySelector('.animallamplight');
  const timelamp = document.querySelector('.timelamp');
  const timelamplight = document.querySelector('.timelamplight');
  const crimelamp = document.querySelector('.crimelamp');
  const crimelamplight = document.querySelector('.crimelamplight');
  const spacelamp = document.querySelector('.spacelamp');
  const spacelamplight = document.querySelector('.spacelamplight');
  

  radiationlamp.addEventListener('click', function() {
    // 클릭할 때마다 radiationlamplight의 표시 상태를 토글합니다.
    radiationlamplight.style.display = (radiationlamplight.style.display === 'none') ? 'block' : 'none';
  });
  animallamp.addEventListener('click', function() {
    // 클릭할 때마다 radiationlamplight의 표시 상태를 토글합니다.
    animallamplight.style.display = (animallamplight.style.display === 'none') ? 'block' : 'none';
  });
  timelamp.addEventListener('click', function() {
    // 클릭할 때마다 radiationlamplight의 표시 상태를 토글합니다.
    timelamplight.style.display = (timelamplight.style.display === 'none') ? 'block' : 'none';
  });
  crimelamp.addEventListener('click', function() {
    // 클릭할 때마다 radiationlamplight의 표시 상태를 토글합니다.
    crimelamplight.style.display = (crimelamplight.style.display === 'none') ? 'block' : 'none';
  });
  spacelamp.addEventListener('click', function() {
    // 클릭할 때마다 radiationlamplight의 표시 상태를 토글합니다.
    spacelamplight.style.display = (spacelamplight.style.display === 'none') ? 'block' : 'none';
  });
});

const starLimit = 20;

const lampClasses = [
    {  light: 'radiationlamplight', imgClass: 'radiation_rock', imgSrc: '/img/radiation_rock.png' },
    { lamp: 'crimelamp', light: 'crimelamplight', imgClass: 'crime_rock', imgSrc: '/img/crime_rock.png' },
    { lamp: 'animallamp', light: 'animallamplight', imgClass: 'animal_rock', imgSrc: '/img/animal_rock.png' },
    { lamp: 'timelamp', light: 'timelamplight', imgClass: 'time_rock', imgSrc: '/img/time_rock.png' },
    { lamp: 'spacelamp', light: 'spacelamplight', imgClass: 'space_rock', imgSrc: '/img/space_rock.png' }
];

lampClasses.forEach(lampClass => {
    document.querySelector(`.${lampClass.light}`).addEventListener('click', () => {
        const starsContainer = document.getElementById('stars-container');
        starsContainer.innerHTML = ''; // 기존 별들을 모두 삭제
        starsContainer.style.opacity = 1; // 별들을 보이도록 설정

        for (let i = 0; i < starLimit; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.innerHTML = `<img draggable="true" class="${lampClass.imgClass}" src="${lampClass.imgSrc}" alt="">`;

            // 무작위 위치 설정
            const endY = getRandomInt(700, 685);
            const endX = getRandomInt(80, 1500);
            const rotateAngle = getRandomInt(-90, 90);

            star.style.transform = `translateY(${endY}px) translateX(${endX}px) rotate(${rotateAngle}deg)`;
            star.style.transition = 'transform 5s ease-in-out';

            starsContainer.appendChild(star);
        }
    });
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}