import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { medApi } from './api.js';


$(document).ready(function() {
  $('#button').click(function(event) {
    event.preventDefault();
    let medCall = new medApi();
    let promise = medCall.apiCall();

    promise.then(function(response) {
      let body = JSON.parse(response);
        if (body.data.length === 0) {
          $('#noresults').show();
        } else {
          for (let i = 0; i < body.data.length; i++) {
            $("#results1").append(`Name:${body.data[i].profile.first_name} ${body.data[i].profile.last_name}`);
            $("#results2").append(`Address:${body.data[i].practices[0].visit_address.street}, ${body.data[i].practices[0].visit_address.zip},`);
            $("#results3").append(` Number:${body.data[i].practices[0].phones[0].number}`);
            $("#results4").append(`Is currently accepting new patients: ${body.data[i].practices[0].accepts_new_patients}`);
            }
        }
      }, function(error) {
        $('#errorText').text(`There was an error processing your request: ${error.message}`);
      });
    });
  });
