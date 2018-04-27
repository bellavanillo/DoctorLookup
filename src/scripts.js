class medApi {
  apiCall() {
    return new Promise(function(resolve, reject) {
      let url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=97201&user_location=97201&skip=0&limit=10&user_key=b9cb7d0f19a88f5b697c88a77292e15c';
      let request = new XMLHttpRequest();

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
 export { medApi };
