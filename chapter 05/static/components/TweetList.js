import Tweettemplate from './templatetweet'

export default class TweetList extends React.Component {
  render(){
    let tweetlist = this.props.tweets.map(tweet => <Tweettemplate key={tweet.id} {...tweet} />);
    return(
        <div>
          <ul className="collection">
            {tweetlist}
          </ul>
        </div>
      );
    }
}
