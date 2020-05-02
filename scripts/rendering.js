/*CORE VARIABLES, DONTTTTT TOUCH!!*/
var mousePosition = {x: 0, y:0}
var moving = {x: false, y: false}
var charactersList = [];

function setCharacters(){
	for(index = 0; index < players.me.length; index++){
		charactersList.push({
			x : players.me[index].x,
			y : players.me[index].y,
			name: players.me[index].name,
			speed: players.me[index].properties.speed
			
		});
	}
	for(index = 0; index < players.ia.length; index++){
		charactersList.push({
			x : players.ia[index].x,
			y : players.ia[index].y,
			name: players.ia[index].name,
			speed: players.ia[index].properties.speed
			
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
	for(index = 0; index < players.me.length; index++){
		if(charactersList[index].x == mousePosition.x && charactersList[index].y == mousePosition.y){
			isRequiredMoveCharacter = false;
		}
		tmpSpeed = charactersList[index].speed
		if(charactersList[index].x > mousePosition.x){
			charactersList[index].x = move(charactersList[index].x, -1, tmpSpeed)
			moving.x = true;
		} else{
			charactersList[index].x = move(charactersList[index].x, 1, tmpSpeed)
			moving.x = true;
		}
		
		if(charactersList[index].y > mousePosition.y){
			charactersList[index].y = move(charactersList[index].y, -1, tmpSpeed)
			moving.y = true;
		} else{
			charactersList[index].y = move(charactersList[index].y, 1, tmpSpeed)
			moving.y = true;
		}
		
		if(charactersList[index].x == mousePosition.x){
			moving.x = false;
		}
		if(charactersList[index].y == mousePosition.y){
			moving.y = false;
		}
	}
}

function move(caracter, upDown, speed){
	return caracter + (speed * upDown)
}