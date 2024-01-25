const fetchBusinessData = require('./yelp-endpoints/businessData.js');
const fetchReviewData = require('./yelp-endpoints/reviewData.js');

(async () => {
  const businesses = await fetchBusinessData();

  // Fetch reviews for all businesses
  await Promise.all(businesses.map(fetchReviewData));
})();
