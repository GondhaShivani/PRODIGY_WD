window.addEventListener("scroll", function () {
  var contentcl = document.getElementById("content");
  if (window.scrollY < 400) {
    contentcl.style.backgroundColor = "cyan";
    contentcl.style.color = "black";
  } else if (window.scrollY > 400 && window.scrollY < 800) {
    contentcl.style.backgroundColor = "pink";
    contentcl.style.color = "blue";
  } else if (window.scrollY > 800 && window.scrollY < 1200) {
    contentcl.style.backgroundColor = "blue";
    contentcl.style.color = "white";
  } else {
    contentcl.style.backgroundColor = "yellow";
    contentcl.style.color = "brown";
  }
});

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
