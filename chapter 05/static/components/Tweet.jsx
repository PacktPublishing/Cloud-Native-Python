export default class Tweet extends React.Component {
  sendTweet(event){
    event.preventDefault();
    this.props.sendTweet(this.refs.tweetTextArea.value);
    this.refs.tweetTextArea.value = '';
  }
  render(){
    return(
      <div className="row">
        <form onSubmit={this.sendTweet.bind(this)}>
          <div className="input-field">
            <textarea ref="tweetTextArea" className="materialize-textarea" />
            <label>How you doing?</label>
              <button className="btn waves-effect waves-light right">Tweet now <i className="material-icons right">send</i></button>
          </div>
         </form>
      </div>
      );
    }
}
