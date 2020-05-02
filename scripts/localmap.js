/*Steps Units: with 1000 steps units require 16.6 minutes to cross all the map at 1 point of speed*/

var sizeMapX = gameAreaSetWidth/fontSizeMap; //how many grounds characters fit inside of x
var sizeMapY = (gameAreaSetHeight/fontSizeMap)*2;//how many grounds characters fit inside of y
var groundsType = [
	{
		name: "sand",
		color: "#ffecb3"
	},
	{
		name: "water",
		color: "#b3e6ff"
	},
	{
		name: "grass",
		color: "#009900"
	},
	{
		name: "default",
		color: "#FFF"
	},
	{
		name: "defaultblack",
		color: "#FFFF09"
	}
	]
	/*MAX 2000 px x 2000px*/
function generateMap(){
	MAPPROCEDURE = {
		dimensions: {
			x: 2000,
			y: 2000
		},
		checkpoint: {
			x: 200,
			y: 200,
		},
		map : [{
				ground: groundsType[3],
				x:[0, 500],
				y:[0, 1000]
			},{
				ground: groundsType[4],
				x:[500, 1000],
				y:[0, 1000]
			},{
				ground: groundsType[3],
				x:[1000, 1500],
				y:[0, 2000]
			},{
				ground: groundsType[4],
				x:[1500, 2000],
				y:[0, 2000]
			}
			,{
				ground: groundsType[3],
				x:[0, 500],
				y:[1000, 2000]
			}
			,{
				ground: groundsType[4],
				x:[500, 1000],
				y:[1000, 2000]
			}
		]
	};
	
	//Generating patterns
	for(var index = 0; index< MAPPROCEDURE.map.length; index++){
		tmpElement = document.createElement("img");
		tmpElement.setAttribute("src", "texture/"+MAPPROCEDURE.map[index].ground.name+".png");
		tmpElement.setAttribute("id", "img"+MAPPROCEDURE.map[index].ground.name);
		document.getElementById("images").appendChild(tmpElement);
		
	}
}