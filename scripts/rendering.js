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
	players.forEach(function(player){
		if(!player.GetIsPlayable()) return 0;
		
		let movingTo = {x: player.GetPositionX(), y: player.GetPositionY()};
		if(Math.floor(player.GetPositionX()) == Math.floor(mousePosition.x) 
			&& Math.floor(player.GetPositionY()) == Math.floor(mousePosition.y)){
			player.StopMove();
		}else{
			player.StartMove();
		}

		if(!player.IsMoving()) return 0;
		tmpSpeed = player.GetSpeed(MAPPROCEDURE);

		if(player.GetPositionX() > mousePosition.x){
			movingTo.x = move(player.GetPositionX(), -1, tmpSpeed)
		} else{
			movingTo.x = move(player.GetPositionX(), 1, tmpSpeed)
		}
		
		if(player.GetPositionY() > mousePosition.y){
			movingTo.y = move(player.GetPositionY(), -1, tmpSpeed)
		} else{
			movingTo.y = move(player.GetPositionY(), 1, tmpSpeed)
		}

		player.generateObject(movingTo.x, movingTo.y);
	});
}

function move(caracter, upDown, speed){
	return caracter + (speed * upDown)
}

