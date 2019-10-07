$(document).foundation()

// hide the overlay initially
$('.overlay').hide();

// create a button to close the overlay
// add it to the overlay
$('.overlay').append('<button>X</button>');

// open overlay
$('main a').click(function(e){
	e.preventDefault();
  $('.overlay').show();
});

// close overlay
$('.overlay button').click(function(){
  $('.overlay').hide();
});

$('li a').click(function(){
  $('.overlay').hide();
});
