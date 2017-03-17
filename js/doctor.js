var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.lookup = function(medicalIssue, results) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
    .then(function(response) {

      var names = [];
      var numbers = [];
      var addresses = [];
      var cities = [];
      var states = [];

      var length = response.data.length;
      for(i=0;i<response.data.length;i++){
       var name = response.data[i].practices[0].name;
       names.push(name);
       var number = response.data[i].practices[0].phones[0].number;
       numbers.push(number);
       var address = response.data[i].practices[0].visit_address.street;
       addresses.push(address);
       var city = response.data[i].practices[0].visit_address.city;
       cities.push(city);
       var state = response.data[i].practices[0].visit_address.state;
       states.push(state);
      }
      results(names, numbers, addresses, cities, states);
    })
    .fail(function(error){
      console.log("fail");
    });

  };


exports.doctorModule = Doctor;
