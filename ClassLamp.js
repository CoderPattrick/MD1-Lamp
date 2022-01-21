class Lamp{
    constructor(status) {
        this.status = status;
    }
    turnOnOff(){
        this.status = !this.status;
        if(this.status){
            alert("Light on");
        }
        else {
            alert("Light off");
        }
    }

}