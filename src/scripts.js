class medApi {
  apiCall() {
    return new Promise(function(resolve, reject) {
      let url = `https://developer.betterdoctor.com/admin/applications/1409617688777api_key=${process.env.exports.apiKey}`;

    });
  }
}
 export { medApi };
