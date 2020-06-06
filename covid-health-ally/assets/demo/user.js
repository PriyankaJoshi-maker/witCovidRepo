$(document).ready(function() {
      // Javascript method's body can be found in assets/assets-for-demo/js/demo.js
      initChartsPages();
	  populateAge();
	  populateWeight();
	  populateHeight();
	  $('#nutrientsDiv').hide();
    });
	
function  initChartsPages() {
    chartColor = "#FFFFFF";

	var speedCanvas = document.getElementById("userChartHours");
	
    var dataFirst = {
     // data: [109.13, 102.06, 86.09, 81.23, 77.57, 69.1, 68.33],
	  data: [1800,2290,2800,2400,2400,2400,2200,2200],
      fill: false,
      borderColor: '#fbc658',
      backgroundColor: 'transparent',
      pointBorderColor: '#fbc658',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8,
    };

    var dataSecond = {
      data: [1400,2000,2200,2000,1800,1800,1800,1800],
      fill: false,
      borderColor: '#51CACF',
      backgroundColor: 'transparent',
      pointBorderColor: '#51CACF',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8
    };

    var speedData = {
      labels: ["2-10", "11-20", "21-30", "31-40", "41-50", "51-60", "61-70","71 and Above"],
      datasets: [dataFirst, dataSecond]
    };

    var chartOptions = {
      legend: {
        display: false,
        position: 'top'
      }
    };

    var lineChart = new Chart(speedCanvas, {
      type: 'line',
      hover: false,
      data: speedData,
      options: chartOptions
    });
  }
  
function populateAge() {
	var options = "";
	for(var i = 1 ; i <=100; i++){
	options += "<option>"+ i +"</option>";
	}
	document.getElementById("age").innerHTML = options;
}
	
function populateWeight() {
	var options = "";
	for(var i = 1 ; i <=200; i++){
	options += "<option>"+ i +"</option>";
	}
	document.getElementById("weight").innerHTML = options;
}
	
function populateHeight(){
	var options = "";
	for(var i = 120 ; i <=204; i++){
	options += "<option>"+ i +"</option>";
	}
	document.getElementById("height").innerHTML = options;
}

function calculateBMI(){	
	$('#nutrientsDiv').hide();
	var age = document.getElementById("age").value;
	var weight = document.getElementById("weight").value;
	var heightIncm = document.getElementById("height").value;
	var heightinInch = 0.393701 * heightIncm;
	var lbs = weight * 2.20462;
	var bmi = (703 * lbs )/(heightinInch*heightinInch);
	var gender = $("input[name='gridRadios']:checked"). val();
	
	document.getElementById("genderId").value = gender;
	document.getElementById("ageId").value = age;
	document.getElementById("weightId").value = weight;
	document.getElementById("heightId").value = heightIncm;
	document.getElementById("activityLevelId").value = heightIncm;
	document.getElementById("bodyId").value = bmi.toFixed(2);
}

function displayNutrients(){
	$('#nutrientsDiv').show();
}