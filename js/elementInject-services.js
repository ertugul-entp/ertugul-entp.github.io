// HTML Template for adding service tiles
let htmlTemplate = `
<div class="ts-service-box">
    <div class="ts-service-image-wrapper">
        <img loading="lazy" class="w-100" src="mainServiceImage" alt="service-image">
    </div>
      <div class="d-flex">
        <div class="ts-service-box-img">
            <img loading="lazy" src="shortServiceIcon" alt="service-icon">
        </div>
        <div class="ts-service-info">
            <h3 class="service-box-title"><a href="service-single.html?id=serviceIDSet1">serviceNameSet</a></h3>
            <p>serviceDescSet</p>
            <a class="learn-more d-inline-block" href="service-single.html?id=serviceIDSet2" aria-label="service-details"><i class="fa fa-caret-right"></i> Learn more</a>
        </div>
    </div>
</div>
`;

// Function for adding as many service tiles by reading the serivces data
function addServiceTile(service) {
    // Change template data according to service data
    let thisTile = htmlTemplate.replace(`serviceIDSet1`, service.sId);
    thisTile = thisTile.replace(`serviceIDSet2`, service.sId);
    thisTile = thisTile.replace(`serviceNameSet`, service.sName);
    thisTile = thisTile.replace(`serviceDescSet`, service.sBrief);
    thisTile = thisTile.replace(`shortServiceIcon`, service.sIcon);
    thisTile = thisTile.replace(`mainServiceImage`, service.sPicture);

    // Create and Inject the element
    let newService = document.createElement("div");
    newService.setAttribute("class", "col-lg-4 col-md-6 mb-5");
    newService.innerHTML = thisTile;
    document.getElementById("injectAppendChild").appendChild(newService);
}

serviceData.forEach(addServiceTile);
