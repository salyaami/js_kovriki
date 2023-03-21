$(document).ready(function(){

	$( function() {
		$( ".straw" ).draggable();
	});
	$(function() {
		$(".lemon").draggable();
	});
	$(function() {
		$(".apple").draggable();
	});
	$(function() {
		$(".listik").draggable();
	});
	$(function() {
		$(".black").draggable();
	});
	$(function() {
		$(".brocco").draggable();
	});
	$(function() {
		$(".fish").draggable();
	});
	$(function() {
		$(".mush").draggable();
	});
	$(function() {
		$(".goroh").draggable();
	});
	$(function() {
		$(".carrot").draggable();
	});

	$("#yellow_knopka").click(function() {
		$(".rectangle").addClass("yellow");
		$(".rectangle").removeClass("blue");
		$(".rectangle").removeClass("pink");
	});

	$("#pink_knopka").click(function() {
		$(".rectangle").addClass("pink");
		$(".rectangle").removeClass("yellow");
		$(".rectangle").removeClass("blue");
	});

	$("#blue_knopka").click(function() {
		$(".rectangle").addClass("blue");
		$(".rectangle").removeClass("pink");
		$(".rectangle").addClass("yellow");
	});

	let rot1 = 0;
	$(".straw").click(function() {
			rot1 += 45;
			$(this).css("transform", `rotate(${rot1}deg)`)
	});
	let rot2 = 0;
	$(".lemon").click(function() {
			rot2 += 45;
			$(this).css("transform", `rotate(${rot2}deg)`)
	});
	let rot3 = 0;
	$(".apple").click(function() {
			rot3 += 45;
			$(this).css("transform", `rotate(${rot3}deg)`)
	});
	let rot4 = 0;
	$(".list").click(function() {
			rot4 += 45;
			$(this).css("transform", `rotate(${rot4}deg)`)
	});
	let rot5 = 0;
	$(".black").click(function() {
			rot5 += 45;
			$(this).css("transform", `rotate(${rot5}deg)`)
	});
	let rot6 = 0;
	$(".brocco").click(function() {
			rot6 += 45;
			$(this).css("transform", `rotate(${rot6}deg)`)
	});
	let rot7 = 0;
	$(".fish").click(function() {
			rot7 += 45;
			$(this).css("transform", `rotate(${rot7}deg)`)
	});
	let rot8 = 0;
	$(".mush").click(function() {
			rot8 += 45;
			$(this).css("transform", `rotate(${rot8}deg)`)
	});
	let rot9 = 0;
	$(".goroh").click(function() {
			rot9 += 45;
			$(this).css("transform", `rotate(${rot9}deg)`)
	});
	let rot10 = 0;
	$(".carrot").click(function() {
			rot10 += 45;
			$(this).css("transform", `rotate(${rot10}deg)`)
	});
});
