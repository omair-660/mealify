body = document.getElementById("body");
moon = document.getElementById("moon");
sun = document.getElementById("sun");

moon.onclick = function () {
  body.classList.add("dark");
  moon.classList.add("none") ;
  sun.classList.add("darkMode")  ;
}
sun.onclick = function () {
    body.classList.remove("dark");
    moon.classList.remove("none") ;
  sun.classList.remove("darkMode")  ;
}

links = document.getElementById("links");
hum = document.getElementById("hum");

hum.onclick = function () {
  links.classList.toggle("open");
  hum.classList.toggle("active");
}

home = document.getElementById("home");
chefs = document.getElementById("chefs");
gallery = document.getElementById("gallery");
contact = document.getElementById("contact");

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
