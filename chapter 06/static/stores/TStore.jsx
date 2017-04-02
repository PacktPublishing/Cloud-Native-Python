import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import { EventEmitter } from "events";

let _tweets = []
const CHANGE_EVENT = "CHANGE";

class TweetEventEmitter extends EventEmitter{
  getAll(){
    let updatelist = _tweets.map(tweet => {
         tweet.updatedate = moment(tweet.timestamp).fromNow();
         return tweet;
       });
    return _tweets;
  }
  emitChange(){
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback){
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback){
    this.removeListener(CHANGE_EVENT, callback);
  }
}

let TweetStore = new TweetEventEmitter();


AppDispatcher.register(action =>{
  switch (action.actionType) {
    case ActionTypes.RECIEVED_TWEETS:
        _tweets = action.rawTweets;
        TweetStore.emitChange();
      break;
    case ActionTypes.RECIEVED_TWEET:
        _tweets.unshift(action.rawTweet);
        TweetStore.emitChange();
      break;
    default:

  }
});


export default TweetStore;
