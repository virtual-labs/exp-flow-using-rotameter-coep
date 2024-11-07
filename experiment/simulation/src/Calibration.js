function calibration()
	{
	
	calibration = {};
	zero = 0;
	span = 0;	
	incorrectActualInstFlow=0;
		htm='';
			htm+='<div class="card" id="calibrationDiv">'
			+'  <div class="card-header  text-white" style="font-size:20px;"><center>CALIBRATION</center></div>'
			+' <div class="card-body"  style="background-color:#dee2e6;margin-right:10px;margin-left:10px;">'
				+'<div class="row" >'
				+'<div class="col-sm-1">'
				+'</div>'
			+'<div class="col-sm-5" id="zeroAnswer" >'
			+'<div class="card ">'
			+'  <div class="card-header  text-white" style="background-color:#072647;"><center>ZERO ERROR</center></div>'
			+' <div class="card-body">'
			+'<input type="text" class="form-control" id="zeroText"/>'
			+'<br>'
			 +'<button type="button"   class="btn btn-danger btnStyle" id="zeroSubmit" data-toggle="modal" data-target="#zeroSubmitModel" ><b> SUBMIT </b></button>'
			+'</div> '
//			+' <div class="card-footer">Formula : Minimum Actual Flow - Minimum Standard Flow </div>'
			+' </div>'
			+'</div>'
			// + ' <!-- Modal -->'
				+ '<div class="modal fade" id="zeroSubmitModel" role="dialog">'
				+ ' <div class="modal-dialog modal-md">'
				+ '    <div class="modal-content">'
				+ '     <div class="modal-header">'
				
				+ '       <h4 class="modal-title">Message box</h4>'
				+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
				+ '     </div>'
				+ '     <div class="modal-body">'
				+ '       <p id="modelMsgZero">This is a small modal.</p>'
				+ '     </div>'
				+ '     <div class="modal-footer">'
				+ '       <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'
				+ '     </div>'
				+ '   </div>'
				+ ' </div>'
				+ '</div>'
				//model Close
			+'<div class="col-sm-5" id="spanAnswer" hidden>'
			+'<div class="card">'
			+'  <div class="card-header  text-white" style="background-color:#072647;"><center>SPAN ERROR</center></div>'
			+' <div class="card-body">'
			+'<input type="text" class="form-control" id="spanText" />'
			+'<br>'
			 +'<button type="button"   class="btn btn-danger btnStyle" id="spanSubmit" data-toggle="modal" data-target="#spanSubmitModel" ><b> SUBMIT </b></button>'
				
			+'</div> '
//			+' <div class="card-footer">Formula :Maximum Actual Flow - Maximum Standard Flow</div>'
			+' </div>'
			+'</div>'
			+'<div class="col-sm-1">'
			+'</div>'

			+'</div>'
			 + ' <!-- Modal -->'
				+ '<div class="modal fade" id="spanSubmitModel" role="dialog">'
				+ ' <div class="modal-dialog modal-md">'
				+ '    <div class="modal-content">'
				+ '     <div class="modal-header">'
				
				+ '       <h4 class="modal-title">Message box</h4>'
				+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
				+ '     </div>'
				+ '     <div class="modal-body">'
				+ '       <p id="modelMsgSpan">This is a small modal.</p>'
				+ '     </div>'
				+ '     <div class="modal-footer">'
				+ '       <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'
				+ '     </div>'
				+ '   </div>'
				+ ' </div>'
				+ '</div>'
				//model Close
			+'<div class="row cantainer " id="calibrationPanel" >'
			+'<div class="col-sm-1">'
			+'</div>'
			+'<div class="col-sm-5 " id="zeroPanel" hidden>'
				+'<div class="panel " >'
			      +' <div class="panel-heading" style="background-color:#072647;color:#fff;"><center>ZERO ERROR</center></div>'
			     	+' <div class="panel-body" id="plusMinusCalibrationZero">'
				      	+'<img src="images/minusresize.png" class="imgPlusMinus1 " id="minusZero" ></img>'
						+'<img src="images/resizeknob.png" class="img-fluid imgPlusMinus img-circle " id="knobZero" ></img>'
						+'<img src="images/plusresize.png" class="imgPlusMinus1 " id="plusZero"></img>'
					 +'</div>'
					 +'<div class="alert alert-success" role="alert"  id="errorZeroAlert" style="margin:15px;" hidden>'
						+' <b id="errorZeroText">Zero Adjusted Successfully ...</b>'
					+'</div>'
				 +'</div>'
				
		 +'</div>'
		+'<div class="col-sm-5"  id="spanPanel" hidden>'
				+'<div class="panel "  >'
			      +' <div class="panel-heading" style="background-color:#072647;color:#fff;"><center>SPAN ERROR</center></div>'
			     	+' <div class="panel-body" id="plusMinusCalibrationSpan">'
				     	+'<img src="images/minusresize.png"class="imgPlusMinus1 "  id="minusMax" ></img>'
						+'<img src="images/resizeknob.png" class="imgPlusMinus img-circle" id="knobSpan"></img>'
						+'<img src="images/plusresize.png"  class="imgPlusMinus1 " id="plusMax"></img>'
					+'</div>'
					+'<div class="alert alert-success" role="alert"  id="spanErrorAlert" style="margin:15px;" hidden>'
						+' <b id="spanErrorText">Span Adjusted Successfully .</b>'
					+'</div>'
					+'<div class="alert alert-danger" role="alert"  id="errorZeroAlert2" style="margin:15px;" hidden>'
						+' <b id="zeroErrorText2">But zero disturbs .</b>'
					+'</div>'
			     +'</div>'
		+'</div>'
		
		+'<div class="col-sm-1">'
		+'</div>'
		

	 +'</div>' 
	 +'</div>'
	 +'</div>'
	 
	 +'<div class="row " id="nextFaultFindingDiv" >'
	+'<button type="button" class="col-sm-12 btn btn-danger" style="" id="nextFaultFinding"disabled>Next Level</button>'
	+'</div>'
			$("#calibration").html(htm);
			
			$("#nextFaultFinding").click(function() {
				fualtFinding();
				data.Calibration = calibration; 
				console.log(data);
			});
			var id=0;
			$("#zeroSubmit").click(function() {
				console.log("in zero submit");
				zero++;
				calibration.zero = zero;
				
				
				var flowAns = $("#zeroText").val().trim();
				var max=masterJson.demo[0].mFlow;
				var min=masterJson.demo[0].rFlow;
				var ans= (min-max).toFixed(2);
				console.log("min    "+min);
				var ans1= parseFloat(ans);
				
				console.log("zero Answer   "+ans1);
				
				
				if(flowAns=="")
					{

						 $("#modelMsgZero").html("<b class='boldTextBlue' >Dont Skip empty textbox . </b>");
						 $("body").css("padding","0px 0px 0px 0px");
					}
				else{

				
				if (id <= 3) {
					
								if(flowAns==ans1){
									checkAns = 0;
									id=0;
									  $("#zeroSubmit").prop('disabled', true);
									$("#zeroText").prop('disabled', true);
									$("#spanAnswer").attr("hidden",false);
								}
								else if (flowAns != ans1) {
								
								 $("#modelMsgZero").html("<b class='boldTextRed'>Entered value is incorrect.Try again . </b>");
								 $("body").css("padding","0px 0px 0px 0px");
								
								
								}


				} else if (id == 4) {
					
					$("#modelMsgZero").html("<b class='boldTextBlue'>Formula : Minimum Actual Flow - Minimum Standard Flow </b> ");
					 $("body").css("padding","0px 0px 0px 0px");
					
				} else {
					flowAns = $("#zeroText").val().trim();

					if (flowAns == ans1) {
						checkAns = 0;
						
						id=0;
						  $("#zeroSubmit").prop('disabled', true);
						$("#zeroText").prop('disabled', true);
						$("#spanAnswer").attr("hidden",false);
						
					} else {
						checkAns = 0;
//						alert("correct answer is " + flow );
						 $("#modelMsgZero").html("<b class='boldTextRed'>Correct answer is " + ans1+"</b>");
						 $("body").css("padding","0px 0px 0px 0px");	

					}
				}
				id++;
				 
				}

				});
			var length= masterJson.demo.length-1;
			var id=0;
			$("#spanSubmit").click(function() {
				
				console.log("in span submit");
				span++;
				calibration.span = span;
				var max=masterJson.demo[length].mFlow;
				var min=masterJson.demo[length].rFlow;
				var ans= (min-max).toFixed(2);
				console.log("min    "+min);
				var ans1= parseFloat(ans);
				console.log("span Answer   "+ans1);
				
				var flowAns = $("#spanText").val().trim();
				console.log("flowAns Answer   "+flowAns);
				if(flowAns=="")
					{

						 $("#modelMsgSpan").html("<b class='boldTextBlue' >Dont Skip empty textbox . </b>");
						 $("body").css("padding","0px 0px 0px 0px");
					}
				else{

				
						if (id <= 3) {
							
								if (flowAns == ans1) {
									checkAns = 0;
									id=0;
									
									$("#spanSubmit").prop('disabled', true);
									$("#spanText").prop('disabled', true);
									$("#spanAnswer").attr("hidden",false);
									$("#zeroPanel").attr("hidden",false);
								 
								} else if (flowAns != ans1) {

									 $("#modelMsgSpan").html("<b class='boldTextRed'>Entered value is incorrect.Try again . </b>");
									 $("body").css("padding","0px 0px 0px 0px");
									 dataJson = {};
									
					
					}


				} else if (id == 4) {
					
//					alert("formula : Volume of the float = "+unescape('%u220F')+" / 4 Dr"+unescape('%B2')+"h ");
					
					 $("#modelMsgSpan").html("<b class='boldTextBlue'>Formula : Maximum Actual Flow - Maximum Standard Flow </b> ");
					 $("body").css("padding","0px 0px 0px 0px");
					
				} else {
					flowAns = $("#spanText").val().trim();

					if (flowAns == ans1) {
						checkAns = 0;
						id=0;
						$("#spanSubmit").prop('disabled', true);
						$("#spanText").prop('disabled', true);
						$("#spanAnswer").attr("hidden",false);
						$("#zeroPanel").attr("hidden",false);
						
					} else {
						checkAns = 0;
//						alert("correct answer is " + flow );
						 $("#modelMsgSpan").html("<b class='boldTextRed'>Correct answer is " + ans1+"</b>");
						 $("body").css("padding","0px 0px 0px 0px");	

					}
				}
				id++;
				 
				}

				});
			
			
			var rotate=20;
			var zcnt = 0;
			var zcntW = 0;
			var scnt = 0;
			var scntW = 0;
			$("#plusZero").click(function() {
				var ydataPulse=[];
			
				$("#knobZero").css({ transform: 'rotate('+rotate+'deg)' });
				var temp1=masterJson.demo[0].rFlow;
				var temp2=masterJson.demo[0].mFlow;
				var actual=parseInt(temp1);
				var std=parseInt(temp2);
				 console.log("masterJson.demo[0].rFlow"+masterJson.demo[0].rFlow);
				 console.log("std "+std+" actual "+actual);
				 zcnt++;
				 calibration.zcor = zcnt;
				console.log("zero counter"+zcnt);
				 for(i=0;i< masterJson.demo.length;i++){
						
							 if(std==actual)
							 {
								 $('#spanPanel').removeAttr('hidden');
								 $('#errorZeroAlert').attr('hidden',false);
						
									 $("#plusMinusCalibrationZero").html("");
									 
									 temp= parseInt(masterJson.demo[i].rFlow);
										ydataPulse[i]=masterJson.demo[i].rFlow=temp;
								
							 }
							 
							 else{
								 temp= parseInt(masterJson.demo[i].rFlow)+1;
								ydataPulse[i]=masterJson.demo[i].rFlow=temp;
								
								
							 }
						}	
					
				var chart = $('#canvas-div').highcharts();
		        chart.series[1].setData(ydataPulse, false);
		        $('#canvas-div').highcharts().redraw();
		        
		       
				 rotate+=20;
			});
			calibration.zwor = zcnt;
			$("#minusZero").click(function() {
				var ydataPulse=[];
			
				$("#knobZero").css({ transform: 'rotate('+rotate+'deg)' });
				
				var temp1=masterJson.demo[0].rFlow;
				var temp2=masterJson.demo[0].mFlow;
				var actual=parseInt(temp1);
				var std=parseInt(temp2);
				 console.log("std "+std+" actual "+actual);
				zcntW++;
				calibration.zwor = zcnt; 
				 
				 
					for(i=0;i< masterJson.demo.length;i++){
						
							 if(std==actual)
							 { $('#errorZeroAlert').attr('hidden',false);
//								 $('#zeroErrorAlert').attr('hidden',false);  
//								 $('#errorZeroAlert').removeAttr('hidden');
									$('#spanPanel').removeAttr('hidden');
									$("#plusMinusCalibrationZero").html("");
								temp= parseInt(masterJson.demo[i].rFlow);
									ydataPulse[i]=masterJson.demo[i].rFlow=temp;
								
							 }
							 
							 else{
								 temp= parseInt(masterJson.demo[i].rFlow)-1;
								ydataPulse[i]=masterJson.demo[i].rFlow=temp;
								
							 }
						}	
					
				var chart = $('#canvas-div').highcharts();
		        chart.series[1].setData(ydataPulse, false);
		        $('#canvas-div').highcharts().redraw();
		        
		       
				 rotate-=20;
			});
			var length= masterJson.demo.length-1;
			
			var temp1=masterJson.demo[length].rFlow;
			var temp2=masterJson.demo[length].mFlow;
			
			var actualSpan=parseInt(temp1);
			var stdSpan=parseInt(temp2);
			$("#minusMax").click(function() {
				
				var ydataPulse=[];
			
				$("#knobSpan").css({ transform: 'rotate('+rotate+'deg)' });
				var actualSpan=parseInt(masterJson.demo[length].rFlow);
				var stdSpan=parseInt(masterJson.demo[length].mFlow);

				 console.log("std "+stdSpan+" actual "+actualSpan);
				scnt++;
				 calibration.scor = scnt;
				console.log("span ad - "+scnt);
				 
				 
					for(i=0;i< masterJson.demo.length;i++){
						
							 if(stdSpan==actualSpan)
							 {
								 
								   $("#plusMinusCalibrationSpan").html("");
								   $('#errorZeroAlert2').attr('hidden',false);
								   $('#spanErrorAlert').removeAttr('hidden');
//								   $('#zeroErrorAlert').html('');
								   $('#errorZeroAlert').attr('hidden',true);
								temp= parseInt(masterJson.demo[i].rFlow);
									ydataPulse[i]=masterJson.demo[i].rFlow=temp;
									htm=''
										htm+='<div class="panel panel-primary"  id="zeroPanel2">'
									     
									     	+' <div class="panel-body" id="zero2">'
										     	+'<img src="images/minusresize.png"class="imgPlusMinus1 "  id="minus2" ></img>'
												+'<img src="images/resizeknob.png" class="imgPlusMinus img-circle" id="knob2"></img>'
												+'<img src="images/plusresize.png"  class="imgPlusMinus1 " id="plus2"></img>'
											+'</div>'
											
											+'<div class="alert alert-success" role="alert"  id="zeroAlert2" style="margin:15px;" hidden>'
												+' <b id="zeroErrorText22">Again Zero Error Adjusted Successfully . </b>'
											+'</div>'
											+'<div class="alert alert-success" role="alert"  id="zeroBoth" style="margin:15px;" hidden>'
											+' <b id="zeroBoth2">Both Error  Adjusted Successfully . </b>'
										+'</div>'
									     +'</div>'
									     
									     $("#plusMinusCalibrationZero").html(htm);
//									   $("#zeroErrorAlert").attr("hidden",true);
									
									//Second Zero Set
							 }
							 
							 else{
								 temp= parseInt(masterJson.demo[i].rFlow)-1;
								ydataPulse[i]=masterJson.demo[i].rFlow=temp;
								
							 }
						}	
					
				var chart = $('#canvas-div').highcharts();
		        chart.series[1].setData(ydataPulse, false);
		        $('#canvas-div').highcharts().redraw();
		        
		       
				 rotate-=20;
				 $("#plus2").click(function() {
						var ydataPulse=[];
						var length= masterJson.demo.length-1;
						$("#knob2").css({ transform: 'rotate('+rotate+'deg)' });
						var actualSpan =parseInt(masterJson.demo[0].rFlow);
						var stdSpan=parseInt(masterJson.demo[0].mFlow);

						 console.log(" span std "+stdSpan+" actual "+actualSpan);
						
						 
						 
							for(i=0;i< masterJson.demo.length;i++)
							{
									if(length!=i){
									 if(stdSpan==actualSpan)
									 {
										    
										 $("#zero2").html("");
										   $('#zeroAlert2').removeAttr('hidden');
										   $("#zeroBoth").removeAttr('hidden');
										   $("#nextFaultFinding").prop("disabled",false);
										   $('#errorZeroAlert2').attr('hidden',true);
										   
										 temp= parseInt(masterJson.demo[i].rFlow);
											ydataPulse[i]=masterJson.demo[i].rFlow=temp;
										
									 }
									 
									 else{
										 temp= parseInt(masterJson.demo[i].rFlow)+1;
										ydataPulse[i]=masterJson.demo[i].rFlow=temp;
										
									 }
								}
									else
									{
									temp= parseInt(masterJson.demo[i].rFlow);
									ydataPulse[i]=masterJson.demo[i].rFlow=temp;
									}
							}
							
							
						var chart = $('#canvas-div').highcharts();
				        chart.series[1].setData(ydataPulse, false);
				        $('#canvas-div').highcharts().redraw();
				        rotate+=20;
				       
						
					});
				 $("#minus2").click(function() {
						var ydataPulse=[];
						var length= masterJson.demo.length-1;
						$("#knob2").css({ transform: 'rotate('+rotate+'deg)' });
						var actualSpan =parseInt(masterJson.demo[0].rFlow);
						var stdSpan=parseInt(masterJson.demo[0].mFlow);

						 console.log(" span std "+stdSpan+" actual "+actualSpan);
						
						 
						 
							for(i=0;i< masterJson.demo.length;i++)
							{
									if(length!=i){
									 if(stdSpan==actualSpan)
									 {
										    
										 $("#zero2").html("");
										   $('#zeroAlert2').removeAttr('hidden');
										   $('#zeroBoth').removeAttr('hidden');
										   $('#errorZeroAlert2').attr('hidden',true);
										   $('#nextDiv').attr('hidden',true);
										 temp= parseInt(masterJson.demo[i].rFlow);
											ydataPulse[i]=masterJson.demo[i].rFlow=temp;
										
									 }
									 
									 else{
										 temp= parseInt(masterJson.demo[i].rFlow)-1;
										ydataPulse[i]=masterJson.demo[i].rFlow=temp;
										
									 }
								}
									else
									{
									temp= parseInt(masterJson.demo[i].rFlow);
									ydataPulse[i]=masterJson.demo[i].rFlow=temp;
									}
							}
							
							
						var chart = $('#canvas-div').highcharts();
				        chart.series[1].setData(ydataPulse, false);
				        $('#canvas-div').highcharts().redraw();
				        rotate-=20;
				       
						
					});
			});
			
			calibration.swor = scntW;
			$("#plusMax").click(function() {
				var ydataPulse=[];
				
				$("#knobSpan").css({ transform: 'rotate('+rotate+'deg)' });
//				var actualSpan =parseInt(masterJson.demo[length].rFlow);
//				var stdSpan=parseInt(masterJson.demo[length].mFlow);
				var temp1=masterJson.demo[length].rFlow;
				var temp2=masterJson.demo[length].mFlow;
				
				var actualSpan=parseInt(temp1);
				var stdSpan=parseInt(temp2);
				 console.log(" span std "+stdSpan+" actual "+actualSpan);
				scntW++;
				calibration.swor = scntW;
				
				console.log("Span wrong"+scntW);
				 
				 
					for(i=0;i< masterJson.demo.length;i++){
						
							 if(stdSpan==actualSpan)
							 {

								temp= parseInt(masterJson.demo[i].rFlow)+1;
									ydataPulse[i]=masterJson.demo[i].rFlow=temp;
								
							 }
							 
							 else{
								 temp= parseInt(masterJson.demo[i].rFlow)+1;
								ydataPulse[i]=masterJson.demo[i].rFlow=temp;
								
							 }
						}	
					
				var chart = $('#canvas-div').highcharts();
		        chart.series[1].setData(ydataPulse, false);
		        $('#canvas-div').highcharts().redraw();
		        
		       
				 rotate+=20;
			});
			
	}