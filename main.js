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
