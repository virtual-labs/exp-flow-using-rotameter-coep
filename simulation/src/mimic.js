function mimic() {
//	var paper = new Raphael(document.getElementById('canvas-div'), 1000, 1000);

$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w = 900;
	var h = 800;
	
	var width = $(window).width();
	
	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '80%', '80%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('80%', '80%');
	} else{
		paper = new Raphael(document.getElementById('canvas-div'), '80%', '80%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('80%', '80%');
	}
	

	var x = 200;
	var y = 50;
	var color = '#3bd3eb';
	var time = 5;
	var ans;
	var pp = 0;
	r = 0;
	count = 0;
	sv_Alert = 0;
	off_check = 0;
	var id = 0;
	pipeSize = pipeSize;
	fluidType = fluidType;
	var sv = 0;
	var wroFlow = 0;
	
	flowJson = {};
	arrayJson = [];
	masterJson = {};
	limit = 0;
	min_limit = 0;
	dmin = 0; dmax = 0;
	dist = 0;
	checkAns = 0;
	xf = 0;
	var percent;
	var array = [];
	mimic = {}; 
	eCnt = 0;


	var float_ani = paper.path('M' + (x) + ' ' + (y + 50) + 'l 0 0  ');

	pump_Draw(x, y-30);
	Float(x + 485, y + 360);

	var img = paper.image("images/knob1.png", (x - 85), (y + 500), 70, 70);

	var plus = paper.image("images/plus.png", (x - 5), (y + 520), 30, 30);

	var minus = paper.image("images/minus.png ", (x - 125), (y + 522), 30, 30);


	var pump_circle = paper.circle(x - 50, y + 620, 50).attr({ 'stroke': 'black', 'stroke-width': '1.5', 'fill': 'white' });
	

	if (pipeSize == 50) 
	{
		if (floatMaterial == 1)
		{				
		min1 = 10; max1 = 170;
		limit = 205; min_limit = 13.8;
		dmin = 23; dmax = 342;
		baseDiagram40(x + 200, y);
		scale_Margin40(x + 200, y);
		}
		else if (floatMaterial == 2)
		{ 
		min1 = 58; max1 = 583;
		limit = 137.6; min_limit = 14.24;
		dmin = 8.9; dmax = 86;
		baseDiagram15(x + 200, y);
		scale_Margin50A(x + 200, y);
		}  
	}
	else if (pipeSize == 40) 
	{	
		if (floatMaterial == 1)
		{ 
		min1 = 31.66; max1 = 120;
		dmin = 93; dmax = 359;
		limit = 210; min_limit = 55;
		baseDiagram40(x + 200, y);
		scale_Margin40(x + 200, y);
		}
		else if (floatMaterial == 2)
		{ 
		min1 = 31.66; max1 = 316;
		dmin = 5.8; dmax = 59;
		limit = 153.4; min_limit = 15.08;
		baseDiagram15(x + 200, y);
		scale_Margin40A(x + 200, y);
		}
		
	}
	else if (pipeSize == 25) 
	{	
		if (floatMaterial == 1)
		{ 
		min1 = 13.33; max1 = 100;
		dmin = 59; dmax = 354;
		limit = 212; min_limit = 35;
		baseDiagram40(x + 200, y);
		scale_Margin40(x + 200, y);
		}
		else if (floatMaterial == 2)
		{ 
		min1 = 13; max1 = 133;
		dmin = 2.34; dmax = 23.4;
		limit = 93.6; min_limit = 9.36;
		baseDiagram15(x + 200, y);
		scale_Margin15(x + 200, y);
		}
	}
	else if (pipeSize == 15) 
	{	
		if (floatMaterial == 1)
		{ 
		min1 = 3.33; max1 = 35;
		limit = 127; min_limit = 13;
		dmin = 23; dmax = 212;
		baseDiagram40(x + 200, y);
		scale_Margin40(x + 200, y);
		}    
		else if (floatMaterial == 2)
		{ 
		min1 = 3.33; max1 = 35;
		limit = 144; min_limit = 12.8;
		dmin = 1.6; dmax = 18;
		baseDiagram15(x + 200, y);
		scale_Margin(x + 200, y);
		}  
	}


	function Float(x, y) {
		float_ani = paper.path('M' + (x) + ' ' + (y + 50) + 'l 0 50 l 10 10 l 10 0 l 10 -10 l 0 -50 l 10 0 l 0 -10 l -50 0 l 0 10 l 10 0   ')
			.attr({ 'stroke': 'black', 'stroke-width': '2', 'fill': '#f28783' }).toFront();
	};


	var sv_Valve = paper.path(
		'M' + (x + 50) + ' ' + (y + 620) + 'l -15 -15 l 0 30 l 30 -30 l 0 30 l -15 -15 l 0 -25 l -10 0 l 0 -8 l 20 0 l 0 8 l -10 0')
		.attr({
			'stroke': 'black',
			'stroke-width': '2',
			'fill': 'red'
		});

	function sv_On(x, y) {
		sv_Valve.attr({
			'stroke': 'black',
			'stroke-width': '2',
			'fill': 'green'
		});
	};

	//Sv button click on
	sv_Valve.click(function(event) {
		sv_Alert = 1;
		sv_On(x, y);
		sv++;
		mimic.clickSV = sv;
		mimic.stdSv = 1;

		
	});

	paper.rect(x - 70, y + 450, 50, 30).attr({ 'stroke-width': 2, 'fill': 'white' }).toFront();
	var selectedRange = paper.text(x - 30, y + 460, " %").attr({
		'font-size': 18,
		'font-weight': "bold"
	});

	var selectedRange = paper.text(x - 55, y + 462, "1").attr({
		'font-size': 18,
		'font-weight': "bold"
	});

	plus.click(function(event) {


		count = count + 1;
		if (pp >= 100) {


			alert("Max limit");

		}
		else {

			if (r < 1000) {
				r = r + 5;
				img.animate({ 'transform': 'r' + r }, 500);
			}

			pp = pp + 5;

			selectedRange.attr('text', pp);
		}

	});


	minus.click(function(event) {

		if (r > 0) {
			r = r - 5;
			img.animate({ 'transform': 'r' + r }, 500);
			count = count + 1;

		} else {
			alert("Min limit");
		}

		if (pp > 0) {
			pp = pp - 5;
			selectedRange.attr('text', pp);
		}
		if (pp == 0) {
			selectedRange.attr('text', "");
			selectedRange = paper.text(x - 55, y + 462, "1").attr({
				'font-size': 18,
				'font-weight': "bold"
			});

		}

	});



	// Magnetic rect 0 reading show
	mag_zero(x, y);
	function mag_zero(x, y) {
		y2 = 50;
		paper.rect(x + 130, y2 + 460, 70, 40).attr({ 'stroke-width': '2', 'fill': 'pink' }).toFront();
		txt13 = paper.text(x + 165, y2 + 475, 0).attr({ 'font-size': 20 });
		txt13 = paper.text(x + 230, y2 + 475, "lit/min").attr({ 'font-size': 20 });
	}
	 rota_zero(x, y);
	function rota_zero(x, y) 
	{
		y2 = 50;
		paper.rect(x + 270, y2 + 300, 70, 40).attr({ 'stroke-width': '2', 'fill': 'pink' }).toFront();
		txt13 = paper.text(x + 290, y2 + 315, 0).attr({ 'font-size': 20 });
		txt13 = paper.text(x + 365, y2 + 315, "mm").attr({ 'font-size': 20 });
	}
	
	
	function flow_Calculation(x, y) 
	{
		xf = (pp * (max1 - min1) / 100) + min1;
		paper.rect(x + 130, y + 460, 70, 40).attr({ 'stroke-width': '2', 'fill': 'pink' }).toFront();
		txt13 = paper.text(x + 165, y + 475, xf.toFixed(2)).attr({ 'font-size': 20 });


	}

	pumpOff(x, y);
	function pumpOff(x, y) 
	{	checkAns = 0;
		y2 = 50;
		paper.circle(x - 50, y2 + 620, 20).attr({ 'stroke': 'red', 'stroke-width': '1', 'fill': 'red' });
	};

	function pumpOn(x, y) {
		
		id = 1;
		checkAns = 1;
		paper.circle(x - 50, y + 620, 20).attr({ 'stroke': 'green', 'stroke-width': '1', 'fill': 'green' });
		$("#btnAnsCheck").prop('disabled', true);
		$("#flowAns").prop('disabled', true);
	};

	// Float animation upwards 
	pump_circle.click(function(event) 
	{
		
		array.push(pp); // insert pp value in an array
//		console.log("pp array : " + array);
		array.sort((a, b) => a - b); //sort the array in ascending order
//		console.log("sorted array : " + array);
			for (var i = 0; i < array.length; i++) {
				if ((array[i] - array[i + 1]) == 0) {
					//alert that duplicate is present
//					console.log("Duplicate values present in array..");
					alert("Please provide unique percent values !!");	
					 checkAlert = 1;
					array = array.filter((a, b) => array.indexOf(a) == b); //remove the duplicate value from the array
//					console.log("After duplicate removal :" + array);

					
				}else{
				checkAlert = 0;
				}

			}

		
		if (sv_Alert == 1) {
			
			if(checkAlert == 0) 
			{ 
			if (checkAns == 0)
			{  
				if (pp == 0) {
					percent = 1;
				}
				else {
					percent = pp;
				}
//				$("#btnAnsCheck").prop("disabled", false);
				
				pumpOn(x, y);
				setTimeout(function() { float_Increment(x, y) }, time*100);
				if (floatMaterial == 1)
				{ 
				setTimeout(function(){meter_Fill(x+200, y)},time); 
				}
				flow_Calculation(x, y);
			
			}
			else 
			{	
						const index = array.indexOf(pp);
							if (index > -1) { 
 							 array.splice(index, 1); 
								}
//							console.log("array value in else array"+array);
				alert("Submit Answer");
				
			}
			}
		
		
		} else {
			
			const index = array.indexOf(pp);
				if (index > -1) { 
 				 array.splice(index, 1); 
								}
			alert("Turn on SV valve");
			sv++;
		
		}


	});
	
	
	function error_Calculation(x,y)
	{   
		eCnt++;
		mimic.correctflow = eCnt;

		
		if (pp < 50)
		{
			n = 3;	
		}
		else
		{
			n = 6;
		}
		
		if (pp == 0)
		{
			pp1 = pp - n;	
		}
		else if (pp == 100)
		{
			pp1 = pp + n;
		}	
		
		else if (eCnt % 3 == 0)
		{
			pp1 = pp - n;	
		}
		else 
		{
		   pp1 = pp + n;
			
		}
		
		
	}

	function float_Calculation(x, y) 
	{
		error_Calculation(x,y);
		dh = (pp * (limit - min_limit) / 100) + min_limit;
		
		dh1 = (pp1 * (limit - min_limit) / 100) + min_limit;
		
		ans = y  - dh1;
		
		ef = (pp1 * (max1 - min1) / 100) + min1;
//		console.log("flow error" + ef);
		dist = (pp * (dmax - dmin) / 100) + dmin;
	
	}
	
	function disp_Calculation(x, y) 
	{
			y2 = 50;
		dist1 = (pp1 * (dmax - dmin) / 100) + dmin;
//		console.log("Displa" + dist1);
		paper.rect(x + 270, y2 + 300, 70, 40).attr({ 'stroke-width': '2', 'fill': 'pink' }).toFront();
		txt13 = paper.text(x + 305, y2 + 315, dist1.toFixed(2)).attr({ 'font-size': 20 });



	}

	//function for rotation of float

	function float_Increment(x, y) 
	{
		
		float_Calculation(x, y);
		
		counter = 0;
		var interFloat;

		floatInt = setInterval(function() {

			if (y > ans) {
				float_ani.remove();
				interFloat = (y - ans);
				if (counter % 5 == 0) {
					y = y + 1;
					Float(x + 485, y + 360);


				}
				else {
					y = y - 1;
					Float(x + 485, y + 360);
				}


			}
			else {
				clearInterval(floatInt);
				off_check = 1;
				disp_Calculation(x, y);
				$("#btnAnsCheck").prop('disabled', false);
				$("#flowAns").prop('disabled', false);

			 

			};
			counter++;
		}, 50);
		 

	};
	



	// float decrement 
	function float_Decrement(x, y) {
		 y = ans;
		floatDec = setInterval(function() {
			if (y < 50) {

				float_ani.remove();
				y = y + 10;

				Float(x + 485, y + 360);

			}
			else {
				clearInterval(floatDec);

			}
		}, 100);
	};



	function tableCreate()
	{ 			
				flowJson = {};
				flowJson.mFlow = xf.toFixed(2);
				flowJson.rFlow = ef.toFixed(2);
				flowJson.perc = percent;
//				console.log("Flow " + flowJson.mFlow);
				arrayJson.push(flowJson);
				var  tableMainDiv='';

//				console.log(arrayJson);
				masterJson.demo = arrayJson;

//				console.log(masterJson);
				
			masterJson.demo.sort(function(a, b){
		  		  return a.perc - b.perc;
			});

//				$("#tableDesign").html("");
//				
//				$("#showGraphDiv").html("");
				var tableMainDiv = ''
			        + '<table class="table table-bordered" style="margin-left:15px;margin-right:15px;">'
					+ ' <thead>'
					+ '  <tr  style="padding:10px;background-color:#1d2b37;color:#fff;">'
					+ '  <th>Percentage</th>'
					+ '   <th>Magnetic Flow (Standard) (LPM)</th>'
					+ '  <th>Rotameter Flow (Actual) (LPM)</th>'

					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
				for (var i = 0,p=0; i < masterJson.demo.length; i++,p++) {
					tableMainDiv += '<tr>'
						+ '   <td><center>' + masterJson.demo[i].perc + '</center></td>'
						+ '   <td><center>' + masterJson.demo[i].mFlow + '</center></td>'
						+ '   <td><center>' + masterJson.demo[i].rFlow + '</center></td>'
						+ '     </tr>'
//						if(p>=6)
//							{
//								$("#showGraph").prop('disabled', false);
//							}
						
				}
				tableMainDiv += ' </tbody>'
					 + '  </table>'
					+'<div class="col-sm-2">'
					 +'</div>'
					 +'<div class="col-sm-8">'
					 +'<button type="button" style="padding: 10px;margin:20px; "  class="btn btn-danger btnStyle" id="showGraph" hidden ><b>SHOW GRAPH </b></button>'
					 +'</div>'
					 +'<div class="col-sm-2">'
					 +'</div>'
					 
				$("#tableDesign").html(tableMainDiv);
				if(masterJson.demo.length >= 5)
				{
					$('#showGraph').removeAttr('hidden');		
				}
				$("#showGraph").click(function() {
					
							
					if (masterJson.demo.length >= 5) { 
						
						
					if (array[0] != 0 && array[array.length - 1] != 100)
					{
						checkAlert = 1;
						alert(" You need to provide next input values as 1 and 100 !!");
							
					}
					
					else if (array[0] != 0) 
					{
						checkAlert = 1;
						alert("You need to provide next input value as 1 !!");
					
					}
					
					else if (array[array.length - 1] != 100)
					{
							checkAlert = 1;
							alert("You need to provide next input value as 100 !!");
							
					}
					if (checkAlert == 0 )
					{ 
						$("#CalculateActualFlow").attr("hidden",true);
						$('#showGraph').attr('hidden',true);
						data.Mimic = mimic;
						console.log(data);
						graphCreate();
						calibration();
					}
				}
				else{
					alert("Please provide atleast 5 reading ");
				}
//				console.log(masterJson);
				
				
						
			});
				
			}
	function graphCreate()
	{
//		$("#panelHeadingBold").html("GRAPH REPRESENTATION");
		
		
		 $("#centerText2").html("GRAPH");
	var xdata=[];
	var ydata=[];
	
	var graphData1=[];
	for (var i = 0; i < masterJson.demo.length; i++)
	 {
		xdata[i] = parseFloat(masterJson.demo[i].mFlow);
		ydata[i] = parseFloat(masterJson.demo[i].rFlow);
		
	}
	for (var j = 0; j < masterJson.demo.length; j++) {
			tempArr = [];
			tempArr[0] = xdata[j];
			tempArr[1] = ydata[j];
			graphData1.push(tempArr);

	}
		console.log("xdata "+xdata);
		console.log("ydata "+ydata);
		console.log("graphData1 "+graphData1);
		ydata.sort(function(a, b) { return a - b });
		xdata.sort(function(a, b) { return a - b });
		console.log("After xdata "+xdata);
		console.log("After ydata "+ydata);
		Xmax = parseFloat(xdata[xdata.length - 1]);
		Ymax = parseFloat(ydata[ydata.length - 1]);
		console.log("Xmax "+Xmax);
		console.log("Ymax "+Ymax);
		console.log(" Rotameter & magnatic flow meter  " + graphData1);
		Highcharts.chart('canvas-div', {
			title: {
				text: ' Graph Magnatic Flow Meter V/S Rotameter   '
			},
//			subtitle: {
//				text: 'Meter Constant is  pulses (per/ltr)'
//			},
			xAxis: {
				min: 0.5,
				max: Ymax,
				title: {
					text: 'Magnatic flow meter'
				}
			},
			yAxis: {
				min: 0.5,
				max: Ymax,
				title: {
					text: 'Rotameter'
				}
			},
			series: [
				{
					type: 'line',
					name: 'Standard value',
					data: [[1, 1], [Ymax, Ymax]],
					marker: {
						enabled: false
					},
					states: {
						hover: {
							lineWidth: 0
						}
					},
					enableMouseTracking: false
				},

				{
					type: 'scatter',
					name: 'Observation value',

					data: graphData1,
					marker: {
						radius: 4
					}
				}]

		});
		
	
		
		}
	
	
	
	var ht = 0;
	// function for fluid empty in tube
	function meter_Empty(x, y) {
		
		y = 50;
		var b = paper.path('M' + (x + 223) + ' ' + (y + 469) + 'l 125 0 l 50 -331 l -220 0 l 50 331')
			.attr({ 'stroke':'white' , 'stroke-width': '1.5',  'opacity':0.8});
			
	
			
		level = b.animate({
			path: 'M ' + (x + 223) + ' ' + (y + 469) + 'l 135 0 l 50 -331 l -230 0 l 50 331', 'fill': 'white', 'stroke': color,
			opacity: 1
		}, time * 50);	

	};

	// function for fuild fill in tube
	function meter_Fill(x, y) {

		
	 var a =	paper.path('M' + (x + 223) + ' ' + (y + 469) + 'l 125 0 l 50 -330 l -220 0 l 50 330')
			.attr({ 'stroke':color , 'stroke-width': '1.5', 'opacity':0.5});
			
		level = a.animate({
			path: 'M ' + (x + 223) + ' ' + (y + 469) + 'l 135 0 l 50 -330 l -230 0 l 50 330', 'fill':color, 'stroke': color,
			opacity: 0.5
		}, time * 50);	
	};
	
		
	$("#btnAnsCheck").click(function() {
		
			
			wroFlow++;
		 mimic.innflow = wroFlow ;
		var flowAns = $("#flowAns").val().trim();
		if(flowAns=="")
			{
//				alert("empty");
				 $("#modelMsg").html("<b class='boldTextBlue' >Dont Skip empty textbox . </b>");
				 $("body").css("padding","0px 0px 0px 0px");
			}
		else{
//		console.log("ans check"+flowAns);
		flow = ef.toFixed(2);
		if (id <= 3) {
			
			if (flowAns == flow) {
				checkAns = 0;
				$("#flowAns").val('');
				
				  $("#btnAnsCheck").prop('disabled', true);
				tableCreate();
					pumpOff(x, y) ;
				if (floatMaterial == 1){
					setTimeout(function(){meter_Empty(x+200, y)},900);
					setTimeout(function(){scale_line(x+200, y)},910);
				}	
				setTimeout(function() {float_Decrement(x, y)}, 1000);
				setTimeout(function() { mag_zero(x, y) }, 900);
				setTimeout(function(){rota_zero(x, y)},900);
				$("#btnAnsCheck").prop("disabled", true)

				
				//event.stopPropagation();
			} else if (flowAns != flow) {
				
//			alert("Entered value is incorrect.Try it again... ");
			 $("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again . </b>");
			 $("body").css("padding","0px 0px 0px 0px");
			
			
			  
			
			}


		} else if (id == 4) {
			
//			alert("formula : Volume of the float = "+unescape('%u220F')+" / 4 Dr"+unescape('%B2')+"h ");
			
			 $("#modelMsg").html("<b class='boldTextBlue'>formula : Volume of the float = "+unescape('%u220F')+" / 4 (Dr"+unescape('%B2')+"h)</b> ");
			 $("body").css("padding","0px 0px 0px 0px");
			
		} else {
			flowAns = $("#flowAns").val().trim();

			if (flowAns == flow) {
				checkAns = 0;
				$("#flowAns").val('');
				tableCreate(); 
				pumpOff(x, y) ;
				if (floatMaterial == 1){
					setTimeout(function(){meter_Empty(x+200, y)},900);
					setTimeout(function(){scale_line(x+200, y)},910);
				}
				setTimeout(function() {float_Decrement(x, y)}, 1000);
				setTimeout(function() { mag_zero(x, y) }, 900);
				setTimeout(function(){rota_zero(x, y)},900); 
				$("#btnAnsCheck").prop("disabled", true);
				$("#flowAns").prop("disabled", true);
			
			
				event.stopPropagation();
			} else {
				checkAns = 0;
//				alert("correct answer is " + flow );
				 $("#modelMsg").html("<b class='boldTextRed'>Correct answer is " + flow+"</b>");
				 $("body").css("padding","0px 0px 0px 0px");	

			}
		}
		id++;
		 
		}

		});
	
		
	
	
		// Magentic Flow Meter
	Magnetic_flow_Meter(x - 220, y + 550);
	function Magnetic_flow_Meter(x, y) {
		paper.rect(x + 350, y, 100, 100).attr({ 'stroke-width': '2', }).toFront();
		paper.path('M' + (x + 450) + ' ' + (y + 70) + 'l  100 0').attr({ 'stroke': 'black', 'stroke-width': '2' });
		paper.circle(x + 400, y - 30, 10).attr({ 'stroke': 'black', 'stroke-width': '1', 'fill': 'black' });;
		paper.path('M' + (x + 400) + ' ' + (y - 20) + 'l  0 20').attr({ 'stroke': 'black', 'stroke-width': '2' });
		var text_M = paper.text(x + 400, y + 40, "M").attr({ 'font-size': 30 });
		var text_Magne = paper.text(x + 400, y + 150, "Meter").attr({ 'font-size': 20, "font-weight": "bold" });
		var text_Magne = paper.text(x + 400, y + 170, "(Standard)").attr({ 'font-size': 20, "font-weight": "bold" });
		var text_Magne = paper.text(x + 400, y + 120, "Magnetic Flow").attr({ 'font-size': 20, "font-weight": "bold" });
	}
	
		// pump draw code
	function pump_Draw(x, y) {
		paper.circle(x - 50, y + 650, 1);

		paper.path('M' + (x - 30) + ' ' + (y + 689) + 'l 20 20  ').attr({ 'stroke': 'black', 'stroke-width': '1.5' });
		paper.path('M' + (x - 70) + ' ' + (y + 689) + 'l -20 20  ').attr({ 'stroke': 'black', 'stroke-width': '1.5' });
		paper.path('M' + (x - 90) + ' ' + (y + 711) + 'l 80 0  ').attr({ 'stroke': 'black', 'stroke-width': '1.5' });
		pmp_text = paper.text(x - 50, y + 730, "Pump").attr({ 'font-size': 25 });
		sv_txt = paper.text(x + 50, y + 710, "SV").attr({ 'font-size': 25 });
		sv_txt = paper.text(x + 50, y + 740, "Valve").attr({ 'font-size': 25 });
		inlet_txt = paper.text(x + 300, y + 720, "Inlet").attr({ 'font-size': 25 });
		paper.path('M' + (x - 18) + ' ' + (y + 650) + 'l 150 0 ').attr({ 'stroke': 'black', 'stroke-width': '5' });


	};
	
	// Base Diagram


	function baseDiagram40(x, y) {
		//	paper.path('M' + (x + 160) + ' ' + (y + 700) + 'l 0 10 l -20 0 l 0 -80 l 20 0 l 0 10 l 65 0 l 0 -60  +M' + (x + 160) + ' ' + (y + 700) + 'l 215 0 l 0 -120').attr({ 'stroke': 'black', 'stroke-width': '2' });
		//	paper.path('M' + (x + 130) + ' ' + (y + 720) + 'l 0 -100 l 35 0 l 0 10 l 50 0 l 0 -50 +M ' + (x + 130) + ' ' + (y + 720) + ' l 35  0 l 0 -10 l 220 0 l 0 -130   ').attr({ 'stroke': 'black', 'stroke-width': '2' });
		paper.path('M' + (x + 200) + ' ' + (y + 486) + 'l 0 15 l 200 0 l 0 -15 l -200 0  l 0 -15 l 200 0 l 0 15  ')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' });

		paper.path('M' + (x + 150) + ' ' + (y + 120) + 'l 0 15 l 300 0 l 0 -15 l -300 0  l 0 -15 l 300 0 l 0 15  +M')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' });

		paper.path('M' + (x + 225) + ' ' + (y + 550) + 'l 0 -80 l -60 -390 + M' + (x + 215) + ' ' + (y + 550) + 'l 0 -80 l -60 -390')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' });
		paper.path('M' + (x + 360) + ' ' + (y + 550) + 'l 0 -80 l 60 -390 + M' + (x + 375) + ' ' + (y + 550) + 'l 0 -80 l 60 -390')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' });
			

		var arc1 = paper.path('M' + (x + 215) + ' ' + (y + 550) + ' A 30 40 0 0 1 ' + (x + 186) + ' ' + (y + 592) + ' l -40 0 l 0 -15 l -15 0 l 0 86 l 15 0 l 0 -15 l 150 0');
		var arc2 = paper.path('M' + (x + 225) + ' ' + (y + 550) + ' A 30 40 10 0 1 ' + (x + 191) + ' ' + (y + 600) + ' l -40 0 l 0 40 l 150 0 ');

		var arc3 = paper.path('M' + (x + 360) + ' ' + (y + 550) + 'l 0 50 ' + 'A 30 40 10 0 1 ' + (x + 335) + ' ' + (y + 640) + ' l -35 0 ');
		var arc4 = paper.path('M' + (x + 375) + ' ' + (y + 550) + 'l 0 50 ' + 'A 30 40 10 0 1 ' + (x + 346) + ' ' + (y + 648) + ' l -50 0 ');
		var text_Magne = paper.text(x + 110, y, "Outlet").attr({ 'font-size': 20, "font-weight": "bold" });
		
		var arc_top_L1 = paper.path('M' + (x + 420) + ' ' + (y + 80) + 'l 0 -20   A 20 30 0 0 1  ' + (x + 440) + ' ' + (y+40) + ' l 20 0 l 0 -48');
		var arc_top_L2 = paper.path('M' + (x + 435) + ' ' + (y + 80) + 'l 0 -10   A 20 20 10 0 1 ' + (x + 450) + ' ' + (y+55 ) + ' l 10 0 l 0 10 l 10 0 l 0 -90l-10 0 l 0 10 l');
		
		var arc_top_R1 = paper.path('M' + (x + 155) + ' ' + (y + 80) + 'l 0 -30   A  50 82  51 0 1 ' + (x + 240) + ' ' + (y-15) + ' l 220 0 ');
		var arc_top_R2 = paper.path('M' + (x + 165.2) + ' ' + (y + 80) + 'l 0 -20   A  90 120  80 0 1 ' + (x + 240) + ' ' + (y-5) + ' l 220 0 ');
		
	};

	
	
		function baseDiagram15(x, y) {
		//	paper.path('M' + (x + 160) + ' ' + (y + 700) + 'l 0 10 l -20 0 l 0 -80 l 20 0 l 0 10 l 65 0 l 0 -60  +M' + (x + 160) + ' ' + (y + 700) + 'l 215 0 l 0 -120').attr({ 'stroke': 'black', 'stroke-width': '2' });
		//	paper.path('M' + (x + 130) + ' ' + (y + 720) + 'l 0 -100 l 35 0 l 0 10 l 50 0 l 0 -50 +M ' + (x + 130) + ' ' + (y + 720) + ' l 35  0 l 0 -10 l 220 0 l 0 -130   ').attr({ 'stroke': 'black', 'stroke-width': '2' });
		paper.path('M' + (x + 200) + ' ' + (y + 486) + 'l 0 15 l 200 0 l 0 -15 l -200 0  l 0 -15 l 200 0 l 0 15  ')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' });

		paper.path('M' + (x + 150) + ' ' + (y + 200) + 'l 0 15 l 300 0 l 0 -15 l -300 0  l 0 -15 l 300 0 l 0 15  +M' + (x + 185) + ' ' + (y+160) + 'l 0 0 ')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' });

		paper.path('M' + (x + 225) + ' ' + (y + 550) + 'l 0 -80 l -60 -300 + M' + (x + 215) + ' ' + (y + 550) + 'l 0 -80 l -60 -300')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' });
		paper.path('M' + (x + 360) + ' ' + (y + 550) + 'l 0 -80 l 60 -300 + M' + (x + 375) + ' ' + (y + 550) + 'l 0 -80 l 60 -300')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' });

		var arc1 = paper.path('M' + (x + 215) + ' ' + (y + 550) + ' A 30 40 0 0 1 ' + (x + 186) + ' ' + (y + 592) + ' l -40 0 l 0 -15 l -15 0 l 0 86 l 15 0 l 0 -15 l 150 0');
		var arc2 = paper.path('M' + (x + 225) + ' ' + (y + 550) + ' A 30 40 10 0 1 ' + (x + 191) + ' ' + (y + 600) + ' l -40 0 l 0 40 l 150 0 ');

		var arc3 = paper.path('M' + (x + 360) + ' ' + (y + 550) + 'l 0 50 ' + 'A 30 40 10 0 1 ' + (x + 335) + ' ' + (y + 640) + ' l -35 0 ');
		var arc4 = paper.path('M' + (x + 375) + ' ' + (y + 550) + 'l 0 50 ' + 'A 30 40 10 0 1 ' + (x + 346) + ' ' + (y + 648) + ' l -50 0 ');
		var text_Magne = paper.text(x + 100, y+160, "Outlet").attr({ 'font-size': 20, "font-weight": "bold" });


		var arc_top_L1 = paper.path('M' + (x + 420) + ' ' + (y + 170) + 'l 0 -20   A 20 30 0 0 1  ' + (x + 440) + ' ' + (y+120) + ' l 25 0 ');
		var arc_top_L2 = paper.path('M' + (x + 435) + ' ' + (y + 170) + 'l 0 -10   A 20 20 10 0 1 ' + (x + 450) + ' ' + (y+135 ) + ' l 20 0 l 0 20 l 20 0 l 0 -110 l -5 0' );
		
		
		var arc_top_R1 = paper.path('M' + (x + 155) + ' ' + (y + 170) + 'l 0 -30   A  50 82  51 0 1 ' + (x + 245) + ' ' + (y+65) + ' l 220 0 l 0 -20 l 20 0 ');
		var arc_top_R2 = paper.path('M' + (x + 165.2) + ' ' + (y + 170) + 'l 0 -20   A  90 120  80 0 1 ' + (x + 245) + ' ' + (y+75) + ' l 220 0 l 0 50');
	};





	// Meter scale Diagram
	function scale_Margin(x, y) {
			paper.path('M' + (x + 210) + ' ' + (y + 405) + 'l 167 0  + M  ' + (x + 175) + ' ' + (y + 230) + 'l 250 0')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' });

		paper.path('M' + (x + 300) + ' ' + (y + 470) + 'l  0 -240 + M  ' + (x + 400) + ' ' + (y + 400) + 'l 30 0 + M' + (x + 405) + ' ' + (y + 360) + 'l 30 0 + M'
			+ '' + (x + 410) + ' ' + (y + 320) + 'l 30 0 +M' + (x + 415) + ' ' + (y + 280) + 'l 30 0 +M '+ (x + 420) + ' ' + (y + 240) + 'l 30 0  ')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' }).toFront();
		Read_txt = paper.text(x + 445, y + 400, 0).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 445, y + 360, 5).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 460, y + 320, 10).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 460, y + 280, 15).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 460, y + 240, 20).attr({ 'font-size': 15 });
	

		Read_txt = paper.text(x + 100, y + 250, "Mesauring Scale").attr({ 'font-size': 18 });
	};
	
