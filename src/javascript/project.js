$(document).ready(function() {

	function calcHandicap() {
		// $(".calcButton").addClass("");
		// console.log($("#a1").val());

		//console.log(typeof Number($("#a1").val()));

		var courseAvg = Number($("#a1").val()) + Number($("#a2").val()) + Number($("#a3").val()) + Number($("#a4").val()) + Number($("#a5").val());
		courseAvg /= 5;
		console.log(courseAvg);

		var slopeAvg = Number($("#b1").val()) + Number($("#b2").val()) + Number($("#b3").val()) + Number($("#b4").val()) + Number($("#b5").val());
		slopeAvg /= 5;
		console.log(slopeAvg);

		var scoreAvg = Number($("#c1").val()) + Number($("#c2").val()) + Number($("#c3").val()) + Number($("#c4").val()) + Number($("#c5").val());
		scoreAvg /= 5;
		console.log(scoreAvg);

		var handicap = (scoreAvg - courseAvg) * (113 / slopeAvg);
		console.log(handicap);				
	}

	$(".calcButton").click(calcHandicap);

});
