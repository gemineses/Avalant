/*  Engine to create the Game Area */

/*
	Background: Contains map textures, not selectible elements, static elements
	UI: All selectible elements, items and options, chatbox
	Game: All actions and effects views, secondary elements, not selectibles, players actions
*/

gameArea = {
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
}

/*STARTING LOADING ALL PRESETS AT THE FIRST TIME, try to create everything here to get a better perfomance and not generating variables in time of execute*/
function loadContent(){
	//TODO LOADBAR
	gameArea.canvasBackgroundContext = gameArea.canvasBackgroundElement.getContext("2d");
	gameArea.canvasUIContext = gameArea.canvasUIElement.getContext("2d");
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
	hardMove(MAPPROCEDURE.checkpoint.x, MAPPROCEDURE.checkpoint.y);
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
	gameArea.clear.ui();
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
		for(var indexMap = 0; indexMap < MAPPROCEDURE.map.length; indexMap++){
			if(!isPatternsCreated)PATTERNS.push(ctx.createPattern(document.getElementById("img"+MAPPROCEDURE.map[indexMap].ground.name), "repeat"));
			//ctx.fillStyle = MAPPROCEDURE.map[indexMap].ground.color;
			ctx.fillStyle = PATTERNS[indexMap];
			ctx.rect(
				MAPPROCEDURE.map[indexMap].x[0],
				MAPPROCEDURE.map[indexMap].y[0],
				MAPPROCEDURE.map[indexMap].x[1],
				MAPPROCEDURE.map[indexMap].y[1]
			);
			ctx.fill();
		}
		isRequiredPaintMap = false;
		isPatternsCreated = true;
	}
}

function printCharacters(){
	if(isRequiredPaintCharacter){
		gameArea.clear.game();
		ctx = gameArea.canvasGameContext;
		ctx.fillStyle = "black";
		ctx.font = fontSizeCharacters + "px Arial";
		for(var i = 0; i < charactersList.length; i++){
			ctx.fillText("0", charactersList[i].x, charactersList[i].y);
			ctx.fillText(charactersList[i].name, 
				(charactersList[i].x - (fontSizeCharacters/2)),
				(charactersList[i].y - fontSizeCharacters));
		}	
	}
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
	moveCharacters();
	printCharacters();
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
