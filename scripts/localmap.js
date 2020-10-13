/*Steps Units: with 1000 steps units require 16.6 minutes to cross all the map at 1 point of speed*/

var sizeMapX = gameAreaSetWidth/fontSizeMap; //how many grounds characters fit inside of x
var sizeMapY = (gameAreaSetHeight/fontSizeMap)*2;//how many grounds characters fit inside of y
var groundsType = [
	{
		name: "sand",
		color: "#ffecb3",
		speedReduction: 0.5
	},
	{
		name: "water",
		color: "#b3e6ff",
		speedReduction: 0.3
	},
	{
		name: "grass",
		color: "#009900",
		speedReduction: 1
	},
	{
		name: "fire",
		color: "#F00",
		speedReduction: 0
	},
	{
		name: "rock",
		color: "#CCC",
		speedReduction: 0.7
	},
	{
		name: "space",
		color: "#000",
		speedReduction: 0
	}
	]
	/*MAX 2000 px x 2000px*/
function generateMap(){
	// TODO: CALL SERVICE
	MAPPROCEDURE = {
		//all mapping values had to be 10% of dimentions sizes
		mapCompleted: UTIL_generateArrays(50,50),
		checkpoint: {
			x: 20,
			y: 20,
		},
		map : [{
				ground: groundsType[5],
				x:[0, 50],
				y:[0, 50]
			},
			{
				ground: groundsType[1],
				x:[1, 49],
				y:[1, 49]
			},
			{
				ground: groundsType[0],
				x:[7, 43],
				y:[7, 43]
			},
			{
				ground: groundsType[2],
				x:[12, 38],
				y:[12, 38]
			},
			{
				ground: groundsType[4],
				x:[20, 30],
				y:[20, 30]
			},
			{
				ground: groundsType[3],
				x:[25, 28],
				y:[25, 28]
			}
		]
	};
	
	//Generating patterns
	
	for(let mapIndex = 0; mapIndex< MAPPROCEDURE.map.length; mapIndex++){
		let xStart = MAPPROCEDURE.map[mapIndex].x[0];
		let xEnd = MAPPROCEDURE.map[mapIndex].x[1];

		let yStart = MAPPROCEDURE.map[mapIndex].y[0];
		let yEnd = MAPPROCEDURE.map[mapIndex].y[1];

		for(let indexAxysX = xStart; indexAxysX < xEnd; indexAxysX++){
			for(let indexAxysY = yStart; indexAxysY < yEnd; indexAxysY++){
				MAPPROCEDURE.mapCompleted[indexAxysY][indexAxysX] = {
					groundsType : MAPPROCEDURE.map[mapIndex].ground.name,
					groundColor : MAPPROCEDURE.map[mapIndex].ground.color
				}
				
			}
		}
	}
}