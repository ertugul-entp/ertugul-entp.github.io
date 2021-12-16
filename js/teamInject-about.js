// HTML Template for adding member tiles
let htmlTemplate = `
<div class="ts-team-wrapper">
    <div class="team-img-wrapper">
      <img loading="lazy" class="w-100" src="teamMemberPicture" alt="team-img">
    </div>
    <div class="ts-team-content">
      <h3 class="ts-name">teamMemberName</h3>
      <p class="ts-designation">teamMemberRank</p>
      <p class="ts-description">teamMemberBrief</p>
    </div>
</div>
`;

// Function for adding as many member tiles by reading the member data
function addMemberTile(member) {
    // Change template data according to member data
    let thisTile = htmlTemplate.replace(`teamMemberName`, member.tName);
    thisTile = thisTile.replace(`teamMemberRank`, member.tRank);
    thisTile = thisTile.replace(`teamMemberBrief`, member.tBrief);
    thisTile = thisTile.replace(`teamMemberPicture`, member.tPicture);

    // Create and Inject the element
    let newService = document.createElement("div");
    newService.setAttribute("class", "item");
    newService.innerHTML = thisTile;
    document.getElementById("team-slide").appendChild(newService);
}

teamData.forEach(addMemberTile);
