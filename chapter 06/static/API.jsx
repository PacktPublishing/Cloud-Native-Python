import SActions from './actions/SActions';

export default{
  getAllTweets(){
    // console.log(2, "API get tweets");
    let str = "/api/v2/tweets/" + localStorage.getItem("sessionid")
    $.getJSON(str , function(tweetModels) {
        var t = tweetModels
        SActions.receivedTweets(t)
    });
  },
  addTweet(body, user){
    $.ajax({
  	    url: '/api/v2/tweets',
  	    contentType: 'application/json',
  	    type: 'POST',
  	    data: JSON.stringify({
  		'username': user,
      'body': body,
  	    }),
  	    success: function() {
            rawTweet => SActions.receivedTweet({ tweetedby: user,body: tweet, timestamp: Date.now})
  	    },
  	    error: function() {
  		      return console.log("Failed");
        }
    });
  }
}
