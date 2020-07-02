/*CORE VARIABLES, DONTTTTT TOUCH!!*/
var players = new Array(CharactersI);
players[0] = new CharactersI(0, 'Jss');
players[0].generateObject(100, 100);
players[1] = new CharactersI(1, 'IA');
players[1].generateObject(150, 120);

var environmentSolids = {
	/*
		Rocks sizes -> small 1unit 
	*/
	rocks: [
		{}
	]
}

var environmentWeather = {
	active : 0,
	types : {
		0: "sunshine",
		1: "miss"
	}
}