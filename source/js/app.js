//(function() {
//  'use strict';

//  setTimeout(function() {
//    document.querySelector('.greating_picture').classList.add('m--show');
//  }, 1000);
//})();

var flip = document.getElementsByClassName('flip');
var elem = flip[0];
elem.addEventListener('click', function(e) {
    elem.classList.toggle('flipping');
});