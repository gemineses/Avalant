**Open Source game engine in javascript**

**Demo at [arkpublic](http://www.arkpublic.com/Game)**

File Directory:
- Avatar -> Index:
 	- Contains the canvas and the html squeme
- Doc
 	- Contains Documents to generate visual or code templates
- Script
 	- Actions: keys and mouse actions listeners
 	- Data Calls: functions to call web services
 	- Dev Analytics: functions to track basics about performance and functions 
 	- Display: functions to paint in the canvas
 	- Fx: a union between objects and display, all function to render all the attacks and cinematics effects like fire, water, earth, wind, magic, natural effects in the enviorement, etc...
 	- IaFunctions, artficial intelligence decitions functions to generate the ia results
 	- IaResults, artficial intelligence decitions results
 	- Localmap: functions to generate the background map
 	- Main: structure about what should be the secuence of commands executed in the game
 	- Objects: all the selectibles elements like players, vehicles, weapons, trigger objects, attacks
 	- Quests: goes with main.js file, here come the structure for an trigger event
 	- Rendering: function to generate movement(just logic, nothing visual)
 	- Setup: variables and constants that work in all the entire programming enviorement, like flags, fonts, screen sizes, etc.
- Style
 	- CSS
- Texture
 	- Ground
 	- Characters
	
PATCH:

3/1/18
- Created general checkpoint by map
- Normalized map procedure example
- Added Doc's folder
- Fixed canvas to center
- Fixed Patterns in background
	
2/1/18
- Added dynamic background
- Fixed performance issues
