window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_1PC_BASE = "./static/images/1pc";
var NUM_INTERP_1PC_FRAMES = 50;
var interp_1pc_images = [];
function preloadInterpolation1PCImages() {
  for (var i = 1; i < NUM_INTERP_1PC_FRAMES; i++) {
    var path1pc = INTERP_1PC_BASE + '/' + String(i).padStart(3, '0') + '.png';
    interp_1pc_images[i] = new Image();
    interp_1pc_images[i].src = path1pc;
  }
}
function setInterpolation1PCImage(i) {
  var image1pc = interp_1pc_images[i];
  image1pc.ondragstart = function() { return false; };
  image1pc.oncontextmenu = function() { return false; };
  $('#interpolation-1pc-image-wrapper').empty().append(image1pc);
}


var INTERP_ANC_BASE = "./static/images/anc";
var NUM_INTERP_ANC_FRAMES = 50;
var interp_anc_images = [];
function preloadInterpolationANCImages() {
  for (var i = 1; i < NUM_INTERP_ANC_FRAMES; i++) {
    var pathanc = INTERP_ANC_BASE + '/' + String(i).padStart(3, '0') + '.png';
    interp_anc_images[i] = new Image();
    interp_anc_images[i].src = pathanc;
  }
}
function setInterpolationANCImage(i) {
  var imageanc = interp_anc_images[i];
  imageanc.ondragstart = function() { return false; };
  imageanc.oncontextmenu = function() { return false; };
  $('#interpolation-anc-image-wrapper').empty().append(imageanc);
}


$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    preloadInterpolationANCImages();
    preloadInterpolation1PCImages();
    $('#interpolation-anc-slider').on('input', function(event) {
      setInterpolationANCImage(this.value);});
    $('#interpolation-1pc-slider').on('input', function(event) {
      setInterpolation1PCImage(this.value);});
    setInterpolationANCImage(1);
    setInterpolation1PCImage(1);
    $('#interpolation-anc-slider').prop('max', 50);
    $('#interpolation-1pc-slider').prop('max', 50);

    bulmaSlider.attach();

})
