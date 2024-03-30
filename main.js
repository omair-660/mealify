let body = document.getElementById("body");
let moon = document.getElementById("moon");
let sun = document.getElementById("sun");

if (localStorage.getItem("darkMode") === "true") {
  body.classList.add("dark");
  moon.classList.add("none");
  sun.classList.add("darkMode");
}

moon.onclick = function () {
  body.classList.add("dark");
  moon.classList.add("none");
  sun.classList.add("darkMode");
  localStorage.setItem("darkMode", "true");
};

sun.onclick = function () {
  body.classList.remove("dark");
  moon.classList.remove("none");
  sun.classList.remove("darkMode");
  localStorage.setItem("darkMode", "false");
};



let links = document.getElementById("links");
let hum = document.getElementById("hum");

hum.onclick = function () {
  links.classList.toggle("open");
  hum.classList.toggle("active");
}

let home = document.getElementById("home");
let chefs = document.getElementById("chefs");
let gallery = document.getElementById("gallery");
let contact = document.getElementById("contact");

home.onclick = function () {
  home.classList.add("on");
  gallery.classList.remove("on");
  contact.classList.remove("on");
  chefs.classList.remove("on");
}
chefs.onclick = function () {
  chefs.classList.add("on");
  home.classList.remove("on");
  gallery.classList.remove("on");
  contact.classList.remove("on");
}
gallery.onclick = function () {
  gallery.classList.add("on");
  chefs.classList.remove("on");
  home.classList.remove("on");
  contact.classList.remove("on");
}
contact.onclick = function () {
  contact.classList.add("on");
  gallery.classList.remove("on");
  chefs.classList.remove("on");
  home.classList.remove("on");
}
document.oncontextmenu = function() {
return false;
};
document.onkeydown = function(e) {
if (e.keyCode == 123) {
return false;
}
if (e.ctrlKey && e.shiftKey && e.keyCode ==  I .charCodeAt(0)) {
return false;
}
if (e.ctrlKey && e.shiftKey && e.keyCode ==  J .charCodeAt(0)) {
return false;
}
if (e.ctrlKey && e.keyCode ==  U .charCodeAt(0)) {
return false;
}
if (e.ctrlKey && e.shiftKey && e.keyCode ==  C .charCodeAt(0)) {
return false;
}

}
