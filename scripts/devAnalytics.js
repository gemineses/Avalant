tmpDevAnalyticsMessage = "";
tmpResult = 0;

function devAvgRePaintingMapPerSecond(){
	setTimeout(function(){
		console.log("Hello");
	}, 1000);
}
function devAvgRePaintingPlayersPerSecond(){
	setTimeout(function(){
		console.log("Hello");
	}, 1000);
}

function devAvgCleanCanvasPerSecond(){
	DEVcleanTime = updateGameAreaLap;
	tmpResult = DEVcleanTime;
	tmpDevAnalyticsMessage = "DEV-Analytic-services::Clean Canvas Average" + "\nStarted at - " + tmpResult+ " - " + " at " + new Date().toLocaleString()
	setTimeout(function(){
		DEVcleanTime = updateGameAreaLap;
		tmpResult = DEVcleanTime - tmpResult;
		tmpDevAnalyticsMessage += "\n Ended at " + DEVcleanTime + " at " + new Date().toLocaleString()
		+ "\n Total: " + tmpResult;
		console.log(tmpDevAnalyticsMessage);
	}, 1000);
}