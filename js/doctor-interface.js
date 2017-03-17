var Doctor = require('./../js/doctor.js').doctorModule;






$(document).ready(function(){
  var doctor = new Doctor();
  var medicalIssue = 'stomach ache';
  doctor.lookup(medicalIssue);
});
