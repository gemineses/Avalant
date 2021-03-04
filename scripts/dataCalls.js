$(document).ready(function(){
	var setupControllerCall = function(){
		$.ajax({
			url: "https://localhost:44378/setup", 
			crossDomain : true,
			type: "get",
			success: function(result){
				if(result.responseType == 1){
					let obj = result.responseObject;
					groundsType = obj.groundTypes;

					setTimeout(function(){
						startGame();
					}, 1000);
				}
			}
		});	
	}

	setupControllerCall();
});