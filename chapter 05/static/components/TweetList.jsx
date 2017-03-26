
import Tweettemplate from './templatetweet';
export default class TweetList extends React.Component {
  render(){
    let tweets = this.props.tweets.map(tweet => <Tweettemplate {...tweet}/>);
    return(
        <div>
          <ul className="collection">
            {tweets}
          </ul>
        </div>
      );
    }
}
