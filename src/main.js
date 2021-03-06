import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { medApi } from './api.js';
import { Doctor } from './doctor.js';


$(document).ready(function() {
  $('#button').click(function(event) {
    event.preventDefault();
    let medCall = new medApi();
    let promise = medCall.apiCall();

    promise.then(function(response) {
      let body = JSON.parse(response);
      let bodyArray = body.data;
      let name = body.data[0].practices[0].name;
      let newPatient = body.data[0].practices[0].accepts_new_patients;
      let street = body.data[0].practices[0].visit_address.street;
      let zip = body.data[0].practices[0].visit_address.zip;
      let number = body.data[0].practices[0].phones[0].number;
      $('#results').append(`Name: ${name}, Phone number: ${number}, Is accepting new patients: ${newPatient}, Address: ${street}, ${zip}. `);
    }, function(error) {
      $('#errorText').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
