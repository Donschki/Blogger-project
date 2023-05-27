 // Grab elements
const selectElement = selector =>  {
     const element = document.querySelector(selector)
     if (element) return(element)
     throw new Error(`Somehting went, make sure that ${selector} exists or is typed correctly.`)
};


// // Nav styles on scroll
// const scrollHeader = () => {
//      const headerElement = selectElement('#header');
//      if(this.scrollY >= 100 || this.scrollY >= 200) {
//          headerElement.classList.add('activated');
         
//      } else {
//          headerElement.classList.remove('activated');
//      };
// };

// window.addEventListener('scroll', scrollHeader);


// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');

     const toggleMenu = () => {
         const mobileMenu = selectElement('#menu');
         mobileMenu.classList.toggle('activated');
         menuToggleIcon.classList.toggle('activated');
     };

menuToggleIcon.addEventListener('click', toggleMenu)


// Close the search form popup on ESC keypress
window.addEventListener ('keyup', event=> {
    if(event.key === 'Escape') searchFromContainer.classList.remove('activated')
})

// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

     if(currentTheme){
         bodyElement.classList.add('light-theme');
     }
     
     themeToggleBtn.addEventListener('click', () => {
         bodyElement.classList.toggle('light-theme');
     
         if (bodyElement.classList.contains('light-theme')){
             localStorage.setItem('currentTheme', 'themeActive');

             } else {
                 localStorage.removeItem('themeActive');
             };
     });

     
// Open/Close search form popup
const formOpenBtn = selectElement('#search-icon');
const formCloseBtn= selectElement('#form-close-btn');
const searchFromContainer = selectElement('#search-form-container');

formOpenBtn.addEventListener ('click', () => searchFromContainer.classList.add('activated'))

formCloseBtn.addEventListener ('click', () => searchFromContainer.classList.remove('activated'))


// Swiper

const swiper = new Swiper('.swiper', {
    slidesPerView : 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el:'.swiper-pagination'
    },
    breakpoints : {
        700: {
        slidesPerView : 2,
            
        },
        1200: {
        slidesPerView : 3,
            
        }
    }
});