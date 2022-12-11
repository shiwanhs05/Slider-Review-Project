import people from "./data.js";
import get from './getElement.js';
const slideContainer = get('.slide-container');
const nextBtn = get('.next-btn');
const prevBtn = get('.prev-btn');

// set slides
slideContainer.innerHTML = people.map((person, slideIndex) => {
  const {img, name, job, text} = person;
  let position = 'next';
  console.table(person);
  console.log(slideIndex);
  if(slideIndex === 0) {position='active'};
  if(slideIndex === people.length-1) {position='last'};
  return `<article class="slide ${position}">
        <img src="${img}" class="img" alt="${name}"/>
        <h4>${name}</h4>
        <p class="title">${job}</p>
        <p class="text">${text}</p>
        <div class="quote-icon">
          <i class="fas fa-quote-right"></i>
        </div>
      </article>`;
}).join('');

const startSlider = (type) => {
  const active = get('.active');
  const last = get('.last');
  let next = active.nextElementSibling;
  if(!next) next = slideContainer.firstElementChild;
  active.classList.remove('active');
  next.classList.remove('next');
  last.classList.remove('last');
  if(type === 'next'){
    active.classList.add('last');
    next.classList.add('active');
    last.classList.add('next');
  } 
  else if(type === 'prev'){
    last.classList.add('active');
    active.classList.add('next');
    next = last.previousElementSibling;
    if(!next) next = slideContainer.lastElementChild;
    next.classList.remove('next');
    next.classList.add('last');
  }
}

nextBtn.addEventListener('click', () => {
  startSlider('next');
})
prevBtn.addEventListener('click', () => {
  startSlider('prev');
})