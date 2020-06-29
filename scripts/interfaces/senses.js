const senseTypes = {
    0 : 'vision',
    1 : 'audio'
};

class Cone {
    #id =  '';
    #frequencyDistance = 0;
    #direction = 0;
    #expansion = 0;
    #color = '';
    #isObjectReady = false;
    
    constructor(Id, FrequencyDistance, Direction, Expansion, Color){
        this.#id = Id,
        this.#frequencyDistance = FrequencyDistance,
        this.#direction = Direction,
        this.#expansion = Expansion,
        this.#color = Color
    }
    
    generateObject = function(){

    }

    validateObjectReadyToBePrinted = function(){
        if(this.id <= 0) this.#isObjectReady = false;
        this.#isObjectReady = true;
    }

    draw = function(){
        if(this.#isObjectReady){
            
        }
        return false;
    }

    printTest = function(){
        if(this.#isObjectReady){
            console.log('esta desplegando el cono');
        }
        
    }
}
