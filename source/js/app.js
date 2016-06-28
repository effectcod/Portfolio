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



a1.click(function(){


var image=['Work_1.png', 'Work_2.png', 'Work_3.png']
var i=$('.slider__center img').data('data-number');
function forvard(i){
	i++;
	var elem='<img src=assets/img/"'+images[i]+'">';
}

if i===0{
	i=images.length-1;
};

if i===2{
	i=1;
};

});