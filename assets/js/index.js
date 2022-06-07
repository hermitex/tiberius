// Get the projects
import projects from "./projects.js";

// Grab the projects container
let projectContainer = document.querySelector(".projects");
let projectDiv = "";

// Grab the first h1
let developerTitle = document.querySelector(".title.main-title").textContent;

// Grab the project overlay container
let projectOverlay = document.querySelector(".project-overlay");

// Prepare the projects page
projects.forEach((project, i) => {
  projectDiv += `
    <div class="project-bg-img" id=project_${i}>
    <div class="project-overlay">
    <h1 class="project-title">${project.name}</h1>
    <p class="project-summary">
     ${project.description}
    </p>
    <a href="${project.url}" class="border-secondary">Visit Website</a>
  </div>
  </div>
  `;
})

projectContainer.innerHTML = projectDiv;

const animateLetters = (sentence) => {
  let letters = sentence.split('');

  letters.forEach(letter =>{
    if(letter !== ' '){
      let span = document.createElement('span');
      span.textContent = letter;      
    }
  })
} 


animateLetters(developerTitle);


