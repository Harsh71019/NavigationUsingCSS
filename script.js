const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

//Control Navigation Animation

function navAnimation(direction1, direction2) {
  navItems.map((nav, i) => {
    return nav.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    );
  });
}

function toggleNav() {
  //Toggle MenuBars Open/Closed
  menuBars.classList.toggle("change");
  //Toggle Menu Active Or Not
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    //Animate in Overlay
    // overlay.classList.add("overlay-slide-right");
    // overlay.classList.remove("overlay-slide-left");
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    //Animate In nav Items
    navAnimation("out", "in");
  } else {
    // overlay.classList.add("overlay-slide-left");
    // overlay.classList.remove("overlay-slide-right");
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    navAnimation("in", "out");
  }
}

//Event Listeners

menuBars.addEventListener("click", toggleNav);

navItems.map((nav) => {
  nav.addEventListener("click", toggleNav);
});
