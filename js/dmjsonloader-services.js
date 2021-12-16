// Fetch Service ID From URL Parameters
let urlString = location.search;
let paramString = urlString.split('?')[1];
let params_arr = paramString.split('&');
let pair = params_arr[0].split('=');
let id = pair[1];
let service;

// Function For Fetching The Right Project From JSONs
function fetchJson(jsonarr) {
    if (jsonarr.sId === id) {
        service = jsonarr;
    }
}

serviceData.forEach(fetchJson);

// Changing HTML Elements according to jsonarr
document.getElementById("serviceHeader").innerHTML = service.sName;
document.getElementById("servicePara1").innerHTML = service.sPara1;
document.getElementById("servicePara2").innerHTML = service.sPara2;
document.getElementById("serviceDifference").innerHTML = service.sDifference;

// document.getElementById("injectorMethod").innerHTML = service.sysYkL1;

document.getElementById("injectImage1").setAttribute("src", service.sPicture);

document.getElementById("activeService").innerHTML = service.sName;

// Change sidebar items according to jsonarr
function addServiceTile(service2) {
    // Change template data according to project data
    let thisTile = `<a href="service-single.html?id=${service2.sId}">${service2.sName}</a>`;

    // Create and Inject the element
    let newService = document.createElement("li");
    if (service2.sId === service.sId) {
        newService.setAttribute("class", "active");
    }

    newService.innerHTML = thisTile;
    document.getElementById("injectAppendChild").appendChild(newService);
}

serviceData.forEach(addServiceTile);