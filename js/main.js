// ScrollMagic 사용
const spyEls = document.querySelectorAll('section.scroll-spy')
console.log(spyEls);

const controller = new ScrollMagic.Controller();
spyEls.forEach(function (spyEl) {
  // 메소드 체이닝
  new ScrollMagic.Scene({ // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.6 // 화면의 50% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
  .setClassToggle(spyEl, 'underline') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(controller); // 컨트롤러에 장면을 할당(필수!!) - 라이브러리에서 지정한 문법 깊게 이해할 필요x
  });

// 모달 제어
const rmModalBtnList = document.querySelectorAll('.projects .projects__readme');
const rmModal = document.querySelector('#readmeModal');
const rmModalCloseBtn = document.querySelector('#readmeModal .btn-close');
const body = document.querySelector('body');

const scrollBarWidth = window.innerWidth - document.documentElement.offsetWidth;
const scrollBarWidthStr = scrollBarWidth.toString();

rmModalCloseBtn.addEventListener('click', function () {
  rmModal.style.display = 'none';
  body.style.overflow = 'auto';
  body.style.paddingRight = 0;
});
console.log(body);

rmModalBtnList.forEach(function (rmModalBtn, index) {
  rmModalBtn.addEventListener('click', function () {
    rmModal.style.display = 'flex';
    body.style.overflow = 'hidden';
    body.style.paddingRight = scrollBarWidthStr+'px';
  });
});

// 화면 스크롤 이벤트 감지하여 헤더 스타일 & 스크롤업 버튼 변화
const header = document.querySelector('#header');
const headerAs = document.querySelectorAll('#header .inner nav ul li a');
const scrollUpBtn = document.querySelector('#scroll-up');

// 헤더 백그라운드 컬러 초기값 지정 (투명)
header.style.backgroundColor = 'rgba(0, 0, 0, 0)';

window.addEventListener('scroll', function () {
  // 스크롤 이벤트 1: 헤더 스타일 변경
  if (window.scrollY > 50) {
    header.style.backgroundColor = '#fff';
    header.style.boxShadow = '0 2px 8px rgba(119, 119, 119, 0.4)';

    headerAs.forEach((headerA) => {
      headerA.style.color = '#362d2a';
    });
  } else {
    header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    header.style.boxShadow = '0 0 0 rgba(0, 0, 0, 0)';
    
    headerAs.forEach((headerA) => {
      headerA.style.color = 'rgba(255, 255, 255, 0.81)';
    });
  } 

  // 스크롤 이벤트 2: 스크롤업 버튼 사라짐/나타남
  if (window.scrollY >= 500) {
    scrollUpBtn.style.opacity = 1;
    scrollUpBtn.style.transform = 'translateX(0)';   
  } else {
    scrollUpBtn.style.opacity = 0;
    scrollUpBtn.style.transform = 'translateX(100px)'; 
  }
});

// 햄버거 버튼 클릭 시 효과
const hamburgerBtn = document.querySelector('.hamburgerBtn');

hamburgerBtn.addEventListener('click', function () {
  headerAs.forEach((headerA) => {
    headerA.style.color = '#362d2a';
  })

  header.classList.toggle('active');

  if(header.classList.contains('active')){
    header.style.backgroundColor = '#fff';
    header.style.boxShadow = '0 2px 8px rgba(119, 119, 119, 0.4)';

    body.style.overflow = 'hidden';
    body.style.paddingRight = scrollBarWidthStr+'px';
  } else {
    header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    header.style.boxShadow = '0 0 0 rgba(255, 255, 255, 0)';

    body.style.overflow = 'auto';
    body.style.paddingRight = 0;
  }
});

// 메뉴 클릭 시 메뉴 창 다시 닫히게
headerAs.forEach((headerA) => {
  headerA.addEventListener('click', function () {
    header.classList.toggle('active');
    body.style.overflow = 'auto';
  })
})