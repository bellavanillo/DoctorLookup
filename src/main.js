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
      $('.results').append(`${body.data[4].name}`);
    }, function(error) {
      $('#errorText').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
