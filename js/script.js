const topNav = document.querySelector('.top-nav');
const navToggle = document.querySelector('#nav-toggle');
const barTop = document.querySelector('.bar-top');
const barBottom = document.querySelector('.bar-bottom');
const barMiddle = document.querySelector('.bar-middle');
const navList = document.querySelectorAll('.nav-link');
const logo = document.querySelector('#logo');
const cardContainer = document.querySelector('.card-container');
const portfolio = document.querySelector('#portfolio');

function PortfolioProject(id, title, description, featuredIMGURL, technologies, demoURL, linkToSource) {
  this.id = id;
  this.title = title;
  this.description = description;
  this.featuredIMG = featuredIMGURL;
  this.technologies = technologies;
  this.linkToDemo = demoURL;
  this.linkToSource = linkToSource;
}

function TitleProject(id, title, titleIMGURL, description, featuredIMGURL, technologies, demoURL, linkToSource) {
  this.id = id;
  this.title = title;
  this.titleIMGURL = titleIMGURL;
  this.description = description;
  this.featuredIMG = featuredIMGURL;
  this.technologies = technologies;
  this.linkToDemo = demoURL;
  this.linkToSource = linkToSource;
}

//url(../img/Img\ Placeholder.svg)

let titleCard = new TitleProject('title-project', 'Multi-Post Stories', '../img/Img\ Placeholder.svg', 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.', null, ['CSS', 'HTML', 'Bootstrap', 'Ruby'], '#', '#');

let project1 = new PortfolioProject('project1', 'Drinks I like', 'I like cocktails like Gin and Tonic, Moscow Mules, Micholadas, and anything strong enough to numb the sting Microverse\'s project Requirements!', '../img/modal.svg', ['CSS', 'Bootstrap', 'Ruby'], '#', '#');

// for (let [property, value] of Object.entries(titleCard)) {
//   console.log(`${property}: ${value}`);
// }

let titleContainer = document.createElement('div');
titleContainer.classList.add('title-project');
portfolio.insertBefore(titleContainer, cardContainer);

let featuredImageSpace = document.createElement('div');
featuredImageSpace.classList.add('featured-img-space');
titleContainer.appendChild(featuredImageSpace).appendChild(document.createElement('div'));


let menuExpanded = false;

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
  navList.forEach((link) => link.classList.add('display-block'));
}

function collapse() {
  topNav.style.height = 'inherit';
  topNav.style.alignItems = 'center';
  navList.forEach((link) => link.classList.remove('display-block'));
}

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

navToggle.addEventListener('click', () => {
  if (menuExpanded !== true) {
    openMenu();
  } else {
    closeMenu();
  }
});

window.addEventListener('resize', () => {
  if (menuExpanded && window.innerWidth > 674) {
    closeMenu();
    transformBars();
  }
});

navList.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    closeMenu();
  });
});
