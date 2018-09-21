import Patient from './Patient';

let listOfPatients = [];


const createPatient=()=>{
    let patientName = document.getElementById('patient-name');
    let patientChartID = document.getElementById('patient-chart-id');
    let patientJMBG = document.getElementById('patient-jmbg');
    
    listOfPatients.push({
        name : patientName.value,
        chartID : patientChartID.value,
        JMBG : patientJMBG.value,
        });
        
    // patientName.innerHTML = '';
    // patientChartID.innerHTML = '';
    // patientJMBG.innerHTML = '';
    console.log(listOfPatients);

    listOfPatients.map(patient =>{
        
        var divNode = document.createElement('div');
        divNode.setAttribute('class', 'patient-info')

        var p1Node = document.createElement('p')
        var p2Node = document.createElement('p')
        var p3Node = document.createElement('p')

        p1Node.innerHTML = `Patient Name: ${patient.name}`;
        p2Node.innerHTML = `Patient Chart ID: ${patient.chartID}`;
        p3Node.innerHTML = `Patient JMBG${patient.JMBG}`;

        divNode.appendChild(p1Node)
        divNode.appendChild(p2Node)
        divNode.appendChild(p3Node)

        document.getElementById('patient-list').appendChild(divNode);
    })
    listOfPatients.pop();
};