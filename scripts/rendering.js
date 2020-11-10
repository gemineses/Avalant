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
		
		let playerPostionX = Math.floor(player.GetPositionX());
		let playerPostionY = Math.floor(player.GetPositionY());
		let mousePositionX = Math.floor(mousePosition.x);
		let mousePositionY = Math.floor(mousePosition.y);

		let distanceX = playerPostionX - mousePositionX;
		let distanceY = playerPostionY - mousePositionY;

		if( distanceX < 0) distanceX = distanceX * -1;
		if( distanceY < 0) distanceY = distanceY * -1;

		if( distanceX < 2 && distanceY < 2){
			player.StopMove();
		}else{
			player.StartMove();
		}
		
		if(!player.IsMoving()) return 0;
		tmpSpeed = player.GetSpeed(MAPPROCEDURE);

		if(distanceX > 1){
			if(player.GetPositionX() > mousePosition.x){
				movingTo.x = move(player.GetPositionX(), -1, tmpSpeed)
			} else{
				movingTo.x = move(player.GetPositionX(), 1, tmpSpeed)
			}
		}

		
		if(distanceY > 1){
			if(player.GetPositionY() > mousePosition.y){
				movingTo.y = move(player.GetPositionY(), -1, tmpSpeed)
			} else{
				movingTo.y = move(player.GetPositionY(), 1, tmpSpeed)
			}
		}

		player.generateObject(movingTo.x, movingTo.y);
	});
}

function move(caracter, upDown, speed){
	return caracter + (speed * upDown)
}

