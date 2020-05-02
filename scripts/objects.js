/*CORE VARIABLES, DONTTTTT TOUCH!!*/
var players = {
	me : [
		{
			name: 'jss',
			x: 100,
			y: 100,
			status:'',
			properties:{
				speed: 1, // TODO: Set speed based on movements per seconds instead of movements per frame	
			},
			senses: {
				viewPosition: 0, // 0 to 360, 0 right, 90 up, 180 left, 270 down
				viewZoom: {
					close: 10,
					near: 20,
					far: 50
				},
				excitementValue: 0 // evaluates the interest for him actual route
			}
			
		}
	],
	ia : [
		{
			name: 'ia',
			x: 150,
			y: 120,
			status:'',
			properties:{
				speed: 1	
			},
			senses: {
				viewPosition: 0, // 0 to 360, 0 right, 90 up, 180 left, 270 down
				viewZoom: {
					close: 10,
					near: 20,
					far: 50
				},
				excitementValue: 0 // evaluates the interest for him actual route
			}
		}
	]
}

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