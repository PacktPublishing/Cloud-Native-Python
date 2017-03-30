import Tweet from "./components/Tweet";
import TweetList from "./components/TweetList";
import cookie from 'react-cookie';


class Main extends React.Component{
  constructor(props){
    super(props);
    this.state =  { userId: cookie.load('session') };
    this.state={tweets:[{ 'timestamp': '2017-03-29 08:05:36','tweetedby': 'Camain', '_id': "ObjectId('58db6ad019b08334f3d1e1f6')", 'id': 544, 'body': "Trust is the glue of life. It's the foundational principle that holds all relationships. - Stephen R. Covey #Motivation"}]}
  }
  // function to post tweets
  addTweet(tweet){
    var self = this;
    $.ajax({
  	    url: '/api/v2/tweets/',
  	    contentType: 'application/json',
  	    type: 'POST',
  	    data: JSON.stringify({
  		'username': "Agnsur",
      'body': tweet,
  	    }),
  	    success: function(data) {
            return console.log("success");
  	    },
  	    error: function() {
  		return console.log("Failed");
  	    }
  	});
  }
// function to pull tweets
  componentDidMount() {
    var self=this;
    $.ajax({url: `/api/v2/tweets`,
     success: function(data) {
        // self.setState({tweets: data['tweets_list']});
        // alert(self.state.tweets);
        return console.log("success");
     },
     error: function() {
   return console.log("Failed");
     }
    // $.getJSON('/api/v2/tweets', function(tweetModels) {
	  //   var t = $.map(tweetModels.tweets_list, function(item) {
	  //   return item;
    // });
    // const tweet = t;
    // alert(tweet)
    // self.setState({tweets: tweet})
 });
}

  render(){
    return (
      <div>
        <Tweet sendTweet={this.addTweet.bind(this)}/>
        <TweetList tweets={this.state.tweets}/>
      </div>
    );
  }
}


let documentReady =() =>{
  ReactDOM.render(
    <Main />,
    document.getElementById('react')
  );
};

$(documentReady);
