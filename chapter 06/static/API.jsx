import SActions from './actions/SActions';

export default{
  getAllTweets(){
    console.log(2, "API get tweets");
    $.getJSON('/api/v2/tweets', function(tweetModels) {
        var t = tweetModels
        SActions.recievedTweets(t)
    });
  },
  addTweet(body){
    $.ajax({
  	    url: '/api/v2/tweets',
  	    contentType: 'application/json',
  	    type: 'POST',
  	    data: JSON.stringify({
  		'username': "Pardisturn",
      'body': body,
  	    }),
  	    success: function() {
            rawTweet => SActions.recievedTweet({ tweetedby: "Pardisturn",body: tweet, timestamp: Date.now})
  	    },
  	    error: function() {
  		      return console.log("Failed");
        }
    });
  }
}
