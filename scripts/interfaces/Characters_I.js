class CharactersI {
    #id =  0;
    #name = '';
    #positionX = undefined;
    #positionY = undefined;
    #sprite = undefined;
    #status = 0;
    #speed = 1;
    #senses = new SensesI();
    #isObjectReady = false;
    #isPlayable = false;
    #isRequiredMoveCharacter = false;
    #visionRadarPosition = 90; // 360 degree
    #visionRadarSpace = 90; // 360 degree
    #visionRadarLenght = 50;

    constructor(ID, NAME){
        this.#id = ID;
        this.#name = NAME;
    }
    
    /* Getters & Setters */
    GetPositionX(){ if(this.validateObjectReadyToBePrinted) return this.#positionX; }
    GetPositionY(){ if(this.validateObjectReadyToBePrinted) return this.#positionY; }
    GetID(){ if(this.validateObjectReadyToBePrinted) return this.#id; }
    GetName(){ if(this.validateObjectReadyToBePrinted) return this.#name; }
    
    GetSpeed(map){ 
        if(this.validateObjectReadyToBePrinted){
            let groundSpeed = 1;
            if(map != undefined){
                let mapType = map.mapCompleted[Math.floor(this.#positionX/10)][Math.floor(this.#positionY/10)];
                groundSpeed = mapType.speedReduction;
            }
            return this.#speed * groundSpeed;
        } 
    }
    GetIsPlayable(){return this.#isPlayable;}
    /*  END Getters & Setters */

    generateObject = function(){
        this.#positionX = 0;
        this.#positionY = 0;
        this.#sprite = new SpriteI();
    }

    generateObject = function(X, Y){
        this.#positionX = X;
        this.#positionY = Y;
        this.#sprite = new SpriteI();
    }

    makePlayable(){
        this.#isPlayable = true;
    }

    validateObjectReadyToBePrinted = function(){
        if(this.#positionX === undefined) this.#isObjectReady = false;
        if(this.#positionX === undefined) this.#isObjectReady = false;
        if(this.#speed === undefined) this.#isObjectReady = false;
        //if(this.#sprite === undefined) this.#isObjectReady = false;
        this.#isObjectReady = true;
    }

    
    draw = function(ctx){
        this.validateObjectReadyToBePrinted();
        if(this.#isObjectReady){
            ctx = gameArea.canvasGameContext;
            
            
            ctx.beginPath();
            ctx.arc(this.#positionX, this.#positionY,5,0,2*Math.PI);
            ctx.closePath();
            ctx.fillStyle = "#F0EDCC";
            ctx.fill();
            ctx.stroke();
            
            ctx.fillStyle = "black";
            ctx.font = 12 + "px Arial";
            ctx.fillText(this.#name, 
                (this.#positionX - 12/2),
                (this.#positionY - 12));
            
            this.renderVision(ctx, this.#positionX, this.#positionY);
        }
        return false;
    }

    renderVision = function(ctx, positionX, positionY){
        ctx.beginPath();
        ctx.moveTo(positionX, positionY);
        let position = UTIL_getDistanceByDegree(this.#visionRadarPosition, positionX, positionY, this.#visionRadarLenght);
        ctx.lineTo(position.x, position.y);
        //ctx.lineTo(300, 300);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

    printTest = function(){
        if(this.#isObjectReady){
            console.log('PON CUALQUIER MENSAJE AQUI');
        }
    }

    StartMove = function(){ 
        this.#isRequiredMoveCharacter = true; 
    }
    StopMove = function(){ 
        this.#isRequiredMoveCharacter = false; 
    }
    IsMoving = function(){
        return this.#isRequiredMoveCharacter; 
    }


}

class SensesI{
    #typeSense = undefined;
    #viewRotacion = undefined;
    #viewLenght = undefined;
    //#viewZoom = new FuzzyI();
    //#excitementValue = 0; // evaluates the interest for him actual route
}