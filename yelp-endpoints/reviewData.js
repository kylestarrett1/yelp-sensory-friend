const chalk = require('chalk');
const headers = require('./headers.js');

const fetchReviewData = async (business) => {
  const reviewsUrl = `https://api.yelp.com/v3/businesses/${business.id}/reviews?limit=1&sort_by=yelp_sort`;

  try {
    const response = await fetch(reviewsUrl, {
      method: 'GET',
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`${data.code} ${data.error}`);
    }

    const data = await response.json();

    // Parse and use the data as needed
    data.reviews.forEach((review) => {
      console.log(chalk.yellow(`Business: ${business.name}`));
      console.log(chalk.redBright('Review: '), chalk.whiteBright(review.text));
      console.log(
        chalk.greenBright('Rating: '),
        chalk.yellowBright(review.rating)
      );
      console.log();
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

module.exports = fetchReviewData;
