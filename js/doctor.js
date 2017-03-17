var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.lookup = function(medicalIssue, results) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(response) {
     console.log(response);
     var name = response.data[0].practices[0].name;
     console.log(name);
     var number = response.data[0].practices[0].phones[0].number;
     var address = response.data[0].practices[0].visit_address.street;
     var city = response.data[0].practices[0].visit_address.city;
     var state = response.data[0].practices[0].visit_address.state;
    })
   .fail(function(error){
      console.log("fail");
    });

};


exports.doctorModule = Doctor;
