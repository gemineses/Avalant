/*CORE VARIABLES, DONTTTTT TOUCH!!*/
var isTyping = false;
var tmpText = "";
var disabledSpecialKeys = ["Control"]
/*General functions*/
window.addEventListener('keydown', handleKeyPress);
function handleKeyPress(e) { 
	//console.log(e.key)
	if(isTyping){
		if(e.key.toLowerCase()=="control"){
			
		}
		else if(e.key.toLowerCase()=="enter"){
			chat();
		} else if(e.key.toLowerCase()=="backspace"){
			tmpText = tmpText.substr(0, tmpText.length-1);
			addWritingMessage(tmpText + "(Press Enter)")
		} else{
			tmpText += e.key;
			addWritingMessage(tmpText + "(Press Enter)")
		}
	}else{
		switch(e.key.toLowerCase()){
			case "f":
				addMessage('praying respect');
			break;
			case "t":
				isTyping = true;
			break;
		}
	}
}

/* Open Chat Messanger */
function chat(){
	isTyping = false;
	addMessage(tmpText);
	tmpText = "";
}

/* Left click */
gameArea.canvasUIElement.addEventListener('click', function(e){
	e.preventDefault();
	uiBoxes_generateUIBoxes(e);
});

/* END Left click */

/*right click*/
document.addEventListener('contextmenu', function(e){e.preventDefault();});
gameArea.canvasUIElement.addEventListener('contextmenu', function(e){
	e.preventDefault();
	action_moveCharacter(e);
});
gameArea.canvasUIElement.addEventListener('touchstart', function(e){
	if (e.target == gameArea.canvasUIElement) {
		e.preventDefault();
		action_moveCharacter(e.touches[0]);
	}
});
gameArea.canvasUIElement.addEventListener('touchmove', function(e){
	if (e.target == gameArea.canvasUIElement) {
		e.preventDefault();
		action_moveCharacter(e.touches[0]);
	}
});

function action_moveCharacter(e){
	isRequiredPaintCharacter = true;
	
	mousePosition = UTIL_getMousePosition(e)
}

gameArea.canvasUIElement.addEventListener('mousemove', function(e){
	e.preventDefault();
	move_cursor(e);
})

function move_cursor(e){
	var rect = gameArea.canvasUIElement.getBoundingClientRect();
	let mousePosition = {
		x : (e.clientX - rect.left) / 10,
		y : (e.clientY - rect.top) / 10
	}

	if((Math.floor(mousePosition.x) < MAPPROCEDURE.map.length) 
		&& Math.floor(mousePosition.y) < MAPPROCEDURE.map[0].length) {
			display_PaintMouseOver(Math.floor(mousePosition.x), Math.floor(mousePosition.y), MAPPROCEDURE.map[Math.floor(mousePosition.x)][Math.floor(mousePosition.y)]);		
		}
}
