////////////////////////////////////////////
//////JAVA SCRIPT
////////////////////////////////////////////







////////////////////////////////////////////
//////JQUERY FUNCTIONALITY
////////////////////////////////////////////
$(()=>{

    //Nav Button Functionality

    //Home 
    const $home = $("#home-button")
    const $homeText = $("#home-text")

    const openHome = () => {
        $homeText.css("display", "flex")
        $bioText.css("display", "none")
        $projectsPhoto.css("display", "none")
    }

    
    $home.on("click", openHome)

    //Bio
    const $bio = $("#bio-button");
    const $bioText = $("#bio-text");
    const $bioPhotos = $("bio-photo")

    const openBio = () => {
      $bioText.css("display", "flex")
      $bioPhotos.css("display", "flex")
      $homeText.css("display", "none")
      $projectsPhoto.css("display", "none")
    };

    $bio.on("click", openBio);

    //Projects
    const $projects = $("#projects-button")
    const $projectsPhoto = $("#projects-photo-row")

    const openProjects = () => {
        $projectsPhoto.css("display", "flex")
        $homeText.css("display", "none")
        $bioText.css("display", "none")
    }

    $projects.on("click", openProjects)

    //Display Themes

    // function myFunction() {
    //     document.getElementById("myDropdown").classList.toggle("show");
    //   }

    const $displayThemes = $("#display-themes-button")
    const $dropdown = $("#dropdown")

   const dropDownToggle = () => {
    $dropdown.toggle(500);
   }

    $displayThemes.on("click", dropDownToggle)
})