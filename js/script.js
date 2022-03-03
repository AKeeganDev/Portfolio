const topNav = document.querySelector('.top-nav');
const navToggle = document.querySelector('#nav-toggle');
const barTop = document.querySelector('.bar-top');
const barBottom = document.querySelector('.bar-bottom');
const barMiddle = document.querySelector('.bar-middle');
const navList = document.querySelectorAll('.nav-link');
const logo = document.querySelector('#logo');
const cardContainer = document.querySelector('.card-container');
const portfolio = document.querySelector('#portfolio');

// Card objects for array

const card1 = {
  extraClasses: ['card1'], title: null, description: null, featuredIMGURL: null, technologies: null, demoURL: '#', linkToSource: '#', button: true,
};

const card2 = {
  extraClasses: ['card2'], title: 'Professional Art Printing Data', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard', featuredIMGURL: null, technologies: ['CSS', 'Bootsrap', 'Ruby'], demoURL: '#', linkToSource: '#', button: null,
};

const card3 = {
  extraClasses: ['card3'], title: 'Professional Art Printing Data', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard', featuredIMGURL: null, technologies: ['CSS', 'Bootsrap', 'Ruby'], demoURL: '#', linkToSource: '#', button: null,
};

const card4 = {
  extraClasses: null, title: 'Professional Art Printing Data', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard', featuredIMGURL: null, technologies: ['CSS', 'Bootsrap', 'Ruby'], demoURL: '#', linkToSource: '#', button: null,
};

const card5 = {
  extraClasses: ['card2'],
  title: 'Professional Art Printing Data',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
  featuredIMGURL: null,
  technologies: ['CSS', 'Bootsrap', 'Ruby'],
  demoURL: '#',
  linkToSource: '#',
  button: null,
};

const card6 = {
  extraClasses: ['card3'],
  title: 'Professional Art Printing Data',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
  featuredIMGURL: null,
  technologies: ['CSS', 'Bootsrap', 'Ruby'],
  demoURL: '#',
  linkToSource: '#',
  button: null,
};

const cardArray = [card1, card2, card3, card4, card5, card6];

// Top card object for painting the Recent Work top card

const titleProject = {
  title: 'Multi-Post Stories',
  titleIMGURL: '#',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  featuredIMGURL: '#',
  technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
  demoURL: '#',
  linkToSource: '#',
  button: true,
};

// Methods for combing through different properties and applying them in the various build functions

function addClasses(obj, element) {
  if (obj.extraClasses !== null) {
    const classArray = Array.from(obj.extraClasses);
    for (let i = 0; i < classArray.length; i += 1) {
      element.classList.add(classArray[i]);
    }
  }
}

function addTitle(obj, element) {
  if (obj.title !== null) {
    element.textContent += obj.title;
  }
}

function addDescription(obj, element) {
  if (obj.description !== null) {
    element.textContent += obj.description;
  }
}

function addTags(obj, element) {
  if (obj.technologies !== null) {
    const tagList = document.createElement('ul');
    const technologiesArray = Array.from(obj.technologies);
    for (let i = 0; i < technologiesArray.length; i += 1) {
      const listItem = document.createElement('li');
      listItem.classList.add('card-tag');
      const tag = document.createElement('div');
      tag.textContent += technologiesArray[i];
      listItem.appendChild(tag);
      tagList.appendChild(listItem);
    }
    element.appendChild(tagList);
  }
}

function addTitleDivTags(obj, element) {
  if (obj.technologies !== null) {
    const tagList = document.createElement('ul');
    const technologiesArray = Array.from(obj.technologies);
    for (let i = 0; i < technologiesArray.length; i += 1) {
      const listItem = document.createElement('li');
      const tag = document.createElement('div');
      tag.textContent += technologiesArray[i];
      listItem.appendChild(tag);
      tagList.appendChild(listItem);
    }
    element.appendChild(tagList);
  }
}

function addModalTags(obj, element) {
  if (obj.technologies !== null) {
    const tagList = document.createElement('ul');
    const technologiesArray = Array.from(obj.technologies);
    for (let i = 0; i < technologiesArray.length; i += 1) {
      const listItem = document.createElement('li');
      const tag = document.createElement('div');
      tag.textContent += technologiesArray[i];
      listItem.appendChild(tag);
      tagList.appendChild(listItem);
    }
    element.appendChild(tagList);
  }
}

function addButtons(obj, element) {
  if (obj.button !== null) {
    const button = document.createElement('button');
    const seeProject = document.createElement('span');
    seeProject.textContent += 'See Project';
    button.setAttribute('type', 'button');
    button.classList.add('see-project', 'card-button', 'open-modal');
    button.appendChild(seeProject);
    element.appendChild(button);
  }
}
// code that controles the different mobile-nav dropdown functionality
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

function buildTitleProjectCard(projectData) {
  // image space
  const titleContainer = document.createElement('div');
  titleContainer.classList.add('title-project');
  const featuredImageSpace = document.createElement('div');
  featuredImageSpace.classList.add('featured-img-space');
  titleContainer.appendChild(featuredImageSpace);
  const imgDiv = document.createElement('div');
  imgDiv.classList.add('featured-img');
  featuredImageSpace.appendChild(imgDiv);

  // header
  const descriptionSection = document.createElement('div');
  descriptionSection.classList.add('title-project-details');
  featuredImageSpace.appendChild(descriptionSection);
  const header = document.createElement('h3');
  header.textContent += projectData.title;
  descriptionSection.appendChild(header);

  // description
  const description = document.createElement('p');
  description.textContent += titleProject.description;
  descriptionSection.appendChild(description);

  // tags
  const tagBlock = document.createElement('div');
  tagBlock.classList.add('tags');
  addTitleDivTags(projectData, tagBlock);
  descriptionSection.appendChild(tagBlock);

  // button
  addButtons(projectData, descriptionSection);

  return titleContainer;
}

