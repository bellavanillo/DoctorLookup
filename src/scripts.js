class medApi {
  apiCall() {
    return new Promise(function(resolve, reject) {
      let url = `https://developer.betterdoctor.com/admin/applications/1409617688777api_key=${process.env.exports.apiKey}`;
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
