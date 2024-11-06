	
	$(function() {
		showQuestions = function() {
		
			var flag = false;
			var myRadio = null;
			dataQues = {};

			$("#canvas-div").html('');
			
				

			var questions = '';
			questions += ''
				+ '<div id = "questionDiv">'

			for (var i = 0; i < QuestionsJSON.data["SEC"].length; i++) {

				for (var j = 0; j < QuestionsJSON.data["SEC"][0].QUES.length; j++) {

					questions += '<div class="col-md-12">'
						+ '<br><span class="queno">Question No : ' + (i + 1) + '</span>'
						+ '<br><div class="queTitle">'

						+ QuestionsJSON.data["SEC"][i].QUES[j].QC
						+ '</div>'

					for (var k = 0; k < QuestionsJSON.data["SEC"][i].QUES[j].ANS.length; k++) {

						questions += '<div>'
							+ '<div class="ansTitle col-md-6">'

							+ "<input class='radioType'  name='radio-" + i + "' id='" + i + "' ANSID='" + QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].ANSID + "' type='radio'"
							+ "' value='"
							+ QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].content
							+ "' >"
							+ '<p style="margin: -20px 0 8px 29px;font-size: 18px;">'
							+ QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].content
							+ '</p>'

							+ '</div>'
							+ '</div>'
					}
					questions += '</div>'
				}
			}

			questions += '<div class="buttonDiv">'
				+ '<button  class="btn btn-danger" id="testSubmit" data-toggle="modal" data-target="#myModal" >Submit Test</button>'
				
				
//				+ '<button id="mimicSubmit" class=" btn btn-danger nextLevelBtn" hidden>Next Level</button>'

				+ ' <!-- Modal -->'
				+ '<div class="modal fade" id="myModal" role="dialog">'
				+ ' <div class="modal-dialog modal-md">'
				+ '    <div class="modal-content">'
				+ '     <div class="modal-header">'
				
				+ '       <h4 class="modal-title">Message box</h4>'
				+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
				+ '     </div>'
				+ '     <div class="modal-body">'
				+ '       <p id="modelMsg">This is a small modal.</p>'
				+ '     </div>'
				+ '     <div class="modal-footer">'
				+ '       <button type="button" class="btn btn-danger" data-dismiss="modal" >Close</button>'
				+ '     </div>'
				+ '   </div>'
				+ ' </div>'
				+ '</div>'
				
				+ '</div>'
				+ ' </div>'

				
				
		

			$("#canvas-div").html(questions);

			$('#testSubmit').on('click', function() {		
				$("body").css("padding","0px 0px 0px 0px");
					var arr = [];
					
					for (var i = 0; i < QuestionsJSON.data["SEC"].length; i++) {

						var qid = $('input[name=radio-' + i + ']').attr(
							'id');

						var ansId = $('input[name=radio-' + i + ']:checked').attr(
							'ANSID');

						myRadio = $(
							'input[name=radio-' + i + ']:checked')
							.val();

						if (myRadio == null) {
							flag = flag && false;
							 $("#modelMsg").html("<b class='boldTextGreen'>Please attempt all the questions</b>");
						
							$("body").css("padding","0px");
							
							break;
						}
						arr.push({
							"QID": qid,
							"ANS": myRadio,
							"ANSId": ansId
						});
					}

					var ansCount = 0;

					if (myRadio != null) {
						for (var i = 0; i < arr.length; i++) {
							if (arr[i].ANSId == "true") {
								ansCount++;
							}
						}
						dataQues.corrAns = ansCount;
						 data.corrAns = dataQues;
//						 console.log(data);
						 
						 $("#modelMsg").html("<b class='boldTextGreen'>Test Submitted Successfully . Correct Answers Are : " + ansCount+"</b>");
//						alert("Test Submitted Successfully . Correct Answers Are : " + ansCount);
						
						$("body").css("padding","0px 0px 0px 0px");
						 $("#centerText1").html("CALCULATION");
						 $("#centerText2").html("MIMIC");
//						 $("#mimicSubmit").removeAttr("hidden",false);
						 $("#testSubmit").removeAttr("data-target");
						 
						 htm = '<div class="row" id="CalculateActualFlow" >'
							 +'</div>'
							 +'<div class="row" id="tableDesign">'
							 +'</div>'
							  $("#main-div-conf").html(htm);
						      CalculateActualFlowStr = '<div class=" col-sm-5" >'
						       +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Actual instantaneous flow of rotameter is  </label>'
						       +'</div>'
					           +'<div class="col-sm-4">'
						       +'<input type="text" id="flowAns" style=margin:15px 10px;width:100%;"  class=" form-control" disabled/>'
						       +'</div>'
						       +'<div class="col-sm-3">'
						       +'<br><button type="submit" class="btn btn-danger" id="btnAnsCheck" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#myModal" disabled>Submit</button>'
						       +'</div>'
						       +'<br>'
						       +'<br>'
						       + ' <!-- Modal -->'
								+ '<div class="modal fade" id="myModal" role="dialog">'
								+ ' <div class="modal-dialog modal-md">'
								+ '    <div class="modal-content">'
								+ '     <div class="modal-header">'
								
								+ '       <h4 class="modal-title">Message box</h4>'
								+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
								+ '     </div>'
								+ '     <div class="modal-body">'
								+ '       <p id="modelMsg">This is a small modal.</p>'
								+ '     </div>'
								+ '     <div class="modal-footer">'
								+ '       <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'
								+ '     </div>'
								+ '   </div>'
								+ ' </div>'
								+ '</div>'
								//model Close
						      
						       $("#CalculateActualFlow").html(CalculateActualFlowStr);	 
						      $("#canvas-div").html("");
						      $("#panelHeadingBold").html('ROTAMETER CHARACTERIZATION DIAGRAM');
								 mimic();
		   					
					}

						
			});
			
		
			}
				
	});
