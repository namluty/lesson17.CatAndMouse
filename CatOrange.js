class CatOrange {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }
    makeSound (text){
        alert(this.name + " " + text);
    }
    catchMouse (mouse){
        if (this.speed > mouse.speed){
            alert(this.name + "Mình xinnnnnn ^^ " + mouse.name);
        }
    }
    eatMouse(mouse){
        if (mouse.status){
            this.weight += mouse.weight;
            mouse.status = false;
            alert(this.name + "Mlem mlemmmmmm @@" + mouse.name);
        }
    }
}