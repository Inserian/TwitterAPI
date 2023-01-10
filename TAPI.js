const Twit = require('twit');

// Set up your API credentials
const T = new Twit({
  consumer_key: 'your_consumer_key',
  consumer_secret: 'your_consumer_secret',
  access_token: 'your_access_token',
  access_token_secret: 'your_access_token_secret',
});

// Send a tweet
const tweet = { status: 'Hello, World!' };
T.post('statuses/update', tweet, function(err, data, response) {
  console.log(data);
});
