/*  Engine to create the Game Area */

/*
	Background: Contains map textures, not selectible elements, static elements
	UI: All selectible elements, items and options, chatbox
	Game: All actions and effects views, secondary elements, not selectibles, players actions
*/

gameArea = {
	canvasMouseEventsElement: document.getElementById("mouse-layer"),
    canvasBackgroundElement : document.getElementById("background-layer"),
	canvasUIElement : document.getElementById("ui-layer"),
	canvasGameElement : document.getElementById("game-layer"),

	width : gameAreaSetWidth,
	height: gameAreaSetHeight,
    start : function() {
		setScreenResolution();
		/*START Frame per second methods*/
		loadContent();
		repeatOften();
    },
	update : function(){
		paintBackground();
		paintUI();
		paintGame();
    }
}
function setScreenResolution(){
	w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	gameArea.width = w
	gameArea.height = h
	gameArea.canvasBackgroundElement.width = gameArea.width;
	gameArea.canvasBackgroundElement.height = gameArea.height;
	gameArea.canvasUIElement.width = gameArea.width;
	gameArea.canvasUIElement.height = gameArea.height;
	gameArea.canvasGameElement.width = gameArea.width;
	gameArea.canvasGameElement.height = gameArea.height;
	gameArea.canvasMouseEventsElement.width = gameArea.width;
	gameArea.canvasMouseEventsElement.height = gameArea.height;
}

/*STARTING LOADING ALL PRESETS AT THE FIRST TIME, try to create everything here to get a better perfomance and not generating variables in time of execute*/
function loadContent(){
	//TODO LOADBAR
	gameArea.canvasBackgroundContext = gameArea.canvasBackgroundElement.getContext("2d");
	gameArea.canvasUIContext = gameArea.canvasUIElement.getContext("2d");
	gameArea.canvasMouseContext = gameArea.canvasMouseEventsElement.getContext("2d");
	gameArea.canvasGameContext = gameArea.canvasGameElement.getContext("2d");
	gameArea.clear = {};
	gameArea.clear.bg = function(){
		gameArea.canvasBackgroundContext.clearRect(0, 0, gameArea.width, gameArea.height);
	}
	gameArea.clear.ui = function(){
		gameArea.canvasUIContext.clearRect(0, 0, gameArea.width, gameArea.height);
	}
	gameArea.clear.game = function(){
		gameArea.canvasGameContext.clearRect(0, 0, gameArea.width, gameArea.height);
	}
	gameArea.clear.mouse = function(){
		gameArea.canvasMouseContext.clearRect(0, 0, gameArea.width, gameArea.height);
	}
	//hardMove(MAPPROCEDURE.checkPoint.x, MAPPROCEDURE.checkPoint.y);
}

/*Eternal Looping 3:)*/
function repeatOften() {
	updateGameArea();
	currentInterval++;
	globalID = requestAnimationFrame(repeatOften);
}

var updateGameAreaLap = 0;
function updateGameArea() {
	updateGameAreaLap++;
	//console.log("updating");
    gameArea.update();
}


/*  END Engine to create the Game Area */

/*
-------------------------------------	All display messages methods
*/
function addWritingMessage(tmpMsg){
	//gameArea.clear.ui();
	ctx = gameArea.canvasUIContext;
	ctx.fillStyle = "black";
	ctx.font = fontSizeMessages+"px Arial";
	ctx.fillText(tmpMsg, 20, 120+(index*10));
	
}

function addMessage(msg){
	tmpMsg = []
	if(msg.length>messagesLengt){
		tmpMsg.push(msg.substring(0,messagesLengt-1))
		tmpMsg.push('\t'+msg.substring(messagesLengt-1))
	}
	for(index = 0; index<tmpMsg.length; index++){
		if(currentMessages.msgList.length==5)currentMessages.msgList.shift();
		currentMessages.msgList.push(tmpMsg[index]);
	}
	
	currentMessages.timer = currentInterval;
}

