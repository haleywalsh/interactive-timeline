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

$('.menu a').click(function(event){
  
  // prevent defalt click behavior
  // don't jump to content
  event.preventDefault();
    
  // identify position of target
  var target = $(this).attr('href');
  var top = $(target).offset().top;

  // animate scroll to target
  $('html,body').animate({
    scrollTop: top
    },700);

});