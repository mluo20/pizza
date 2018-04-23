$('.hovergreen').hover(function() {
	$(this).addClass("bg-success");
});

$('.hovergreen').mouseout(function() {
	$(this).removeClass("bg-success");
});

$('.topping').hover(function() {
	$(".topping").addClass("bg-success");
});

$('.topping').mouseout(function() {
	$(".topping").removeClass("bg-success");
});