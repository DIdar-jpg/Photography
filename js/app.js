// Burger
document.querySelector('.hamburger').addEventListener('click' , function (e) {
   e.preventDefault();
   if (this.classList.contains('is-active')) {
      this.classList.remove('is-active');
      document.querySelector('.intro').classList.remove('disappear');
      document.querySelector('.nav__mob').classList.remove('appear');
      document.querySelector('.header__item-mob__size').style.cssText = 'border-bottom: 2px solid var(--coal)';
      document.querySelector('.header').style.cssText = 'background: url(img/Intro/intro.jpg);';

   } else {
      this.classList.add('is-active');
      document.querySelector('.intro').classList.add('disappear');
      document.querySelector('.nav__mob').classList.add('appear');
      document.querySelector('.header__item-mob__size').style.cssText = 'border-bottom: 2px solid var(--white);';
      document.querySelector('.header').style.cssText = 'background: #000;';
   }
});






// Navigation Scroll
function Action(e){
   const ident = e.target.id;
   let ob ;
   switch (ident) {
      case 'about':
         ob = document.getElementById('about__scroll');
         ob.scrollIntoView(top);
         break;
      
      case 'portfolio':
         ob = document.getElementById('works_scroll');
         ob.scrollIntoView(top);
         break;

      case 'testimonials':
         ob = document.getElementById('testimoials_scroll');
         ob.scrollIntoView(top);
         break;


      case 'news':
         ob = document.getElementById('achievements_scroll');
         ob.scrollIntoView(top);
         break;

      case 'contact':
         ob = document.getElementById('register__scroll');
         ob.scrollIntoView(top);
         break;


      case 'services':
         ob = document.getElementById('services_scroll');
         ob.scrollIntoView(top);
         break;

      default:
         break;
   }
 };

document.getElementById('nav__mob__wrap').addEventListener('click', Action);

document.getElementById('nav__wrap').addEventListener('click' , Action);




// Services Read More
document.getElementById('services__in').addEventListener('click', function(e){
   const ident = e.target.id;

   if (ident == 'serv__active') {
      e.target.nextElementSibling.classList.toggle('description__toggle-on');
      e.target.nextElementSibling.nextElementSibling.classList.toggle('services__line-toggle-on');
      if (e.target.textContent === 'Read More') {
         e.target.textContent = 'Skip';
      } else {
         e.target.textContent = 'Read More'
      }
   }
 });
































