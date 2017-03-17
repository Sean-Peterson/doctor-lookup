var Doctor = require('./../js/doctor.js').doctorModule;

var results = function(name, number, address, city, state) {

}




$(document).ready(function(){
  var doctor = new Doctor();
  var medicalIssue = 'stomach ache';
  doctor.lookup(medicalIssue);
});
