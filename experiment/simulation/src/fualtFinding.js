function tableCreateForFualtFinding1()
			{
				 var min = 0.5;
				 var max = 10.00;
				
				
				var tableMainDiv = '<h2><center>OBSERVE  READING & IDENTIFY THE FAULT</center></h2>'
			        + '<table class="table table-bordered" >'
					+ ' <thead>'
					+ '  <tr  style="padding:10px;background-color:#1d2b37;color:#fff;">'
					+ '  <th>Percentage</th>'
					+ '   <th>Magnetic Flow (Standard) (LPM)</th>'
					+ '  <th >Rotameter Flow (Actual) (LPM)</th>'

					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
				for (var i = 0,p=0; i < masterJson.demo.length; i++,p++) {
					var errorRandom=Math.random() * (max - min) + min;
					console.log("errorRandom   "+errorRandom);
					var errorAddFault=errorRandom+masterJson.demo[i].rFlow;
					tableMainDiv += '<tr>'
						+ '   <td><center>' + masterJson.demo[i].perc + '</center></td>'
						+ '   <td style="background-color:#83e3998a;"><center>' + masterJson.demo[i].mFlow + '</center></td>'
						+ '   <td style="background-color:#de767645"><center>' + errorAddFault.toFixed(2) + '</center></td>'
						+ '     </tr>'

						
				}
				tableMainDiv += ' </tbody>'
					 + '  </table>'
				 $("#fualtFindingTable").html(tableMainDiv);
			}
			
			function tableCreateForFualtFinding2()
				{ 
				var min = 2;
				 var max = masterJson.demo.length-1;
				 var place=parseInt(Math.random() * (max - min) + min);
				 console.log("Place Continue  "+place);
				
				var tableMainDiv = '<h2><center>OBSERVE THE TABLE READING & SELECT THE FAULT</center></h2>'
			        + '<table class="table table-bordered" >'
					+ ' <thead>'
					+ '  <tr  style="padding:10px;background-color:#1d2b37;color:#fff;">'
					+ '  <th><center>Percentage</center></th>'
					+ '   <th><center>Magnetic Flow (Standard) (LPM)</center></th>'
					+ '  <th><center>Rotameter Flow (Actual) (LPM)</center></th>'

					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
				for (var i = 0,p=0; i < masterJson.demo.length; i++,p++) {
					
					if(place<=i-1)
						{
							var errorRotameter=masterJson.demo[place].rFlow;
							tableMainDiv += '<tr>'
							+ '   <td><center>' + masterJson.demo[i].perc + '</center></td>'
							+ '   <td style="background-color:#83e3998a;"><center>' + masterJson.demo[i].mFlow + '</center></td>'
							+ '   <td style="background-color:#de767645;"><center>' + errorRotameter.toFixed(2) + '</center></td>'
							+ '     </tr>'
						
						}
					else
						{
						var errorRotameter=masterJson.demo[i].rFlow;
						tableMainDiv += '<tr>'
							+ '   <td><center>' + masterJson.demo[i].perc + '</center></td>'
							+ '   <td style="background-color:#83e3998a;"><center >' + masterJson.demo[i].mFlow + '</center></td>'
							+ '   <td style="background-color:#de767645;"><center >' + errorRotameter.toFixed(2) + '</center></td>'
							+ '     </tr>'
						}
					

						
				}
				tableMainDiv += ' </tbody>'
					 + '  </table>'
				 $("#fualtFindingTable").html(tableMainDiv);
			}


 var randomNumber;
 var ent = 0;
  fault = {};
function fualtFinding()
{
	
	$("#centerText1").html("ROTAMETER DIAGRAM");
	 $("#centerText2").html("FAULT FINDING ");
	$("#main-div-conf").html("");
	 $("#canvas-div").html("");
	 
	 $("#nextFaultFindingDiv").html("");
	 $("#calibrationDiv").html("");
	 $("#panelHeadingBold").html(""); 
	  randomNumber=Math.floor(Math.random() * 2);
//	 randomNumber=1;
	 console.log("random  "+randomNumber);
	var str=''
	str+='<div class="row ">'
//			+'<button type="button" class="col-sm-12 btn btn-danger" style="margin-top:20px;" id="nextFaultFinding"disabled>Next Level</button>'
		 +'<div class="col-sm-12 " id="fualtFindingTable">'
		+'</div>'
		 
		 +'<div class="col-sm-12">'
		 +' <select  class="form-control col-sm-12" id="errorSelection">'
		 +' <option  value="">Select Error type </option>'
		 +' <option  value="0"> Float Weight reduces </option>'
		 +'  <option value="1">Guided  ( Misplace )</option>'
		
		 +'  </select>'
		 +'<div class="col-sm-12 ">'
		 +'<div class="alert alert-danger" role="alert" id="alertMsgBox" hidden>'
		 +'<b id="msgBox"> Wrong Selection !!!!!!!!</b>'
		+'</div>'
			+'</div>'
    +'</div>'
    
    +'</div>'
    $("#canvas-div").html(str);
	
	if(randomNumber==0){
		tableCreateForFualtFinding1();
	}
	else
		{
		tableCreateForFualtFinding2();
		}
	
    $("#main-div-conf").html("<img src='images/rotameter.jpeg' class='img-fluid'>");
	
    $("#errorSelection").change(function() {
		
    	var selectedOption=$("#errorSelection").val();
    	console.log("selectedOption   "+selectedOption);
//    	if(counter<=3){
    		if( randomNumber==selectedOption){
    			$("#main-div-conf").html("");
    			 $("#canvas-div").html("");
    			 $("#alertMsgBox").attr('hidden',true);
    			 ent++;
    			 fault.fault = ent;
    			 data.Fault = fault;
    			 result();
//    			 resultAnalysis();
//    			 $("#main-div1").html("<b class='errorMsgf col-sm-12 '> Result Page inprogress .</b>");
    		}
    		else{
    			$("#alertMsgBox").attr('hidden',false);
    			$("#msgBox").html("<b class='errorMsgf'> Wrong selection . </b>");	
    			}
//    	}
//    	else{
//    		
//    	}
    	
//    	counter=counter+1;
    });
}//main function

