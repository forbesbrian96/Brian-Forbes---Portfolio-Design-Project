////////////////////////////////////////////
//////JAVA SCRIPT
////////////////////////////////////////////







////////////////////////////////////////////
//////JQUERY FUNCTIONALITY
////////////////////////////////////////////
$(()=>{

    //Nav Button Functionality

    //Bio
    const $bio = $("#bio-button");
    const $bioText = $("#bio-text");

    const openBio = () => {
      $bioText.css("display", "block");
    };

    $bio.on("click", openBio);

    //Projects
    const $projects = $("#projects-button")
    const $projectsPhoto = $("#projects-photo")

    const openProjects = () => {
        $projectsPhoto.css("display", "block")
    }

    $projects.on("click", openProjects)
})