import projects from "./projects.js";
let projectContainer = document.querySelector(".projects");
let  projectDiv  = '';


projects.forEach((project, i) => {
let url = project.imageUrl;
    projectDiv += `
    <div class="project-bg-img" id=project_${i}>
    <div class="project-overlay">
    <h1 class="project-title">${project.name}</h1>
    <p class="project-summary">
     ${project.description}
    </p>
    <a href="${project.url}">Visit Website</a>
  </div>
  </div>
  `; 
 
});

projectContainer.innerHTML = projectDiv;

console.log(projectContainer)
