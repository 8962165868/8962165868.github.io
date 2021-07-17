var chart;
		var legend;

		var chartData = [{
				country: "C#",
				value: 200
			},
			{
				country: "HTML5",
				value: 340
			},
			{
				country: "Paint.net",
				value: 230
			},
			{
				country: "Native",
				value: 250
			},
			{
				country: ".Net Core MVC",
				value: 150
			},
			{
				country: "Python",
				value: 200
			}
		];

		AmCharts.ready(function () {
			// PIE CHART
			chart = new AmCharts.AmPieChart();
			chart.dataProvider = chartData;
			chart.titleField = "country";
			chart.valueField = "value";
			chart.outlineColor = "";
			chart.outlineAlpha = 0.8;
			chart.outlineThickness = 2;
			// this makes the chart 3D
			chart.depth3D = 20;
			chart.angle = 30;

			// WRITE
			chart.write("chartdiv");
		});