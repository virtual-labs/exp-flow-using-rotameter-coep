
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
var htm='<div class="row" >'
		+'<div class="col-sm-6">'
	   +'<label for="weight">Select Pipe Size (mm) </label>'
	   +'</div>'
		   
	   +'<div class="col-sm-6" >'
	   +'<select  class="form-control form-control-lg bg-info selectStyle"  id="pipeSize" >'
	   +'<option value="0">--- Select Pipe Size --- </option>'
//	   +'<option value="15">15</option>'
//	   +'<option value="25">25</option>'
	   +'<option value="40">40</option>'
	   +'<option value="50">50</option>'
//	   +'<option value="40">40</option>'
//	   +'<option value="50">50</option>'
//	   +'<option value="60">60</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	  +'<br>'
	   
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label for="meter">Select Fluid Type (Service)</label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control form-control-lg bg-info selectStyle"  id="fluidType">'
	   +'<option value="0">--- Select meter --- </option>'
//	   +'<option value="1" >Water  </option>'
	   +'<option value="2">Air</option>'
	  
	  
	   +'</select>'
	   +'</div>'
	   +'</div>'
	    +'<br>'
	   
//	   +'<div class="row"  >'
//	   +'<div class="col-sm-6">'
//	   +'<label for="cylinderPiston">Select cylinder Piston</label>'
//	   +'</div>'
//	   +'<div class="col-sm-6">'
//	   +'<select  class="form-control form-control-lg bg-info selectStyle"  id="cylinderPiston">'
//	   +'<option value="0">--- Select cylinder Piston --- </option>'
//	   +'<option value="1" >3 MM </option>'
//	   +'<option value="2">5 MM</option>'
//	   +'<option value="3">7 MM</option>'
//	   +'</select>'
//	   +'</div>'
//	   +'</div>'
	   +'<button type="button" class="btn btn-success btnStyle" id="checkConfg">CHECK CONFIGURATION </button>'
	   $("#main-div-conf").html(htm);
	  
	   $("#checkConfg").click(function(){
//		   alert("ghh");
		   pipeSize=$("#pipeSize").val();
		   fluidType=$("#fluidType").val();
//		   cylinderPiston=$("#cylinderPiston").val();
//		   $("#sub-main-div").html("weight    "+weight);
//		   $("#sub-main-div").append("  meter  "+meter);
//		   $("#sub-main-div").append("  cylinderPiston  "+cylinderPiston);
		   console.log("main pipeSize    "+pipeSize);
		   console.log("main fluidType    "+fluidType);
		  // console.log("cylinderPiston    "+cylinderPiston);
		  $("#main-div-conf").html("");
		  $("#canvas-div").html("");
		    mimic(pipeSize,fluidType);
	   });