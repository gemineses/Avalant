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
	isRequiredPaintMap = true;
	isRequiredPaintCharacter = true;
	var rect = gameArea.canvasUIElement.getBoundingClientRect();
	mousePosition = {
		x : e.clientX - rect.left,
		y : e.clientY - rect.top
	}
}

/*QUEST ACTIONS*/
function startQuest(quest){
	for(index = 0; index<quest.actions.length; index++){
		doAction(quest.actions[index].typeAction, quest.actions[index].values);
	}
}

function doAction(typeAction, values){
	switch(typeAction){
		case "openChat":
			addMessage(values);
			isTyping = true;
		break;
	}
}

/*END QUEST ACTIONS*/