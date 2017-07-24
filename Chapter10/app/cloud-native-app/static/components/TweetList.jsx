import Tweettemplate from './templatetweet'

export default class TweetList extends React.Component {
  render(){
    let tweetlist = this.props.tweet.map(tweet => <Tweettemplate key={tweet.timestamp} {...tweet} />);
    return(
        <div>
          <ul className="collection">
            {tweetlist}
          </ul>
        </div>
      );
    }
}
