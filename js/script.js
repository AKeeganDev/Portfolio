const navToggle = document.querySelector('#nav-toggle');
const barTop = document.querySelector('.bar-top');
const barBottom = document.querySelector('.bar-bottom');

navToggle.addEventListener('click', transform)

function transform () {
  console.log('test');
  barTop.classList.toggle('change');
  barBottom.classList.toggle('change');
}