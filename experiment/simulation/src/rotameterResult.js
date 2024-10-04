function result(){
	
	
	counterMasterJson = {
    "questionary": {
        "correctAnswer": 6,
        "wrongAnswer": 0
    },
    "buildWheatStone": {
        "inValidConnection": 0
    },
    "standardCalculations": {
        "calResistance": 1,
        "calOutput": 0
    },
    "calibration": {
        "zeroCalibrationForMinusWrong": 23,
        "spanCalibrationForMinusWrong": 0,
        "zeroCalibrationForAgainMinus": 59,
        "zeroCalibrationForWrongPlus": 0,
        "spanCalibrationForWrongPlus": 59,
        "zeroCalibrationForAgainPlus": 0,
        "zeroAnswer": -0.0022,
        "spanAnswer": 0.0036,
        "zeroWrong": 1,
        "spanWrong": 1
    }
}		


		 console.log(data);
//Basic knowledge	 
if("corrAns" in data)
{
	corrans1 = data.corrAns.corrAns;
	
}
//configuration
if("configure" in data){

	incorrectConfig = data.configure.incorrectConfig;

}	
	
//MIMIC click counter
if("Mimic" in data)
{
	correct = data.Mimic.correctflow;
	wrong = data.Mimic.innflow ;
	clksv = data.Mimic.clickSV;
	clksv1 = data.Mimic.stdSv;
}

//Calibration click
if("Calibration" in data)
{
	zero = data.Calibration.zero;
	span = data.Calibration.span;
	zcorr = data.Calibration.zcor;
	zwor = data.Calibration.zwor;
	scorr = data.Calibration.scor;
	swor = data.Calibration.swor;
}

//Fault finding
if("Fault" in data)
{
	fault = data.Fault.fault;
}

	
	var ansZero = 0;
	
	if(counterMasterJson.calibration.zeroAnswer>0){
		ansZero = counterMasterJson.calibration.zeroAnswer*10000;
	}else{
		ansZero = -(counterMasterJson.calibration.zeroAnswer*10000);
	}
	
	var ansSpan = 0;
	if(counterMasterJson.calibration.spanAnswer>0){
		ansSpan = counterMasterJson.calibration.spanAnswer*10000;
	}else{
		ansSpan = -(counterMasterJson.calibration.spanAnswer*10000);
	}
	
	
	
	console.log(ansZero);
	console.log(ansSpan);
	
	var zeroCalib1 = zcorr/((parseInt(zcorr)+parseInt(zwor))+zcorr);
	var zeroCalibPer =   (zeroCalib1*100).toFixed(1);
	    zeroCalibPer = parseFloat(zeroCalibPer);      
	
	
	var spanCalib1 = scorr/((parseInt(scorr)+parseInt(swor))+scorr);
	var spanCalibPer =   (spanCalib1*100).toFixed(1);
	    spanCalibPer = parseFloat(spanCalibPer);  
	console.log(spanCalibPer);
	console.log(zeroCalibPer);
	
	
var correctVal = (data.corrAns.corrAns/6).toFixed(2);
var quesPercent = (correctVal*100).toFixed(1);
quesPercent = parseFloat(quesPercent);

console.log(quesPercent);

	var flowperct = ( correct/(correct+wrong)*100).toFixed(1);
	flowperct = parseFloat(flowperct);
	 console.log(flowperct);
	
	var click = (1/(clksv+1)*100).toFixed(1);
	click = parseFloat(click);
	 var simulation = flowperct + click;
	 simulation = parseFloat(simulation);
	 console.log("simultion ->"+simulation);
	 
	 var faultperct = (1/(fault+1)*100).toFixed(1);
	 faultperct = parseFloat(faultperct);
	 console.log(faultperct);
	
	var zeroCal = (1/(zero+1)*100).toFixed(1);
	zeroCal = parseFloat(zeroCal);
	console.log(zeroCal);
	
	var spanCal = (1/(span+1)*100).toFixed(1);
	spanCal = parseFloat(spanCal);
	console.log(spanCal);
	
	var zeroPercentCal = parseFloat(zeroCalibPer)+parseFloat(zeroCal);
	zeroPercentCal = zeroPercentCal.toFixed(1);
	zeroPercentCal = parseFloat(zeroPercentCal);
	console.log(zeroPercentCal);
	
	var spanPercentCal = parseFloat(spanCalibPer)+parseFloat(spanCal);
	spanPercentCal = spanPercentCal.toFixed(1);
	spanPercentCal = parseFloat(spanPercentCal);
	console.log(spanPercentCal);
	
	
	var totZero = parseInt(counterMasterJson.calibration.zeroCalibrationForMinusWrong)+parseInt(counterMasterJson.calibration.zeroCalibrationForWrongPlus);
	var totSpan = parseInt(counterMasterJson.calibration.spanCalibrationForMinusWrong)+parseInt(counterMasterJson.calibration.spanCalibrationForWrongPlus);
	
	
var htm = ''
	+ '<div class="container-fluid">'
//	+ '  <div class="row">'
//	+ '<div class="col-md-1">'
//	+ ' <div class="panel panel-danger headingPanel" >'
//	+ ' <div class="panel-body" id="panelbody"><center><span class="heading1"><b> STANDARD CONFIGURATION </b></span></center></div>'
//	+ '</div>'
	+ '</div>'

	+ '<div class="col-md-12">'
	+ ' <div class="panel remarkBground" >'
	+ ' <div class="panel-body remark" ><center>Congratulations!!! <br> <b>Rotameter experiment is completed successfully!!</b>'
	+ '<br> <b>Satisfactory performance</b></center></div>'
	+ '</div>'
	+ '</div>'


    +'<div class="container-fluid">'
		+'  <div class="row">'
		+'<div class="col-md-4">'
	
		 +'<br><table class="table table-bordered ">'
		   +'  <thead class="thead-dark">'
		   +'    <tr class="">'
		   +'      <th><center class="">COMPETENCY(ROTAMETER)</center></th>'
		   +'     <th><center class="">STATUS</center></th>'
		   +'    </tr>'
		   +' </thead>'
		   +'  <tbody>'
		   +'   <tr>'
		   +'     <td class=""><center>Basic knowledge</center></td>'
		   +'     <td class=""><center class="attained"> Attained</center></td>'
		  
		   +'  </tr>'
		   +'  <tr>'
		   +'     <td class=""><center>Construct wheat stone bridge circuit</center></td>'
		   +'     <td class=""><center class="attained"> Attained</center></td>'
		   +' </tr>'
		   +'   <tr>'
		  +'     <td class=""><center>Standard Calculations</center></td>'
		   +'     <td class=""><center class="attained">Attained</center></td>'
		  
		   +'  </tr>'
		   +'  <tr>'
		+'<td class=""><center>Actual Calculations</center></td>'
		   +'<td class=""><center class="attained">Attained</center></td>'
		   +' </tr>'
		   +'<tr>'
		  +' <td class=""><center>Observation</center></td>'
		   +'<td class=""><center class="attained"> Attained</center></td>'
		  
		   +'  </tr>'
		   
		    
		   +'<tr>'
		  +' <td class=""><center>Calibration</center></td>'
		   +'<td class=""><center class="attained"> Attained</center></td>'
		  
		   +'  </tr>'
			
		   +' </tbody>'
		  +' </table>'
		  
		+' </div>'
		+'<div class="col-md-4" id="graph-div" >'

		+' </div>'
		
		+'<div class="col-md-4">'
		+' <div class="panel panel-danger headingPanel" style = "margin-top:80px;">'
		+' <div class="panel-body" id="panelbody">'
		+'<center><span class="heading1"><b>BASIC KNOWLEDGE </b></span></center>'		
		+'</div>'
		+'</div>'
		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;margin-top:15px;">'
		+'<center><span class="valueBox">Total Questions</span></center>'
		+' <div class="panel-body counterPanelRed">'
		+'<center><span class="valueBox">6</span></center>'
		+' </div>'		
		+'</div>'		
		+' </div>'
		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;margin-top:15px;">'
		+'<center><span class="valueBox">Correct Answers</span></center>'
		+' <div class="panel-body counterPanelGreen">'
		+'<center><span class="valueBox">'+corrans1+'</span></center>'
		+' </div>'		
		+'</div>'		
		+' </div>'
		
		
		+' </div>'//closing of col 4
      
//       +' <div class="row">'
//		
//       +'<div class="col-md-8">'
//       +' </div>'
//       
//      
//      
//      
       +' </div>'
//        +' </div>'
//         +' </div>'
//         
//        
        +' <div class="row">'
		+'<div class="col-md-12">'
		+'<div class="col-md-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody">'
		+'<center><span class="heading1"><b>MATERIAL TYPE</b></span></center>'
		+'</div>'
		+'</div>'
		
		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Wrong Attempts</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>'+incorrectConfig+'</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">4 </span>'
		+'</div>'
		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Correct Attempt</span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>1</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">1 </span>'
		+'</div>'
		
		
		
		
		+'</div>'
//
		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel">'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1"><b>INSTANTANEOUS FLOW</b></span></center></div>'
		+'</div>'
		
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Wrong Attempts</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>'+wrong+'</b></span></center>'
		+'</div>'
		+'</div>'
      
		+'</div>'
		
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Correct Attempts</span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>'+correct+'</b></span></center>'
		+'</div>'
		+'</div>'

		+'</div>'
		
		
		+' </div>'
		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1"><b>Zero Calculate</b></span></center></div>'
		+'</div>'
		
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Wrong Attempts</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>'+zero+'</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Correct Attempts </span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>1</b></span></center>'
		+'</div>'
		+'</div>'

		+'</div>'
		
		+' </div>'
		+' </div>'
		+' </div>'
		
		
		
		 +' <div class="row">'
		+'<div class="col-md-12">'
		+'<div class="col-md-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody">'
		+'<center><span class="heading1"><b>Span Calculate</b></span></center>'
		+'</div>'
		+'</div>'
		
		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Wrong Attempts</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>'+span+'</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">4 </span>'
		+'</div>'
		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Correct Attempt</span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>1</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">1 </span>'
		+'</div>'
		
		
		
		
		+'</div>'
//
		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel">'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1"><b>Zero Calibrate</b></span></center></div>'
		+'</div>'
		
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Wrong Attempts</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>'+zwor+'</b></span></center>'
		+'</div>'
		+'</div>'
      
		+'</div>'
		
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Correct Attempts</span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>'+zcorr+'</b></span></center>'
		+'</div>'
		+'</div>'

		+'</div>'
		
		
		+' </div>'
		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1"><b>Span Calibrate</b></span></center></div>'
		+'</div>'
		
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Wrong Attempts</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>'+swor+'</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Correct Attempts </span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>'+scorr+'</b></span></center>'
		+'</div>'
		+'</div>'

		+'</div>'
		
		+' </div>'
		+' </div>'
		+' </div>'
		

$("#main-div1").html(htm);

console.log(spanCalibPer);
	console.log(zeroCalibPer);

let initialData = [
    { name: 'Questionaries', y: quesPercent },
    { name: 'Fault Finding', y: faultperct },
    { name: 'Simulation', y: simulation },
    { name: 'Zero Calculation', y: zeroPercentCal },
    { name: 'Span Calculation', y: spanPercentCal } 
  
];
//
//// Create the pie chart
let chart = Highcharts.chart('graph-div', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Observations'
    },
    series: [{
        name: 'Observed',
        //colorByPoint: true,
        data: initialData
    }],
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.percentage:.1f} %'
            }
        }
    }
});

}