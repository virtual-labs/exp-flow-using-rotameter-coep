
//var masterJson = {};
//var JsonArr = [];
//var t="";
//var min="";
//var max="";
//var supplierConstaint="";
//var maxInput="";
//var maxOutput="";
//var noBlades="";
//var  fluidType="";
//var  materialType="" ;
//var BladeShape="";
//var pipeSize="";
//var time1="";
var weight="";
 var meter="";
var cylinderPiston="";
data = {};
dataJson = {};
var wrongCounter=0;
var htm='<div class="row" >'
		+'<div class="col-sm-6">'
	   +'<label class="labelstyle">Select Pipe Size (mm) </label>'
	   +'</div>'
		   
	   +'<div class="col-sm-6" >'
	   +'<select  class="form-control selectConf"   id="pipeSize" style="height:auto;">'
	   +'<option value="0">--- Select Pipe Size --- </option>'
	   +'<option value="15">15</option>'
	   +'<option value="25">25</option>'
	   +'<option value="40">40</option>'
	   +'<option value="50">50</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	  +'<br>'
	   
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Select Fluid Type (Service) </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf"  id="fluidType" style="height:auto;">'
	   +'<option value="0">--- Select Service --- </option>'
	   +'<option value="1" >Water  </option>'
	   +'<option value="2">Air</option>'
	  
	  
	   +'</select>'
	   +'</div>'
	   +'</div>'
	    +'<br>'
	   
	   +'<div class="row"  >'
	   +'<div class="col-sm-6">'
		 +'<label class="labelstyle">Select Float Material</label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf"  id="floatMaterial" style="height:auto;">'
	   +'<option value="0">--- Select Float Material --- </option>'
	   +'<option value="1" >Steel </option>'
	   +'<option value="2">Teflon</option>'
//	   +'<option value="3">7 MM</option>'
	   +'</select>'
	   +'<br>'
	   +'<div class="w3-panel " id="errorPanel"  style="background-color:#e4554a;" hidden>'
//	   +'<h3>Danger!</h3>'
	   +'<p id="validMaterialMsg" class="validMaterialMsgStyle" ><p>'
	   +'</div>'
	  
	   +'</div>'
	   
	   +'</div>'
	    
	   +'<br>'
	   +'<div class="row"  >'
	   +'<div class="col-sm-12">'
	      +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="checkConfg" disabled><b>CHECK CONFIGURATION</b></button>'
	   
	      +'</div>'


	   +'</div>'

  $("#main-div-conf").html(htm);
	   
	  $("#floatMaterial").change(function(){
		
		 fluidType=$("#fluidType").val();
		 floatMaterial=$("#floatMaterial").val();
//		 console.log(" fluidType "+fluidType);
//		  console.log(" floatMaterial "+floatMaterial);
		   
		 if((fluidType==1 && floatMaterial==1) ||(fluidType==2 && floatMaterial==2) )
		 {
			 $("#errorPanel").prop("hidden",true);
			 $('#checkConfg').prop('disabled', false);
//			  dataJson = {};
			  dataJson.actualConfig = 1;
			
			  dataJson.incorrectConfig = wrongCounter;
//			  data.resultConfig = dataJson;
//			  console.log(data);
			 
		 }
		 else
		 {
			 $("#errorPanel").prop("hidden",false);
			 $('#checkConfg').prop('disabled', true);
			  $("#validMaterialMsg").html("Selected material type is wrong . ");
			  wrongCounter++;
//			  dataJson = {};
			  dataJson.actualConfig = 1;
			  dataJson.incorrectConfig =wrongCounter ;
//			  data.resultConfig = dataJson;
//			  console.log(data);
		 }
	 
	  });
	 
	  
	   $("#checkConfg").click(function(){
		  
		   pipeSize=$("#pipeSize").val();
		   fluidType=$("#fluidType").val();
		   floatMaterial=$("#floatMaterial").val();
//				dataJson = {};
				dataJson.pipe = pipeSize ;
				dataJson.fluid = fluidType;
				dataJson.material = floatMaterial;
		   console.log("main pipeSize    "+pipeSize);
		   console.log("main fluidType    "+fluidType);
		   console.log("floatMaterial    "+floatMaterial);
		   data.configure = dataJson;
		  
					console.log(data);
					 $("#centerText1").html("DIAGRAM");
					 $("#centerText2").html("BASIC KNOWLEDGE");
				 $("#main-div-conf").html("");
				  $("#main-div-conf").html('<img src="images/rotameter.jpeg"  width="90%" height="80%" class="img-fluid" >');
				$("#canvas-div").html("");
				  showQuestions();

	   });
	   
	
	$("#refer").click(function() { 

	var refer = '';
	refer += ''
	+ '<h3> Configuration</h3>'
	+ '<ol><li> Selected  pipe size is '+pipeSize+''
	+ '<li> Selected fluid type is '+fluidType+' '
	+ '<li>Selected float material is '+floatMaterial+' </ol>';
	
	$(".modal-body12").html('');
	$(".modal-body12").html(refer);
	
	
	});
	    
	   
//	     $("#nextSubmit").click(function(){
////		   alert("ghh");
//			 
//		 
//		  $("#main-div-conf").html("");
//		  $("#main-div-conf").html('<img src="images/rotameter.jpeg"  width="90%" height="80%">');
//		
//		  
//		  $("#canvas-div").html("");
//		  showQuestions();
//		  
//		   
//	   });