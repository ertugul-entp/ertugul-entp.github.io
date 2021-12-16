// Fetch Project ID From URL Parameters
let urlString = location.search;
let paramString = urlString.split('?')[1];
let params_arr = paramString.split('&');
let pair = params_arr[0].split('=');
let id = pair[1];
let project;

// Function For Fetching The Right Project From JSONs
function fetchJson(jsonarr) {
    if (jsonarr.pId === id) {
        project = jsonarr;
    }
}

projectData.forEach(fetchJson);

// Changing HTML Elements according to jsonarr
document.getElementById("proj-client").innerHTML = project.pClient;
document.getElementById("proj-location").innerHTML = project.pLocation;
document.getElementById("proj-size").innerHTML = project.pSize;
document.getElementById("proj-year").innerHTML = project.pYear;
document.getElementById("proj-category").innerHTML = project.pCat;
document.getElementById("proj-namen").innerHTML = project.pName;
document.getElementById("proj-desc").innerHTML = project.pDesc;
document.getElementById("breadcrumbPName").innerHTML = project.pName;
document.getElementById("proj-img1").setAttribute("src", project.pImage);
document.getElementById("proj-img2").setAttribute("src", project.pImage2);