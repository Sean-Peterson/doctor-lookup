var Doctor = require('./../js/doctor.js').doctorModule;

var results = function(names, numbers, addresses, cities, states) {
  console.log(names);

  for(i=0;i<names.length;i++){
    $('#doctor-list').append("<div class='doctor"+i+"'><ul><li>Name: " + names[i] + "</li><li>Number: " + numbers[i] + "</li><li>Address: " + addresses[i] +", " + cities[i] + ", " + states[i] + "</li>             </ul></div>")
    console.log('balls');
  };
};




$(document).ready(function(){
  var doctor = new Doctor();
  var medicalIssue = 'stomach ache';
  doctor.lookup(medicalIssue, results);
});
