const headers = require('./headers.js');

const businessUrl = 'https://api.yelp.com/v3/businesses/search';

const params = {
  term: 'restaurant', // You can adjust this term based on your search criteria
  location: '37203',
  radius: 16093,
  limit: 10,
};

const fetchBusinessData = async () => {
  const queryString = new URLSearchParams(params).toString();
  const fullBusinessUrl = `${businessUrl}?${queryString}`;

  try {
    const response = await fetch(fullBusinessUrl, {
      method: 'GET',
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`${data.code} ${data.error}`);
    }

    const data = await response.json();

    // Parse and use the data as needed
    const businessData = data.businesses.map((business) => {
      return { id: business.id, name: business.name, rating: business.rating };
    });

    return businessData;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

module.exports = fetchBusinessData;
