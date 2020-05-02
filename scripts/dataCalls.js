$(document).ready(function(){
	var dataCalls = function(){
		$.ajax({
			url: "https://resttesttest.com/", 
			success: function(result){
				quests.loaded = result;
			}
		});	
	}
	dataCalls();
});