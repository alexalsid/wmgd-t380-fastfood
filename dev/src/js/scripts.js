

// burger click
var $burgerContainer = $('#burger-icon');
var $topLine = $('#burger-icon .burger-line:nth-child(1)');
var $middleLine = $('#burger-icon .burger-line:nth-child(2)');
var $bottomLine = $('#burger-icon .burger-line:nth-child(3)');

var $topArrow = $('#arrow div:nth-child(1)');
var $bottomArrow = $('#arrow div:nth-child(2)');


function burgerClick(){
    console.log("click");
}

$("body").on( "click", "#burger-icon", burgerClick);


function animateBurgerOver() {
	console.log('mouse over');
	// event.stopPropagation();
    TweenMax.to($topLine, 0.15,{y:8});
    TweenMax.to($bottomLine, 0.15,{y:-8});
    // rotate arrow
    TweenMax.to($topArrow, 0.25,{rotation:45, y:-3, x:1});
    TweenMax.to($bottomArrow, 0.25,{rotation:-45, y:3, x:1});
}

function animateBurgerOut() {
	console.log('mouse out');
	// event.stopPropagation();
    TweenMax.to($topLine, 0.25,{y: 0});
    TweenMax.to($bottomLine, 0.25,{y: 0});
    // rotate arrow
    TweenMax.to($topArrow, 0.15,{rotation:0, y:0, x:0});
    TweenMax.to($bottomArrow, 0.15,{rotation:0, y:0, x:0});

}

function addBurgerListeners(){
	$burgerContainer.on('mouseover', animateBurgerOver);
	$burgerContainer.on('mouseout', animateBurgerOut);
}


// add the burger listener
addBurgerListeners();
