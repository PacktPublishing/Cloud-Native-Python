import Tweet from "./components/Tweet";
import TweetList from "./components/TweetList";
import cookie from 'react-cookie';


class Main extends React.Component{
  constructor(props){
    super(props);
    this.state =  { userId: cookie.load('session') };
    this.state={tweets:[]}
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
    $.ajax({url: `/api/v2/tweets/`,
     success: function(data) {
        self.setState({tweets: data['tweets_list']});
        alert(self.state.tweets);
        return console.log("success");
     },
     error: function() {
   return console.log("Failed");
     }
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
