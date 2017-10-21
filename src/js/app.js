var forEach = require("lodash/forEach");
var TweenLite = require("gsap/TweenLite");

require("dom4");

var settings = {
  "imagePath": "/",
  "templates" : {}
}

window.addEventListener("load", function() {
  var sections = document.querySelectorAll("section");
  var h = window.innerHeight;
  forEach(sections, function(el) {
    el.style.height = h + "px";
    console.log(el,h);
  });
});
