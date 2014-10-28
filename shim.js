// VERSION 0.0.1
// SSSSSHHHHHIT.
// =============

var $body = document.body;
var _$body = $body.cloneNode(true); // It's right fucking there, what is the problem?
$body.parentNode.replaceChild(_$body, $body);

for (var i = 0; i < document.querySelectorAll('p').length; i++) {
  document.querySelectorAll('p')[i].style.display = 'block' // Goddamnit.
}
