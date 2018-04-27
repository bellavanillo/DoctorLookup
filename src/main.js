import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { medApi } from './scripts.js';

$(document).ready(function() {
  $('#button').click(function(event) {
    event.preventDefault();
    let medCall = new medApi();
    let promise = medCall.apiCall();

    promise.then(function(response) {
      let body = JSON.parse(response);
      let bodyArray =body.data;
      let i;
      for (i = 0, i < bodyArray.length; i++) {
        let name = body.data[0].practices[0].name;
        let newPatient = body.data[0].practices[0].accepts_new_patients;
        let number = body.data[0].practices[0].phones[0].number;
      }

      $('#results').append(`Name: ${name}', number: ${number}, is accepting new patients: ${newPatient}. `);


    }, function(error) {
      $('#errorText').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
