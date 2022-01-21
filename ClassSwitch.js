class Switch{
    constructor(lamp) {
        this.lamp=lamp;
    }
    switchOnOff(){
        this.lamp.turnOnOff();
    }
    connectTo(lamp){
        this.lamp = lamp;
    }
}