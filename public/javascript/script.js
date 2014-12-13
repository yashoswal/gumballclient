function process(operation){
	var action ="";
	if(operation == 'insertQuarter'){
		action = "PUT";
	}else{
		action = "POST";
	}
	
	var data = { "state":$("#state").val() ,
			 "model":$("#model").val(),
			 "serial":$("#serial").val(),
			 "hash":$("#hash").val()
		   };

	$.ajax({
		url: "/gumballmachine",
		type: action,
		async : true,
		data: data,
		success : commonCallback,
		error : function(jq,status,message) {
			alert('ERROR OCCURED.... Status: ' + status + ' - Message: ' + message);
		}
	});
}


function commonCallback(result){
	 if(result.status == 'error'){
		 $("#message").val(result.message);
	 }else{
		 console.log(result);
		 $("#state").val(result.state);
		 $("#model").val(result.model);
		 $("#serial").val(result.serial);
		 $("#hash").val(result.hash);
		 var msg= "    Gumball Machine Status: "+result.status + 
		 		  "\n    Gumball Machine State: " +result.state + 
		 		  "\n    Gumball Machine Model: " + result.model +
		 		  "\n    Gumball Machine Serial: " + result.serial;
		 $("#message").val(msg);
	 }
}

