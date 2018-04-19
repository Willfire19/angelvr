// SkillChart.js

$(document).ready(function() {
	var ctx = $("#skillChart").get(0).getContext("2d");

	var data = {
	  labels: ["C#", "Unity", "Angular", "Java", "Python", "Ruby on Rails"],

	  datasets: [
	    {
	      label: "Skill Dataset",
	      fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
	      data: [8, 7, 7, 6, 6, 6]
	    }
	  ]
	};

	var options = {
		scaleOverride: true,
    scaleSteps: 5,
    scaleStepWidth: 2,
    scaleStartValue: 0
	}

	// var skillChart = new Chart(ctx).Bar(data, options);
	var skillChart = new Chart(ctx).Radar(data, options);

});