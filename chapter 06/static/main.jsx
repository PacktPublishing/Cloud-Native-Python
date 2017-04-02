import Tweet from "./components/Tweet";
import TweetList from "./components/TweetList";
import cookie from 'react-cookie';
import TweetActions from "./actions/Tweetactions";
import TweetStore from "./stores/TweetStore";

TweetActions.getAllTweets();

let getAppState = () =>{
  return { tweetslist: TweetStore.getAll()};
}

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state =  { userId: cookie.load('session') };
    this.state= getAppState();
    this._onChange = this._onChange.bind(this);
  }
// function to pull tweets
  componentDidMount() {
    TweetStore.addChangeListener(this._onChange);
}
componentWillUnMount() {
  TweetStore.removeChangeListener(this._onChange);
}

_onChange(){
  console.log(5, "Main._onChange");
  this.setState(getAppState());
}


  render(){
    return (
      <div>
        <Tweet />
        <TweetList tweet={this.state.tweetslist}/>
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
