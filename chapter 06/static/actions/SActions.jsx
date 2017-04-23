import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants'

export default{
  recievedTweets(rawTweets){
    // console.log(3, rawTweets);
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECIEVED_TWEETS,
      rawTweets
    })
  },
  recievedTweet(rawTweet){
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECIEVED_TWEET,
      rawTweet
    })
  }
}
