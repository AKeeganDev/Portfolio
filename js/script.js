const topNav = document.querySelector('.top-nav');
const navToggle = document.querySelector('#nav-toggle');
const barTop = document.querySelector('.bar-top');
const barBottom = document.querySelector('.bar-bottom');
const barMiddle = document.querySelector('.bar-middle');
const navLinks = document.querySelectorAll('.nav-link');
const navLink = document.querySelector('.nav-link');
const logo = document.querySelector('#logo');



navToggle.addEventListener('click', () => {
  transform();
  expand();
  logo.classList.toggle('hidden');
})

function transform() {
  console.log('test');
  barTop.classList.toggle('change');
  barBottom.classList.toggle('change');
  barMiddle.classList.toggle('hidden');
}


function expand() {
  topNav.classList.add('fill-height');
  navLinks.forEach(link => link.classList.add('display-block'));
}