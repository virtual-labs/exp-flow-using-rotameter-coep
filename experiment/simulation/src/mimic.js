

function mimic(pipeSize, fluidType) {
	var paper = new Raphael(document.getElementById('canvas-div'), 1000, 1000);
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
	pipeSize = pipeSize;
	fluidType = fluidType;
	flowJson = {};
	arrayJson = [];
	masterJson = {};
	limit = 0;
	var percent;
	console.log("pipe" + pipeSize);
	console.log("fluid " + fluidType);

	var float_ani = paper.path('M' + (x) + ' ' + (y + 50) + 'l 0 0  ');

	pump_Draw(x, y-30);
	Float(x + 485, y + 360);

	var img = paper.image("images/knob1.png", (x - 85), (y + 500), 70, 70);

	var plus = paper.image("images/plus.png", (x - 5), (y + 520), 30, 30);

	var minus = paper.image("images/minus.png ", (x - 125), (y + 522), 30, 30);



	var pump_circle = paper.circle(x - 50, y + 620, 50).attr({ 'stroke': 'black', 'stroke-width': '1.5', 'fill': 'white' });


	if (pipeSize == 50) {
		min1 = 58.33; max1 = 583.33;
		baseDiagram(x + 200, y);
		scale_Margin(x + 200, y);
		limit = 280;
	}
	else if (pipeSize == 40) {
		min1 = 31.66; max1 = 316.66;
		baseDiagram40(x + 200, y);
		scale_Margin40(x + 200, y);
		limit = 210;
	}
	else if (pipeSize == 25) {
		min1 = 13.33; max1 = 133.33;
	}
	else if (pipeSize == 15) {
		min1 = 3.33; max1 = 35;
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
	}
	
	
	function flow_Calculation(x, y) {
		xf = (pp * (max1 - min1) / 100) + min1;
		console.log("flow" + xf);
		paper.rect(x + 130, y + 460, 70, 40).attr({ 'stroke-width': '2', 'fill': 'pink' }).toFront();
		txt13 = paper.text(x + 165, y + 475, xf.toFixed(2)).attr({ 'font-size': 20 });


	}

	pumpOff(x, y);
	function pumpOff(x, y) {
		y2 = 50;
		paper.circle(x - 50, y2 + 620, 20).attr({ 'stroke': 'red', 'stroke-width': '1', 'fill': 'red' });
	};

	function pumpOn(x, y) {
		paper.circle(x - 50, y + 620, 20).attr({ 'stroke': 'green', 'stroke-width': '1', 'fill': 'green' });
	};

	// Float animation upwards 
	pump_circle.click(function(event) {
		if (pp == 0) {
			percent = 1;
		}
		else {
			percent = pp;
		}
		if (sv_Alert == 1) {
			//		meter_Fill(x, y);
			pumpOn(x, y);
			setTimeout(function() { float_Increment(x, y) }, time);
			flow_Calculation(x, y);
		} else {
			alert("Turn on SV valve");
		}


	});

	function float_Calculation(x, y) {
		pp1 = pp + 1;
		dh = (pp * (limit - 10) / 100) + 10;
		console.log("ans d " + dh);
		dh1 = (pp1 * (limit - 10) / 100) + 10;
		console.log("ans d err" + dh1);
		ans = y  - dh1;
		console.log("ans " + ans);
		ef = (pp1 * (max1 - min1) / 100) + min1;
		console.log("flow error" + ef);
	}

	//function for rotation of float

	function float_Increment(x, y) {
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
				setTimeout(function() { pumpOff(x, y) }, 5000);
				setTimeout(function() { mag_zero(x, y) }, 5000);
				setTimeout(function() { float_Decrement(x, y) }, 5100);


				flowJson = {};
				flowJson.mFlow = xf.toFixed(2);
				flowJson.rFlow = ef.toFixed(2);
				flowJson.perc = percent;
				console.log("Flow " + flowJson.mFlow);
				arrayJson.push(flowJson);
				var table = "";

				console.log(arrayJson);
				masterJson.demo = arrayJson;

				console.log(masterJson);

				$("#tableDesign").html("");
				var tableMainDiv = '<br><div class="row" id="tableDesign">'
				table = '<table class="table table-dark" style="margin-left:15px;margin-right:15px;">'
					+ ' <thead>'
					+ '  <tr>'
					+ '  <th scope="col">Percentage</th>'
					+ '   <th scope="col">Magnetic Flow (Standard) (LPM)</th>'
					+ '  <th scope="col">Rotameter Flow (Actual) (LPM)</th>'

					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
				for (var i = 0; i < masterJson.demo.length; i++) {
					table += '    <tr>'
						+ '   <td>' + masterJson.demo[i].perc + '</td>'
						+ '   <td>' + masterJson.demo[i].mFlow + '</td>'
						+ '   <td>' + masterJson.demo[i].rFlow + '</td>'

						+ '     </tr>'
				}
				table += ' </tbody>'
					+ '  </table>'

				$("#main-div-conf").append(tableMainDiv);
				$("#tableDesign").html(table);




			};
			counter++;
		}, 50);

	};


	// float decrement 
	function float_Decrement(x, y) {

		floatDec = setInterval(function() {
			if (y <= 50) {

				float_ani.remove();
				y = y + 10;

				Float(x + 485, y + 360);

			}
			else {
				clearInterval(floatDec);

			}
		}, 100);
	};

	var ht = 0;
	// function for fluid empty in tube
	function meter_Empty(x, y) {
		y1 = 130;
		var a = paper.path('M' + (x + 300) + ' ' + (y1 + 115) + 'l 0 0').attr({ 'stroke': 'white', 'stroke-width': '150' });
		level = a.animate({
			path: "M" + (x + 300) + " " + (y1 + 115) + "  l 0 450", 'stroke-width': '150', 'stroke': 'white',

		}, time * 50);
		ht = 20;

	};

	// function for fuild fill in tube
	function meter_Fill(x, y) {
		y = y - ht;

		var a = paper.path('M' + (x + 300) + ' ' + (y + 515) + 'l 0 0').attr({ 'stroke': color, 'stroke-width': '150' });
		level = a.animate({
			path: "M" + (x + 300) + " " + (y + 515) + "  l 0 " + (-470 + ht), 'stroke-width': '150', 'stroke': color,
			opacity: 0.5
		}, time * 50);
	};


	// Base Diagram
	function baseDiagram(x, y) {
		//	paper.path('M' + (x + 160) + ' ' + (y + 700) + 'l 0 10 l -20 0 l 0 -80 l 20 0 l 0 10 l 65 0 l 0 -60  +M' + (x + 160) + ' ' + (y + 700) + 'l 215 0 l 0 -120').attr({ 'stroke': 'black', 'stroke-width': '2' });
		//	paper.path('M' + (x + 130) + ' ' + (y + 720) + 'l 0 -100 l 35 0 l 0 10 l 50 0 l 0 -50 +M ' + (x + 130) + ' ' + (y + 720) + ' l 35  0 l 0 -10 l 220 0 l 0 -130   ').attr({ 'stroke': 'black', 'stroke-width': '2' });
		paper.path('M' + (x + 200) + ' ' + (y + 486) + 'l 0 15 l 200 0 l 0 -15 l -200 0  l 0 -15 l 200 0 l 0 15  ')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' });

		paper.path('M' + (x + 150) + ' ' + (y + 30) + 'l 0 15 l 300 0 l 0 -15 l -300 0  l 0 -15 l 300 0 l 0 15  +M' + (x + 150) + ' ' + (y) + 'l 300 0 ')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' });

		paper.path('M' + (x + 225) + ' ' + (y + 550) + 'l 0 -80 l -60 -500 + M' + (x + 215) + ' ' + (y + 550) + 'l 0 -80 l -60 -500')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' });
		paper.path('M' + (x + 375) + ' ' + (y + 550) + 'l 0 -80 l 60 -500 + M' + (x + 385) + ' ' + (y + 550) + 'l 0 -80 l 60 -500')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' });

		var arc1 = paper.path('M' + (x + 215) + ' ' + (y + 550) + ' A 30 40 0 0 1 ' + (x + 186) + ' ' + (y + 592) + ' l -40 0 l 0 -15 l -15 0 l 0 86 l 15 0 l 0 -15 l 150 0');
		var arc2 = paper.path('M' + (x + 225) + ' ' + (y + 550) + ' A 30 40 10 0 1 ' + (x + 191) + ' ' + (y + 600) + ' l -40 0 l 0 40 l 150 0 ');

		var arc3 = paper.path('M' + (x + 375) + ' ' + (y + 550) + 'l 0 50 ' + 'A 30 40 10 0 1 ' + (x + 351) + ' ' + (y + 640) + ' l -50 0 ');
		var arc4 = paper.path('M' + (x + 385) + ' ' + (y + 550) + 'l 0 50 ' + 'A 30 40 10 0 1 ' + (x + 356) + ' ' + (y + 648) + ' l -60 0 ');
		var text_Magne = paper.text(x + 500, y, "Outlet").attr({ 'font-size': 20, "font-weight": "bold" });
	};


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

	function baseDiagram40(x, y) {
		//	paper.path('M' + (x + 160) + ' ' + (y + 700) + 'l 0 10 l -20 0 l 0 -80 l 20 0 l 0 10 l 65 0 l 0 -60  +M' + (x + 160) + ' ' + (y + 700) + 'l 215 0 l 0 -120').attr({ 'stroke': 'black', 'stroke-width': '2' });
		//	paper.path('M' + (x + 130) + ' ' + (y + 720) + 'l 0 -100 l 35 0 l 0 10 l 50 0 l 0 -50 +M ' + (x + 130) + ' ' + (y + 720) + ' l 35  0 l 0 -10 l 220 0 l 0 -130   ').attr({ 'stroke': 'black', 'stroke-width': '2' });
		paper.path('M' + (x + 200) + ' ' + (y + 486) + 'l 0 15 l 200 0 l 0 -15 l -200 0  l 0 -15 l 200 0 l 0 15  ')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' });

		paper.path('M' + (x + 150) + ' ' + (y + 70) + 'l 0 15 l 300 0 l 0 -15 l -300 0  l 0 -15 l 300 0 l 0 15  +M' + (x + 150) + ' ' + (y) + 'l 290 0 ')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' });

		paper.path('M' + (x + 225) + ' ' + (y + 550) + 'l 0 -80 l -60 -480 + M' + (x + 215) + ' ' + (y + 550) + 'l 0 -80 l -60 -480')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' });
		paper.path('M' + (x + 360) + ' ' + (y + 550) + 'l 0 -80 l 60 -480 + M' + (x + 375) + ' ' + (y + 550) + 'l 0 -80 l 60 -480')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' });

		var arc1 = paper.path('M' + (x + 215) + ' ' + (y + 550) + ' A 30 40 0 0 1 ' + (x + 186) + ' ' + (y + 592) + ' l -40 0 l 0 -15 l -15 0 l 0 86 l 15 0 l 0 -15 l 150 0');
		var arc2 = paper.path('M' + (x + 225) + ' ' + (y + 550) + ' A 30 40 10 0 1 ' + (x + 191) + ' ' + (y + 600) + ' l -40 0 l 0 40 l 150 0 ');

		var arc3 = paper.path('M' + (x + 360) + ' ' + (y + 550) + 'l 0 50 ' + 'A 30 40 10 0 1 ' + (x + 335) + ' ' + (y + 640) + ' l -35 0 ');
		var arc4 = paper.path('M' + (x + 375) + ' ' + (y + 550) + 'l 0 50 ' + 'A 30 40 10 0 1 ' + (x + 346) + ' ' + (y + 648) + ' l -50 0 ');
		var text_Magne = paper.text(x + 480, y, "Outlet").attr({ 'font-size': 20, "font-weight": "bold" });
	};


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

	// Meter scale Diagram
	function scale_Margin(x, y) {
		paper.path('M' + (x + 210) + ' ' + (y + 405) + 'l 180 0  + M  ' + (x + 175) + ' ' + (y + 95) + 'l 250 0')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' });

		paper.path('M' + (x + 300) + ' ' + (y + 405) + 'l  0 -310 + M  ' + (x + 400) + ' ' + (y + 400) + 'l 30 0 + M' + (x + 405) + ' ' + (y + 350) + 'l 30 0 + M'
			+ '' + (x + 410) + ' ' + (y + 300) + 'l 30 0 +M' + (x + 415) + ' ' + (y + 250) + 'l 30 0 +M' + (x + 420) + ' ' + (y + 200) + 'l 30 0 +M' + (x + 425) + ' ' + (y + 150) + 'l 30 0 +M' + (x + 432) + ' ' + (y + 100) + 'l 30 0 +M')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' }).toFront();
		Read_txt = paper.text(x + 445, y + 400, 0).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 445, y + 350, 100).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 460, y + 300, 200).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 460, y + 250, 300).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 465, y + 200, 400).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 475, y + 150, 500).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 475, y + 100, 600).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 540, y + 250, "Mesuring Scale").attr({ 'font-size': 18 });

	};


	function scale_Margin40(x, y) {
		paper.path('M' + (x + 210) + ' ' + (y + 405) + 'l 180 0  + M  ' + (x + 175) + ' ' + (y + 145) + 'l 250 0')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' });

		paper.path('M' + (x + 300) + ' ' + (y + 405) + 'l  0 -260 + M  ' + (x + 400) + ' ' + (y + 400) + 'l 30 0 + M' + (x + 405) + ' ' + (y + 350) + 'l 30 0 + M'
			+ '' + (x + 410) + ' ' + (y + 300) + 'l 30 0 +M' + (x + 415) + ' ' + (y + 250) + 'l 30 0 +M' + (x + 420) + ' ' + (y + 200) + 'l 30 0 +M' + (x + 425) + ' ' + (y + 150) + 'l 30 0 +M' + (x + 432) + ' ' + (y + 100) + 'l 0 0 +M')
			.attr({ 'stroke': 'black', 'stroke-width': '1.5' }).toFront();
		Read_txt = paper.text(x + 445, y + 400, 0).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 445, y + 350, 75).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 460, y + 300, 150).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 460, y + 250, 225).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 465, y + 200, 300).attr({ 'font-size': 15 });
		Read_txt = paper.text(x + 475, y + 150, 375).attr({ 'font-size': 15 });

		Read_txt = paper.text(x + 540, y + 250, "Mesuring Scale").attr({ 'font-size': 18 });

	};

}