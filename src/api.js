class medApi {
  apiCall() {
    return new Promise(function(resolve, reject) {
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&user_key=${process.env.apiKey}`; 
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
