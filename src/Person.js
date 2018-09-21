export default class Person {
    constructor(name){
        this.name = name;
    }
    uniqueID(){
        return new Date().getTime();
    }
}