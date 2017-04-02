import ServerActions from './actions/ServerActions';

export default{
  getAllTweets(){
    $.getJSON('/api/v2/tweets', function(tweetModels) {
        var t = tweetModels
        ServerActions.recievedTweets(t)
    });
  },
  createTweet(body){
    $.ajax({
  	    url: '/api/v2/tweets',
  	    contentType: 'application/json',
  	    type: 'POST',
  	    data: JSON.stringify({
  		'username': "Saussiona55",
      'body': body,
  	    }),
  	    success: function() {
            rawTweet => ServerActions.recievedTweet({ tweetedby: "Saussiona55",body: tweet, timestamp: Date.now})
  	    },
  	    error: function() {
  		      return console.log("Failed");
        }
    });
  }
}
