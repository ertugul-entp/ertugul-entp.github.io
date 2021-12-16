// HTML Template for adding project tiles
let htmlTemplate = `
  <div class="project-img-container">
    <a class="gallery-popup" href="projectImage1">
      <img class="img-fluid" src="projectImage2" alt="project-image">
      <span class="gallery-icon"><i class="fa fa-plus"></i></span>
    </a>
    <div class="project-item-info">
      <div class="project-item-info-content">
        <h3 class="project-item-title">
          <a href="projects-single.html?id=001">projectFrontName</a>
        </h3>
        <p class="project-cat">projectFrontCat</p>
      </div>
    </div>
  </div>
`;

// Function for adding as many project tiles by reading the projects data
function addProjTile(project) {
    // Change template data according to project data
    let thisTile = htmlTemplate.replace(`<a href=\"projects-single.html?id=001\">projectFrontName</a>`, `<a href=\"projects-single.html?id=${project.pId}\">${project.pName}</a>`)
    thisTile = thisTile.replace(`projectFrontCat`, project.pCat)
    thisTile = thisTile.replace(`projectImage1`, project.pImage)
    thisTile = thisTile.replace(`projectImage2`, project.pImage)

    // Create and Inject the element
    let newProject = document.createElement("div");
    newProject.setAttribute("class", "col-lg-4 col-md-6 shuffle-item");
    newProject.innerHTML = thisTile;
    document.getElementById("injectAppendChild").appendChild(newProject);
}

projectData.forEach(addProjTile);
