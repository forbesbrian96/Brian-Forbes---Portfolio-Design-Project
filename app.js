////////////////////////////////////////////
//////JQUERY FUNCTIONALITY
////////////////////////////////////////////
$(()=>{
  //Nav Button Functionality

  //Home
  const $home = $("#home-button");
  const $homeText = $("#home-text");

  const openHome = () => {
    $homeText.css("display", "flex");
    $bioText.css("display", "none");
    $projectsPhoto.css("display", "none");
  };

  $home.on("click", openHome);

  //Bio
  const $bio = $("#bio-button");
  const $bioText = $("#bio-text");
  const $bioPhotos = $("bio-photo");

  const openBio = () => {
    $bioText.css("display", "flex");
    $bioPhotos.css("display", "flex");
    $homeText.css("display", "none");
    $projectsPhoto.css("display", "none");
  };

  $bio.on("click", openBio);

  //Projects
  const $projects = $("#projects-button");
  const $projectsPhoto = $("#projects-photo-row");

  const openProjects = () => {
    $projectsPhoto.css("display", "flex");
    $homeText.css("display", "none");
    $bioText.css("display", "none");
  };

  $projects.on("click", openProjects);

  //Display Themes

  const $displayThemes = $("#display-themes-button");
  const $dropdown = $("#dropdown");

  const dropDownToggle = () => {
    $dropdown.toggle(400);
  };

  $displayThemes.on("click", dropDownToggle);

  //Display Themes Dropdown Options

  //Night Mode

  const $nightMode = $("#night-mode");

  //LEARNING MOMENT: CANNOT USE RGBA COLORS IN .CSS, BUT HEX AND NAMES ARE FINE
  const nightHover = () => {
    $("button").removeClass("nav-button")
    $("button").addClass("night-hover")
  }

  const nightHoverRemove = () => {
    $("button").removeClass("night-hover")
    $("button").addClass("nav-button")
  }

  const nightMode = () => {
    $("body").css("background-color", "black");
    $("body").css("color", "white");
    $(".nav").css("background-color", "#C0C0C0");
    $(".nav").css("box-shadow", "0px 8px 16px 0px #C0C0C0e6");
    $(".dropdown-content").css("box-shadow", "0px 8px 16px 0px #C0C0C0");
    $("button").css("background-color", "#C0C0C0");
    $("footer").css("background-color", "#C0C0C0");
    $("footer").css("box-shadow", "0px 8px 16px 0px #C0C0C0e6");
    let nightBoolean = false
    if (nightBoolean === false) {
      $("button").hover(nightHover, nightHoverRemove)
      }
  };

  $nightMode.on("click", nightMode);
  //nightHover doesn't work
  // $("button").on("hover", nightHover)

  
  

  //Ruby
  const $ruby = $("#ruby");

  const ruby = () => {
    $("body").css("background-color", "#ae001a");
    $("body").css("color", "white");
    $(".nav").css("background-color", "#e10531");
    $(".nav").css("box-shadow", "0px 8px 16px 0px #6b0015e6");
    $(".dropdown-content").css("box-shadow", "0px 8px 16px 0px #6b0015e6");
    $("button").css("background-color", "#e10531");
    $("button").css("color", "white")
    $("footer").css("background-color", "#6b0015");
    $("footer").css("box-shadow", "0px 8px 16px 0px #6b0015e6");
  };

  $ruby.on("click", ruby);

  //Pastel
  const $pastel = $("#pastel")

  const pastel = () => {
    $("body").css("background-color", "#b8d8be");
    $("body").css("color", "black");
    $(".nav").css("background-color", "#ecbcd7");
    $(".nav").css("box-shadow", "0px 8px 16px 0px #d8d3e4");
    $(".dropdown-content").css("box-shadow", "0px 8px 16px 0px #d8d3e4");
    $("button").css("background-color", "#d8d3e4");
    $("button").css("color", "black")
    $("footer").css("background-color", "#c5e9f1");
    $("footer").css("box-shadow", "0px 8px 16px 0px #d8d3e4");
  };

  $pastel.on("click", pastel)

  //default

  const $default = $("#default");

  const defaultTheme = () => {
    $("body").css("background-color", "#e6c420");
    $("body").css("color", "black");
    $(".nav").css("background-color", "#e67319");
    $(".nav").css("box-shadow", "0px 8px 16px 0px #998211e6");
    $(".dropdown-content").css("box-shadow", "0px 8px 16px 0px #998211e6");
    $("button").css("background-color", "#e67319");
    $("button").css("color", "black");
    $("footer").css("background-color", "#993b2c");
    $("footer").css("box-shadow", "0px 8px 16px 0px #998211e6");
  };

  $default.on("click", defaultTheme);
})