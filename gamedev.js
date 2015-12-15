$( document ).ready(function() {

	$("#goRight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/two.jpg')");
		$("#goRight1").hide();
		$("#goRight2").show();
		$("#goLeft2").show();
	});

	$("#goLeft1").click(function() {
		$("#exploreBody").css("background-image", "url('img/troll.png')");
		$("#goRight1").hide();
		$("#goLeft1").hide();
		$("#goBack1").show();
	});

	$("#goBack1").click(function() {
		$("#exploreBody").css("background-image", "url('img/two.jpg')");
		$("#goBack1").hide();
		$("#goRight2").show();
		$("#goLeft2").show();
	});

	$("#goRight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/troll.png')");
		$("#goRight1").hide();
		$("#goRight2").hide();
		$("#goLeft1").hide();
		$("#goLeft2").hide();
	});

	$("#goLeft2").click(function() {
		$("#exploreBody").css("background-image", "url('img/three.jpg')");
		$("#goRight1").hide();
		$("#goRight2").hide();
		$("#goRight3").show();
		$("#goLeft1").hide();
		$("#goLeft2").hide();
		$("#goLeft3").show();
		$("#goStraight1").show();
	});

	$("#goRight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/troll.png')");
		$("#goRight1").hide();
		$("#goRight2").hide();
		$("#goRight3").hide();
		$("#goLeft1").hide();
		$("#goLeft2").hide();
		$("#goLeft3").hide();
		$("#goStraight1").hide();
		$("#goBack1").show();
	});

	$("goLeft3").click(function() {
		$("#exploreBody").css("background-image", "url('img/troll.png')");
		$("#goRight1").hide();
		$("#goRight2").hide();
		$("#goRight3").hide();
		$("#goLeft1").hide();
		$("#goLeft2").hide();
		$("#goLeft3").hide();
		$("#goStraight1").hide();
	});

	$("goStraight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/troll.png')");
		$("#goRight1").hide();
		$("#goRight2").hide();
		$("#goRight3").hide();
		$("#goLeft1").hide();
		$("#goLeft2").hide();
		$("#goLeft3").hide();
		$("#goStraight1").hide();
	});

});