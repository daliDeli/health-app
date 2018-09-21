import Patient from './Patient';
import Doctor from './Doctor';

const listOfDoctors = [];
const listOfTreatment = ['Merenje nivoa secera u krvi','Merenje krvnog pritiska'];

window.createPatient = function (){
    
    const patientName = document.getElementById('patient-name').value;
    const patientChartID = document.getElementById('patient-chart-id').value;
    const patientJMBG = document.getElementById('patient-jmbg').value;
    
    const patient = new Patient(patientName, patientChartID, patientJMBG);
    
    let divNode = document.createElement('div');
    divNode.setAttribute('id', 'patient-info');
    
    let p1Node = document.createElement('p');
    p1Node.innerHTML = `Patient Name: ${patient.name}`;
    divNode.appendChild(p1Node);
    
    let p2Node = document.createElement('p');
    p2Node.innerHTML = `Patient Chart ID: ${patient.chartID}`;
    divNode.appendChild(p2Node);

    let p3Node = document.createElement('p');
    p3Node.innerHTML = `Patient JMBG: ${patient.JMBG}`;
    divNode.appendChild(p3Node);

    let selectNode = document.createElement('select');
    selectNode.setAttribute('id', `selected-doctor-${patient.name}`);
    for(let i = 0; i < listOfDoctors.length; i++){
        let optionNode = document.createElement('option');
        optionNode.innerHTML = listOfDoctors[i].name;
        optionNode.setAttribute('value', listOfDoctors[i].name)
        selectNode.appendChild(optionNode);
    }
    divNode.appendChild(selectNode);

    let buttonNode = document.createElement('button');
    buttonNode.setAttribute('onclick', 'chooseDoctor(event)');
    buttonNode.setAttribute('data-name', patient.name);
    buttonNode.innerHTML = 'Choose';
    if(!listOfDoctors.length) {
        buttonNode.setAttribute('disabled', '');
    };

    divNode.appendChild(buttonNode);

    document.getElementById('patient-list').appendChild(divNode);
};

window.createDoctor = function(){

    let doctorName = document.getElementById('doctor-name').value;
    let doctorSpeciality = document.getElementById('doctor-speciality').value;

    const doctor = new Doctor(doctorName, doctorSpeciality);

    listOfDoctors.push(doctor);

    let divNode = document.createElement('div');
    divNode.setAttribute('id', doctorName.replace(/ /g,''));

    let p1Node = document.createElement('p');
    let p2Node = document.createElement('p');
    let p3Node = document.createElement('p'); 

    p1Node.innerHTML = `Doctor Name: ${doctor.name}`;
    p3Node.innerHTML = `Doctor Speciality: ${doctor.speciality}`;

    divNode.appendChild(p1Node);
    divNode.appendChild(p2Node);
    divNode.appendChild(p3Node);

    document.getElementById('doctor-list').appendChild(divNode);
}; 

window.chooseDoctor = function (e){

    let selectedDoctor = document.getElementById(`selected-doctor-${e.target.dataset.name}`).value;
    console.log('izabrani doktor',selectedDoctor);

    let patientChartDiv = document.createElement('div');
    patientChartDiv.setAttribute('id',`patient-chart-${e.target.dataset.name}`);
    let divNode = document.getElementById(selectedDoctor.replace(/ /g,''))
    divNode.appendChild(patientChartDiv);
    
    let p1Node = document.createElement('p');
    p1Node.innerHTML = `Patient: ${e.target.dataset.name}`;
    
    let selectNode = document.createElement('select');
    selectNode.setAttribute('id', 'booked-treatment');

    let option1Node = document.createElement('option');
    option1Node.innerHTML = listOfTreatment[0];

    let option2Node = document.createElement('option');
    option2Node.innerHTML = listOfTreatment[1];
    
    selectNode.appendChild(option1Node);
    selectNode.appendChild(option2Node);

    patientChartDiv.appendChild(p1Node);
    patientChartDiv.appendChild(selectNode);
    console.log('izabrani div',patientChartDiv);

    let buttonNode = document.createElement('button');
    buttonNode.setAttribute('onclick', 'treatmentResults()');
    // buttonNode.setAttribute('data-name', patient.name);
    buttonNode.innerHTML = 'Choose';



};

window.treatmentResults = function(){
    console.log('Merenje secera rezultat')
}
