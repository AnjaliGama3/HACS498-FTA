const axios = require('axios');

const apikey =process.env.APIKEY
#parameter would include hash string
exports.handler =  async function(event, context) {
  const { hash } = event.hash 
  const url = "www.hybrid-analysis.com/api/v2/overview/" + hash

  const result = axios.get(url, {
    headers: {
      'api-key': apikey
    }
  });

  console.log("EVENT: \n" + JSON.stringify(event, null, 2))
  return context.logStreamName
}