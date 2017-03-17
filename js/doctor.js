var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.lookup = function(medicalIssue, results) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
    .then(function(response) {
      console.log(response);
      var doctors = [];
      var length = response.data.length;
      console.log(length);
      for(i=0;i<response.data.length;i++){
       var name = response.data[i].practices[0].name;
       var number = response.data[i].practices[0].phones[0].number;
       var address = response.data[i].practices[0].visit_address.street;
       var city = response.data[i].practices[0].visit_address.city;
       var state = response.data[i].practices[0].visit_address.state;
       doctors.push(name, number, address, city, state);
      }
      console.log(doctors);
    })
    .fail(function(error){
      console.log("fail");
    });

  };


exports.doctorModule = Doctor;
