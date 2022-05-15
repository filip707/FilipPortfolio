const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
});

const navslide = () => {
    const burger = document.querySelector ('.hamburger');
    const nav = document.querySelector ('.menu');
    const navbutt = document.querySelector ('.dugmici');
   

    burger.addEventListener('click', ()=>{
        nav.classList.toggle ('menu-active');
        navbutt.classList.toggle ('dugmici-active');
    });
}
navslide();

const navAnchorHome = document.getElementById ('closemenu');
const navAnchorProj = document.getElementById ('closemenu1');
const navAnchorAbout = document.getElementById ('closemenu2');
const nav = document.querySelector ('.menu');
const navbutt = document.querySelector ('.dugmici');
const burger = document.querySelector ('.hamburger');

navAnchorHome.addEventListener ('click', zatvoriMe, false);
navAnchorProj.addEventListener ('click', zatvoriMe, false);
navAnchorAbout.addEventListener ('click', zatvoriMe, false);

function zatvoriMe() {
  nav.classList.toggle ('menu-active');
  navbutt.classList.toggle ('dugmici-active');
  burger.classList.remove('is-active')

}




var section = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('a');

window.onscroll = () =>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        

        if (top>=offset && top < offset + height) {
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('a[href*='+id+']').classList.add('active');
            })
        }
    })
}


var eye = document.querySelector('.iris');
window.addEventListener('mousemove', (event) => {
    var x = -(window.innerWidth / 2 - event.pageX) / 95;
    var y = -(window.innerWidth / 2 - event.pageY) /205;

    eye.style.transform = `rotate(-45deg) translateY(${y}px) translateX(${x}px)`;   
});


window.addEventListener ('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll ('.supr');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals [i].getBoundingClientRect().top;
        var revealpoint=150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add ('active')

        }else {
            reveals[i].classList.remove('active');
        }
        
    }
}



const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


const inputs = document.querySelectorAll('.input');

function focusFunc () {
  let parent = this.parentNode;
  parent.classList.add('focus');
}

function blurFunc () {
  let parent = this.parentNode;
  if (this.value == '') {
  parent.classList.remove('focus');
  }
}

inputs.forEach ((input) => {
  input.addEventListener ('focus', focusFunc);
  input.addEventListener ('blur', blurFunc)
})


var moon = document.getElementById ('moon');
var stars = document.getElementById ('stars');
var rocket = document.getElementById ('rocket');
var frontPart = document.getElementById ('frontpart');
var text = document.getElementById ('text');

window.addEventListener('scroll', rolrol, false);

function rolrol() {
  var value = window.scrollY;
  if (value < 1000) {
    frontPart.style.marginTop= value * 0.80 +'px';
    stars.style.left= value * 0.25 +'px';
    moon.style.marginTop= value * 2.05 +'px';
  }
}
rolrol();
