/**
 * Header
 * @param {Object} attrs
 *  @param {String} level Level of Header element [1..5]
 *  @param {String} text Text content of element
 *  @param {String} cls Class name assigned to element
 *  @param {String} id Id assigned to element
 */
function Header( attrs ) {
  
  'use strict';
  
  var level = (attrs && attrs.level) ? attrs.level  : '1';
  var text  = (attrs && attrs.text ) ? attrs.text   : 'Header-' + level;
  var cls   = (attrs && attrs.cls  ) ? attrs.cls    : 'header-' + level;
  var id    = (attrs && attrs.id   ) ? attrs.id     : 'header-' + level + "_" + new Date().getTime();
  
  this.element = document.createElement('h' + level);
  this.element.textContent = text;
  this.element.id = id;
  
}
Header.prototype.getId = function() {
  'use strict';
  return this.element.id;
};