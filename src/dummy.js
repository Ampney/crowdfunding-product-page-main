const openNav = document.querySelector('#hamburger');
const modals = document.querySelector('.modal_link');
const b = document.querySelector('#hamburger > img');
const btn = document.querySelector("#btn_one");
const complete = document.querySelectorAll('.complete');
const success = document.querySelector('.modalSuccess');
const secModals = document.querySelector('.modalSection');
const modalClose = document.querySelector('#modalClose > img');
const digit = document.querySelectorAll('.digit');
const radio = document.querySelectorAll("input");
const y = document.querySelectorAll('.donate');



let showMenu = false;
  openNav.addEventListener('click', togglesMenu);

 function togglesMenu() {

    if(!showMenu) {
      b.setAttribute('src', '../images/icon-close-menu.svg');
      modals.style.display = 'block';
      showMenu = true;
    } else {
      b.setAttribute('src', '../images/icon-hamburger.svg');
      modals.style.display = 'none';
      showMenu = false;
    }

  }

 btn.addEventListener('click', togDisplay);

 function togDisplay() {

   if (!showMenu) {
     secModals.style.display = 'block';
   } else {
     secModals.style.display = 'none';
   }

 }

 modalClose.addEventListener('click', function () {

   if (!togDisplay()) {
     secModals.style.display = 'none';
   }
 });
  
  let donate = false;
  let isClicked = false;

 radio.forEach(element => {

   element.addEventListener('click', (e) => {
     isClicked = true;
     y.forEach(div => {
       div.style.display = 'none ';
      });
      e.target.parentNode.parentNode.parentNode.lastElementChild.style.display = 'block '
  })

    digit.forEach(element => {
      element.addEventListener('click', () =>{
    donate = true;
      element.value =  '$  ';
    });
  });
  
});

complete.forEach(element => {
  element.addEventListener('click', function () {
    if(!showMenu) {
      secModals.style.display = 'none' ;
      success.style.display = 'block';
    }
  })
});

