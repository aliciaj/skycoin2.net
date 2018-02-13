
import $ from "jquery";

console.log("🦊 Hello! Edit me in src/js/app.js");

$(function() {
	// (Optional) Active an item if it has the class "is-active"	
	if($('.accordion').length){
		$(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
	
		$(".accordion > .accordion-item").click(function() {
			// Cancel the siblings
			$(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
			// Toggle the item
			$(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
		});
	}

	$('.js-anchor-link').click(function(e){
	  e.preventDefault();
	  var target = $($(this).attr('href'));
	  if(target.length){
	    var scrollTo = target.offset().top;
	    $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
	  }
	});
	
let signupName = document.querySelector('.sign-up-name');
let signupEmail = document.querySelector('.sign-up-email');

const checkInputs = (input, value) => {
    if (value) {
        input.classList.add('not-empty');
    } else {
        input.classList.remove('not-empty');
    }
}

signupName.addEventListener('input', () => {
    checkInputs(signupName, signupName.value);
});

signupEmail.addEventListener('input', () => {
    checkInputs(signupEmail, signupName.value);
});