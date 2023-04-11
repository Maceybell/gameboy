// Gameboy container
const gameboy = document.querySelector(".gameboy");

// Screen container and screen
const screenContainer = document.querySelector(".screen-container");
const screen = document.querySelector(".screen");

// Menu and menu items
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu button");
const projectsItem = document.querySelector(".menu button:nth-child(1)");
const skillsItem = document.querySelector(".menu button:nth-child(2)");
const aboutItem = document.querySelector(".menu button:nth-child(3)");
const contactItem = document.querySelector(".menu button:nth-child(4)");
const resumeItem = document.querySelector(".menu button:nth-child(5)");
const focusedItem = document.querySelector(".menu button:focus");

// Macey container and Macey Bell span
const maceyContainer = document.querySelector(".macey");
const bellSpan = document.querySelector(".bell");

// Arrow pad and directional buttons
const arrowPad = document.querySelector(".arrow-pad");
const leftButton = document.querySelector("#left");
const upButton = document.querySelector("#up");
const rightButton = document.querySelector("#right");
const downButton = document.querySelector("#down");

// A and B buttons
const aButton = document.querySelector("#a");
const bButton = document.querySelector("#b");

// Start button and home/menu ovals
const startButton = document.querySelector(".start");
const homeOval = document.querySelectorAll(".oval")[0];
const menuOval = document.querySelectorAll(".oval")[1];
const homeButton = homeOval.querySelector(".home-btn");
const menuButton = menuOval.querySelector(".menu-btn");

const xButton = document.querySelector(".close");
const openGameboyButton = document.querySelector(".gameboy-toggle");
const projects = document.querySelector(".projects")
const projectLink = (document.querySelectorAll(".project-link"))
const skills = document.querySelector(".skills")
const about = document.querySelector(".about")


let lastHoveredItem = null;

/*/MENU CONTROLS/*/

// Focus the first menu item when the page loads
window.addEventListener("load", function () {
  projectsItem.focus();
});

// Remove focus from any previously focused items when hovering over a new menu item
document.querySelectorAll(".menu button").forEach((item) => {
  item.addEventListener("mouseover", function () {
    if (lastHoveredItem !== this) {
      // Remove focus from any previously focused items
      document.activeElement.blur();
      // Set focus on the newly hovered item
      this.focus();
      // Keep track of the last hovered item
      lastHoveredItem = this;
    }
  });
});

// Set focus on the last hovered item when the menu is focused
document.querySelector(".menu").addEventListener("focus", function () {
  if (lastHoveredItem) {
    lastHoveredItem.focus();
  }
});

// Reset the last hovered item when a menu item is clicked
document.querySelectorAll(".menu a").forEach((item) => {
  item.addEventListener("click", function () {
    lastHoveredItem = null;
  });
});


// Close the menu using b button
bButton.addEventListener("click", () => {
  const menu = document.querySelector(".menu");
  menu.classList.add("hide");
});

let lastFocusedItem;

// Add event listeners for focusing and unfocusing menu items
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("focus", () => {
    lastFocusedItem = menuItem;
    menuItem.classList.add("focused");
  });

  menuItem.addEventListener("blur", () => {
    menuItem.classList.remove("focused");
  });
});

// Add event listener for clicking the A button
aButton.addEventListener("click", () => {
  // Check if the last focused item is still visible on the screen
  if (getComputedStyle(menu).display !== "none") {
    lastFocusedItem.click();
  } 
});

//Hide the menu when window is blurred
window.addEventListener("blur", () => {
  menu.classList.add("hide");
});

//Toggle hide/show the menu when the menu button is clicked
menuButton.addEventListener("click", () => {
  menu.classList.toggle("hide");
  if (getComputedStyle(menu).display !== "none") {
    projectsItem.focus();
  }
});

//Hide the gameboy when the x button is clicked and show the gameboy open button
xButton.addEventListener("click", () => {
  gameboy.classList.add("hide");
  openGameboyButton.classList.remove("hide");
});

// Show the gameboy when the gameboy toggle button is clicked and focus on the first item
openGameboyButton.addEventListener("click", () => {
  gameboy.classList.remove("hide");
  openGameboyButton.classList.add("hide");
  menu.classList.remove('hide')
  projectsItem.focus();
});

// Change the focused menu item to the appropriate item when down button is clicked
downButton.addEventListener("click", () => {
  if (getComputedStyle(menu).display !== "none") {
    if (lastFocusedItem === projectsItem) {
      skillsItem.focus();
    } else if (lastFocusedItem === skillsItem) {
      aboutItem.focus();
    } else if (lastFocusedItem === aboutItem) {
      contactItem.focus();
    } else if (lastFocusedItem === contactItem) {
      resumeItem.focus();
    } else if (lastFocusedItem === resumeItem) {
      projectsItem.focus();
    }
  }
});

// Change the focused menu item to the appropriate item when up button is clicked 
upButton.addEventListener("click", () => {
  if (getComputedStyle(menu).display !== "none") {
    if (lastFocusedItem === projectsItem) {
      resumeItem.focus();
    } else if (lastFocusedItem === skillsItem) {
      projectsItem.focus();
    } else if (lastFocusedItem === aboutItem) {
      skillsItem.focus();
    } else if (lastFocusedItem === contactItem) {
      aboutItem.focus();
    } else if (lastFocusedItem === resumeItem) {
      contactItem.focus();
    }
  }
});

projectsItem.addEventListener("click", () => {
    menu.classList.add("hide")
    skills.classList.add("hide")
    // about.classList.add("hide")
    // contact.classList.add("hide")
    // resume.classList.add("hide")
    projects.classList.remove("hide")
    
})
skillsItem.addEventListener("click", () => {
    menu.classList.add("hide")
    skills.classList.remove("hide")
    projects.classList.add("hide")
    
})

/*/MENU CONTROLS/*/


/*/PROJECTS /*/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

rightButton.addEventListener("click", () => {
    if (getComputedStyle(projects).display !== "none"){
    plusSlides(+1)}
})
leftButton.addEventListener("click", () => {
    if (getComputedStyle(projects).display !== "none"){
        plusSlides(-1)}
})

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
}

/*/PRoJECTS/*/

/*/ ABOUT /*/
