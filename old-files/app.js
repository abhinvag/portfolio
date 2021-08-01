const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
var carouselSlide, carouselImages,size; 
const prevBtn = document.querySelector('#prevButton');
const nextBtn = document.querySelector('#nextButton');


if(window.screen.width <= 768){
  carouselSlide = document.querySelector('.carousel-slide-mobile');
  carouselImages = document.querySelectorAll('.carousel-slide-mobile img');
  size = 202;
}
else{
  carouselSlide = document.querySelector('.carousel-slide');
  carouselImages = document.querySelectorAll('.carousel-slide img');
  size = carouselImages[0].clientWidth;
}



let menuOpen = false;
let counter = 1;

carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

nextBtn.addEventListener('click', ()=>{
  if(counter >= carouselImages.length - 1){
    return
  };
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
  if(counter <= 0){
    return
  };
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
  if(carouselImages[counter].id === 'lastClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
  }
  if(carouselImages[counter].id === 'firstClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
  }
})


hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  if(!menuOpen){
    hamburger.classList.add("trans");
    menuOpen = true;
  }
  else{
    hamburger.classList.remove("trans");
    menuOpen = false;
  }
  
});



