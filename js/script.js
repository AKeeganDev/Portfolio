const topNav = document.querySelector('.top-nav');
const navToggle = document.querySelector('#nav-toggle');
const barTop = document.querySelector('.bar-top');
const barBottom = document.querySelector('.bar-bottom');
const barMiddle = document.querySelector('.bar-middle');
const navList = document.querySelectorAll('.nav-link');
const navListItem = document.querySelector('.nav-link');
const logo = document.querySelector('#logo');

let menuExpanded = false;

navToggle.addEventListener('click', () => {
  if (menuExpanded !== true) {
    openMenu();
  } else {
    closeMenu();
  }
})

window.addEventListener('resize', () => {
  if (menuExpanded && window.innerWidth > 674) {
    closeMenu();
    transformBars;
  }
})

navList.forEach(navItem => {
  navItem.addEventListener('click', () => {
    closeMenu();
  })
}
)

function openMenu() {
  menuExpanded = true;
  transformClose();
  expand();
  logo.classList.toggle('hidden');
}

function closeMenu() {
  menuExpanded = false;
  transformBars();
  collapse();
  logo.classList.remove('hidden');
}

function transformClose() {
  barTop.classList.toggle('change');
  barBottom.classList.toggle('change');
  barMiddle.classList.toggle('hidden');
}

function transformBars() {
  barTop.classList.toggle('change');
  barBottom.classList.toggle('change');
  barMiddle.classList.toggle('hidden');
}


function expand() {
  topNav.style.height = '100vh';
  topNav.style.alignItems = 'flex-start';
  navList.forEach(link => link.classList.add('display-block'));
}

function collapse() {
  topNav.style.height = 'inherit';
  topNav.style.alignItems = 'center';
  navList.forEach(link => link.classList.remove('display-block'));
}