// paints the top card
const titleProjectCard = buildTitleProjectCard(titleProject);
portfolio.insertBefore(titleProjectCard, cardContainer);

function buildCard(projectData) {
  const card = document.createElement('div');
  card.classList.add('card');
  addClasses(projectData, card);
  const projectTitleDiv = document.createElement('div');
  projectTitleDiv.classList.add('card-details');
  card.appendChild(projectTitleDiv);
  const titleHeading = document.createElement('h3');
  addTitle(projectData, titleHeading);
  titleHeading.classList.add('project-title');
  projectTitleDiv.appendChild(titleHeading);
  const projectDescription = document.createElement('p');
  projectDescription.classList.add('project-description');
  addDescription(projectData, projectDescription);
  projectTitleDiv.appendChild(projectDescription);
  const tagBlock = document.createElement('div');
  tagBlock.classList.add('tags');
  addTags(projectData, tagBlock);
  projectTitleDiv.appendChild(tagBlock);
  addButtons(projectData, card);
  return card;
}

function drawCards(cardArray, section) {
  for (let i = 0; i < cardArray.length; i += 1) {
    const card = buildCard(cardArray[i]);
    section.appendChild(card);
  }
}

drawCards(cardArray, cardContainer);

const cardclick = document.querySelectorAll('.card');
const modalLinks = document.querySelector('.card-button');

const backdropsample = document.querySelector('#modal-backdrop1');

const modalObj = {
  mHeading: 'Multi-Post Stories', dHeading: 'Keeping track of hundreds of components website', technologies: ['HTML', 'Bootstrap', 'Ruby on rails'], imgSource: './img/modal-img.svg', modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.', mobileDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent', buttonText: 'See project',
};

function buildModal(obj) {
  const backdrop = document.createElement('div');
  backdrop.setAttribute('id', 'modal-backdrop');
  // created backdrop
  const modal = document.createElement('div');
  modal.id = 'modal';
  backdrop.classList.add('flex');
  backdrop.appendChild(modal);
  // add modal
  const headingContainer = document.createElement('div');
  const mobileHeading = document.createElement('h3');
  const desktopHeading = document.createElement('h3');
  mobileHeading.classList.add('mobile-modal-title');
  mobileHeading.textContent = obj.mHeading;
  headingContainer.appendChild(mobileHeading);
  headingContainer.classList.add('modal-header');
  headingContainer.appendChild(desktopHeading);
  const closeIcon = document.createElement('div');
  closeIcon.classList.add('modal-close');
  headingContainer.appendChild(closeIcon);
  closeIcon.addEventListener('click', () => {
    backdrop.classList.toggle('hidden');
    backdrop.classList.toggle('flex');
  });
  desktopHeading.classList.add('desktop-modal-title');
  desktopHeading.textContent = obj.dHeading;
  modal.appendChild(headingContainer);
  const tags = document.createElement('div');
  tags.classList.add('modal-tags');
  addModalTags(modalObj, tags);
  modal.appendChild(tags);
  const modalDetails = document.createElement('div');
  modalDetails.classList.add('modal-details');
  modal.appendChild(modalDetails);
  const modalImg = document.createElement('img');
  modalImg.src = obj.imgSource;
  modalImg.classList.add('modal-image');
  modalDetails.appendChild(modalImg);
  const modalDescription = document.createElement('div');
  modalDescription.classList.add('modal-description');
  modalDetails.appendChild(modalDescription);
  const description = document.createElement('p');
  description.textContent = obj.modalDescription;
  description.classList.add('modal-description-text-desktop');
  description.classList.add('desktop-modal-text');
  modalDescription.appendChild(description);
  const mobiletext = document.createElement('p');
  mobiletext.textContent = obj.mobileDescription;
  mobiletext.classList.add('mobile-modal-text');
  mobiletext.classList.add('modal-description-text-desktop');
  modalDescription.appendChild(mobiletext);
  const buttonHolder = document.createElement('div');
  buttonHolder.classList.add('flex');
  const demoButton = document.createElement('button');
  demoButton.type = 'button';
  demoButton.classList.add('see-project', 'modal-button', 'source-button');
  demoButton.textContent = 'See project';
  const demoIcon = document.createElement('div');
  demoIcon.classList.add('demo-icon');
  demoButton.appendChild(demoIcon);
  const sourceButton = document.createElement('button');
  sourceButton.type = 'button';
  sourceButton.classList.add('see-project', 'modal-button');
  sourceButton.textContent = 'See project';
  const sourceIcon = document.createElement('div');
  sourceIcon.classList.add('source-icon');
  sourceButton.appendChild(sourceIcon);

  buttonHolder.appendChild(demoButton);
  buttonHolder.appendChild(sourceButton);

  modalDescription.appendChild(buttonHolder);

  document.body.insertBefore(backdrop, backdropsample);
}

cardclick.forEach((link) => {
  link.addEventListener('click', () => {
    buildModal(modalObj);
  });
});

modalLinks.addEventListener('click', () => {
  buildModal(modalObj);
});

const form = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

email.addEventListener('input', function (event) {

  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    showError();
  }
});

form.addEventListener('submit', function (event) {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  emailError.className = 'error active';
}