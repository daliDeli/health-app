import Person from './Person';

export default class Patient extends Person{
    constructor(name,chartID,JMBG){
        super(name);
        this.chartID = chartID;
        this.JMBG = JMBG;
    }
    getPatientResults(results){
        return(
            `Chart ID ${this.chartID} that belogs to patient ${this.name} had ${results}.`
        );
    }
}
//trebam da apendujem 
//paragraph sa imenom odgovarajucem doktoru,
//pa trebam dinamicko ime select elementa
//kako bi se dodavala vrednost pravom doktoru
//select-doctor-