function paintMessages(){
	if(isRequiredPaintText){
		ctx = gameArea.canvasUIContext;
		ctx.fillStyle = "black";
		ctx.font = fontSizeMessages+"px Arial";
		
		for(var index = 0; index<currentMessages.msgList.length; index++){
			ctx.fillText(currentMessages.msgList[index], 10, 20+(index*10));
		}
		isRequiredPaintText	= false;
	}
}


/*
-------------------------------------	End All display messages methods
*/


/* Print Map */
function paintMap(){
	if(isRequiredPaintMap){
		gameArea.clear.bg();
		ctx = gameArea.canvasBackgroundContext;
		ctx.font = fontSizeMap + "px Arial";
		for(var indexMapX = 0; indexMapX < MAPPROCEDURE.map.length; indexMapX++){
			for(var indexMapY = 0; indexMapY < MAPPROCEDURE.map[0].length; indexMapY++){
				let x1 = indexMapX * fontSizeCharacters;
				let y1 = indexMapY * fontSizeCharacters;
				ctx.fillStyle = MAPPROCEDURE.map[indexMapX][indexMapY].groundType.color;
				ctx.fillRect(x1, y1, fontSizeCharacters, fontSizeCharacters);
			}
		}
		isRequiredPaintMap = false;
	}
}

function display_PaintMouseOver(x, y, groundType){
	gameArea.clear.mouse();
	let ctx = gameArea.canvasMouseContext;
	ctx.beginPath();
	ctx.lineWidth = "1";
	ctx.strokeStyle = "#000";
	ctx.rect(x*10, y*10, 10, 10);
	ctx.stroke();

}

function printCharacters(canvasContext){
	charactersList.forEach(function(player){
		drawPlayer(player, canvasContext);
	});
}

drawPlayer = function(player, ctx){
	ctx = gameArea.canvasGameContext;
	
	ctx.beginPath();
	ctx.arc(player.x, player.y,5,0,2*Math.PI);
	ctx.closePath();
	ctx.fillStyle = "#F0EDCC";
	ctx.fill();
	ctx.stroke();
	
	ctx.fillStyle = "black";
	ctx.font = 12 + "px Arial";
	ctx.fillText(player.name, 
		(player.x - 12/2),
		(player.y - 12));
	
	//renderVision(ctx, player.x, player.y, player.visionRadarLength, player.isPlayable);
	
	return false;
}

renderVision = function(ctx, positionX, positionY, visionRadarLength, isPlayable){
	if(isPlayable){
		ctx.fillStyle = 'rgba(20,20,20,0.3)';
	}else{
		ctx.fillStyle = 'rgba(20,20,20,0.5)';
	}
	ctx.beginPath();

	let position = UTIL_getDistanceByDegree(
		UTIL_getDegreeFromPoints(positionX, positionY, mousePosition.x, mousePosition.y),
		 positionX, positionY, visionRadarLength);
	
	
	ctx.lineTo(position.originalPosition.x, position.originalPosition.y);
	ctx.lineTo(position.leftView.x, position.leftView.y);
	ctx.lineTo(position.focusView.x, position.focusView.y);
	ctx.lineTo(position.rightView.x, position.rightView.y);
	ctx.closePath();
	
	ctx.stroke();
	ctx.fillStyle = 'rgba(20,20,20,0.1)';
	ctx.fill();
}

/* End of print Map */

/*
------------------------------------	Reloaded all Visual Content in each interval
	Background: 
		Contains map textures, not selectible elements, static elements, chat box
	UI: 
		All selectible elements, items and options
	Game: 
		All actions and effects views, secondary elements, not selectibles, players actions
*/


function paintBackground(){
	paintMap();
	paintMessages();
}
function paintUI(){
	
}
function paintGame(){
	//moveCharacters();
	gameArea.clear.game();
	printCharacters(gameArea.canvasGameContext);
}


function freeMemory(){
	//free message spam
	if(currentMessages.timer < currentInterval + messagesLongTime){
		currentMessages.msgList.shift();
		currentMessages.msgList.push("");
	}
}


/*
------------------------------------	Reloaded all Visual Content in each interval
*/
