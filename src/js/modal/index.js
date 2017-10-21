var parseHTML = require("als-utils/parse-html");
var getDefaults = require("lodash/defaults");
var generateHash = require("als-utils/generate-hash");
var defaultOpts = {
  "content":"<h1>Sample Content</h1><p>Sample Content</p>",
  "closeButton":"&times;",
  "closeOnOutsideClick":true,
  "bodyClass":"modal-open",
  "template":require("./default-template.pug"),
  "onLoad":function(e) {console.log("loaded");},
  "onClose":function(e) {console.log("closed");}
}

function Modal(opts) {
  this.opts = getDefaults(opts, defaultOpts);
  this.opts.id = generateHash();

  this.modal = parseHTML(this.opts.template(this.opts));
}
Modal.prototype.open = function() {
  var self = this;
  document.body.classList.add(this.opts.bodyClass);
  document.body.append(this.modal);
  this.closeButton = document.querySelectorAll("[data-close-modal='"+this.opts.id+"']")[0];
  this.closeButton.addEventListener("click", closeModal);
  function closeModal(e) {
    e.preventDefault();
    self.close();
    return false;
  }
}
Modal.prototype.close = function() {
  if (document.body.classList.item(this.opts.bodyClass)) {
    document.body.classList.remove(this.opts.bodyClass);
  }
  document.body.removeChild(this.modal);
}
module.exports = Modal;
