import Person from './Person';

export default class Doctor extends Person{
    constructor(name,speciality){
        super(name);
        this.speciality = speciality;
    }
    
}