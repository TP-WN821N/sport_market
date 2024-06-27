let listToggle = document.getElementById('list_toggle');
let headerList = document.querySelector('.header_list');
let overlay = document.getElementById('overlay')
listToggle.addEventListener('click', () => {
  headerList.classList.toggle('header_list_toggle');
  overlay.classList.toggle('overlay')
})
// sweper
const swiperEl = document.querySelector('swiper-container')
Object.assign(swiperEl, {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    }
  },
});
swiperEl.initialize();