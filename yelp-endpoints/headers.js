require('dotenv').config({ path: './config/dev.env' });
const apiKey = process.env.YELP_API_KEY;

const headers = new Headers({
  Authorization: `Bearer ${apiKey}`,
  Accept: 'application/json',
});

module.exports = headers;
