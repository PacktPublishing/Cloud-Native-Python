import Tweet from "./components/Tweet";
import TweetList from "./components/TweetList";

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={tweets:[]}
  }
  addTweet(tweet){
    let newTweet = this.state.tweets;
    newTweet.unshift({name:"guest", body:tweet})
    this.setState({tweets: newTweet});
  }
  render(){
    return (
      <div className="container">
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
