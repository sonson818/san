let opener = document.getElementById('open');
let closer = document.getElementById('close');
let navbar = document.getElementById('navbar');
let home = document.getElementById("home");
let about = document.getElementById("about");
let skills = document.getElementById("skills");
let project = document.getElementById("project");
let contact = document.getElementById("contact");
let btnScroll = document.getElementById("btnScroll");
let btnContact = document.getElementById("btnContact");

opener.onclick = function() {
  opener.style.display = "none";
  closer.style.display = "block";
  navbar.style.display = "block";
}
closer.onclick = function() {
  opener.style.display = "block";
  closer.style.display = "none";
  navbar.style.display = "none";
}

// Scroll

window.onscroll = function () {
  if (scrollY >= 100) {
    btnScroll.style.display = "block";
  } else {
    btnScroll.style.display = "none";
  }
};
btnScroll.onclick = function () {
  scroll({
    top: 0,
    behavior: "smooth",
  });
};
window.addEventListener('DOMContentLoaded', () => {
  const viewporHeight = window.innerHeight;
  const viewporWidth = window.innerWidth;
  if (viewporHeight > 900 && viewporWidth > 1900 ) {
    home.onclick = function () {
      scroll({
        top: 0,
        behavior: "smooth",
      });
    };
    skills.onclick = function () {
      scroll({
        top: 820,
        behavior: "smooth",
      });
    };
    project.onclick = function () {
      scroll({
        top: 1650,
        behavior: "smooth",
      });
    };
  }
})