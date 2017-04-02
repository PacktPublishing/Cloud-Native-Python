import Tweet from "./components/Tweet";
import TweetList from "./components/TweetList";
import cookie from 'react-cookie';
import TActions from "./actions/Tactions";
import TStore from "./stores/TStore";

TActions.getAllTweets();

let getAppState = () =>{
  return { tweetslist: TStore.getAll()};
}

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state= getAppState();
    this._onChange = this._onChange.bind(this);
  }
// function to pull tweets
  componentDidMount() {
    TStore.addChangeListener(this._onChange);
}
componentWillUnMount() {
  TStore.removeChangeListener(this._onChange);
}

_onChange(){
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