//	scale_line(x,y);
	function scale_line(x,y){ 
	paper.path('M' + (x + 210) + ' ' + (y + 405) + 'l 180 0  + M  ' + (x + 175) + ' ' + (y + 145) + 'l 250 0 M' + (x + 300) + ' ' + (y + 470) + 'l  0 -326 ')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' });
		}
	
	function scale_Margin40A(x , y){
		
			paper.path('M' + (x + 210) + ' ' + (y + 405) + 'l 167 0  + M  ' + (x + 175) + ' ' + (y + 230) + 'l 250 0 +M' + (x + 300) + ' ' + (y + 470) + 'l  0 -240 ')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' });

		paper.path(' M  ' + (x + 400) + ' ' + (y + 400) + 'l 30 0 + M' + (x + 405) + ' ' + (y + 360) + 'l 30 0 + M'
			+ '' + (x + 410) + ' ' + (y + 320) + 'l 30 0 +M' + (x + 415) + ' ' + (y + 280) + 'l 30 0 +M '+ (x + 420) + ' ' + (y + 240) + 'l 30 0  ')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' }).toFront();
		Read_txt = paper.text(x + 445, y + 400, 0).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 445, y + 360, 15).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 460, y + 320, 30).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 460, y + 280, 45).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 460, y + 240, 60).attr({ 'font-size': 15 });
	

		Read_txt = paper.text(x + 100, y + 250, "Measuring Scale").attr({ 'font-size': 18 });
		
	}
	
	
		
	function scale_Margin50A(x , y){
		
			paper.path('M' + (x + 210) + ' ' + (y + 405) + 'l 167 0  + M  ' + (x + 175) + ' ' + (y + 230) + 'l 250 0')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' });

		paper.path('M' + (x + 300) + ' ' + (y + 470) + 'l  0 -240 + M  ' + (x + 400) + ' ' + (y + 400) + 'l 30 0 + M' + (x + 405) + ' ' + (y + 360) + 'l 30 0 + M'
			+ '' + (x + 410) + ' ' + (y + 320) + 'l 30 0 +M' + (x + 415) + ' ' + (y + 280) + 'l 30 0 +M '+ (x + 420) + ' ' + (y + 240) + 'l 30 0  ')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' }).toFront();
		Read_txt = paper.text(x + 445, y + 400, 0).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 445, y + 360, 25).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 460, y + 320, 50).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 460, y + 280, 75).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 460, y + 240, 100).attr({ 'font-size': 15 });
	

		Read_txt = paper.text(x + 100, y + 250, "Measuring Scale").attr({ 'font-size': 18 });
		
	}
	function scale_Margin40(x, y) {
		paper.path('M' + (x + 210) + ' ' + (y + 405) + 'l 180 0  + M  ' + (x + 175) + ' ' + (y + 145) + 'l 250 0 M' + (x + 300) + ' ' + (y + 470) + 'l  0 -326 ')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' });

		paper.path(' M  ' + (x + 400) + ' ' + (y + 400) + 'l 30 0 + M '+ (x + 405) + ' ' + (y + 383.34) + 'l 15 0 + M'
		+' '+ (x + 405) + ' ' + (y + 350) + 'l 30 0 + M'
		+ '' + (x + 410) + ' ' + (y + 300) + 'l 30 0 +M' + (x + 415) + ' ' + (y + 250) + 'l 30 0 +M' 
		+ (x + 420) + ' ' + (y + 200) + 'l 30 0 +M' + (x + 425) + ' ' + (y + 150) + 'l 30 0 +M' + (x + 432) + ' ' + (y + 100) + 'l 0 0 +M'
		+''+ (x + 405) + ' ' + (y + 366.68) + 'l 0 0 + M'+ (x + 405) + '' + (y + 350.02) + 'l 15 0 + M'+ (x + 405) + ' ' + (y + 333.36) + 'l 15 0 + M'
		+''+ (x + 405) + ' ' + (y + 316.70) + 'l 15 0 + M'+ (x + 405) + ' ' + (y + 300.04) + 'l 15 0 + M'
		+''+ (x + 415) + ' ' + (y + 283.38) + 'l 15 0 + M'+ (x + 415) + ' ' + (y + 266.72) + 'l 15 0 + M'
		+''+ (x + 415) + ' ' + (y + 250.06) + 'l 0 0 + M'+ (x + 415) + ' ' + (y + 233.04) + 'l 15 0 + M'
		+''+ (x + 420) + ' ' + (y + 216.74) + 'l 15 0 + M'+ (x + 420) + ' ' + (y + 200.08) + 'l 0 0 + M'
		+''+ (x + 420) + ' ' + (y + 183.42) + 'l 15 0 + M'+ (x + 425) + ' ' + (y + 166.73) + 'l 15 0 + M'
		+''+ (x + 425) + ' ' + (y + 150.10) + 'l 0 0 + M')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' }).toFront();
		Read_txt = paper.text(x + 445, y + 400, 0).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 445, y + 350, 75).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 460, y + 300, 150).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 460, y + 250, 225).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 465, y + 200, 300).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 475, y + 150, 375).attr({ 'font-size': 15 });

		Read_txt = paper.text(x + 100, y + 250, "Measuring Scale").attr({ 'font-size': 18 });

	};
	
	
		
	function scale_Margin15(x, y) {
		paper.path('M' + (x + 210) + ' ' + (y + 405) + 'l 167 0  + M  ' + (x + 175) + ' ' + (y + 230) + 'l 250 0')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' });

		paper.path('M' + (x + 300) + ' ' + (y + 470) + 'l  0 -240 + M  ' + (x + 400) + ' ' + (y + 400) + 'l 30 0 + M' + (x + 405) + ' ' + (y + 360) + 'l 30 0 + M'
			+ '' + (x + 410) + ' ' + (y + 320) + 'l 30 0 +M' + (x + 415) + ' ' + (y + 280) + 'l 30 0 +M '+ (x + 420) + ' ' + (y + 240) + 'l 30 0  ')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' }).toFront();
		Read_txt = paper.text(x + 445, y + 400, 0).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 445, y + 360, 10).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 460, y + 320, 20).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 460, y + 280, 30).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 460, y + 240, 40).attr({ 'font-size': 15 });
	

		Read_txt = paper.text(x + 100, y + 250, "Measuring Scale").attr({ 'font-size': 18 });

	};



}