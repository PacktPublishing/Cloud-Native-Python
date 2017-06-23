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
    return _tweets.reverse();
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

let TStore = new TweetEventEmitter();


AppDispatcher.register(action =>{
  switch (action.actionType) {
    case ActionTypes.RECEIVED_TWEETS:
        // console.log(4, "Tstore for tweets");
        _tweets = action.rawTweets;
        // console.log(6, _tweets[0]);
        TStore.emitChange();
      break;
    case ActionTypes.RECEIVED_TWEET:
        _tweets.unshift(action.rawTweet);
        TStore.emitChange();
      break;
    default:

  }
});


export default TStore;
