/*CORE VARIABLES, DONTTTTT TOUCH!!*/
var mousePosition = {x: 0, y:0}
var moving = {x: false, y: false}
var charactersList = [];

function setCharacters(){
	for(characterIndex = 0; characterIndex < players.length; characterIndex++){
		charactersList.push({
			x : players[characterIndex].GetPositionX(),
			y : players[characterIndex].GetPositionY(),
			name: players[characterIndex].GetName(),
			speed: players[characterIndex].GetSpeed()
			//cones: []
		});
	}
}

function hardMove(x, y){
	charactersList[0].x = x
	charactersList[0].y = y
	mousePosition.x = x
	mousePosition.y = y
	
}

function moveCharacters(){
	for(characterIndex = 0; characterIndex < 1; characterIndex++){
		if(charactersList[characterIndex].x == mousePosition.x && charactersList[characterIndex].y == mousePosition.y){
			isRequiredMoveCharacter = false;
		}
		tmpSpeed = charactersList[characterIndex].speed;
		if(charactersList[characterIndex].x > mousePosition.x){
			charactersList[characterIndex].x = move(charactersList[characterIndex].x, -1, tmpSpeed)
			moving.x = true;
		} else{
			charactersList[characterIndex].x = move(charactersList[characterIndex].x, 1, tmpSpeed)
			moving.x = true;
		}
		
		if(charactersList[characterIndex].y > mousePosition.y){
			charactersList[characterIndex].y = move(charactersList[characterIndex].y, -1, tmpSpeed)
			moving.y = true;
		} else{
			charactersList[characterIndex].y = move(charactersList[characterIndex].y, 1, tmpSpeed)
			moving.y = true;
		}
		
		if(charactersList[characterIndex].x == mousePosition.x){
			moving.x = false;
		}
		if(charactersList[characterIndex].y == mousePosition.y){
			moving.y = false;
		}
	}
}

function move(caracter, upDown, speed){
	return caracter + (speed * upDown)
}

