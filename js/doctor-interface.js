var Doctor = require('./../js/doctor.js').doctorModule;

var results = function(names, numbers, addresses, cities, states) {
  $('#doctor-list').empty();
  for(i=0;i<names.length;i++){
    $('#doctor-list').append("<div class='doctor-results' id='doctor"+i+"'><ul id='doctor-list'><li>Name: " + names[i] + "</li><li>Number: " + numbers[i] + "</li><li>Address: " + addresses[i] +", " + cities[i] + ", " + states[i] + "</li></ul></div><br>");
  }
};




$(document).ready(function(){
  var doctor = new Doctor();
  $('#search').submit(function(event){
    event.preventDefault();
    var medicalIssue = $('#medicalIssue').val();
    doctor.lookup(medicalIssue, results);
  });
});
