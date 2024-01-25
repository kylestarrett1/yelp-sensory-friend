require('dotenv').config({ path: './config/dev.env' });
const apiKey = process.env.YELP_API_KEY;

const businessUrl = 'https://api.yelp.com/v3/businesses/search';

const params = {
  term: 'restaurant', // You can adjust this term based on your search criteria
  location: '37203', // Replace with the desired location
  radius: 16093,
  limit: 10,
};

const headers = new Headers({
  Authorization: `Bearer ${apiKey}`,
  Accept: 'application/json',
});

const fetchBusinessData = async () => {
  const queryString = new URLSearchParams(params).toString();
  const fullBusinessUrl = `${businessUrl}?${queryString}`;

  const businessIDs = [];

  try {
    const response = await fetch(fullBusinessUrl, {
      method: 'GET',
      headers: headers,
    });

    const data = await response.json();

    // Parse and use the data as needed
    data.businesses.forEach((business) => {
      //   console.log(
      //     `ID: ${business.id}, Name: ${business.name}, Rating: ${business.rating}, Location: ${business.location.address1}`
      //   );

      businessIDs.push(business.id);
    });

    return businessIDs;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Call the async function
fetchBusinessData();

// const reviewsUrl = `https://api.yelp.com/v3/businesses/${businessIDs}/reviews?limit=2&sort_by=yelp_sort`;

// const fetchReviewData = async () => {
//   try {
//     const response = await fetch(reviewsUrl, {
//       method: 'GET',
//       headers: headers,
//     });
//     const data = await response.json();

//     // Parse and use the data as needed
//     // data.reviews.forEach((review) => {
//     //   console.log(review.text);
//     // });
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// // Call the async function
// fetchReviewData();
