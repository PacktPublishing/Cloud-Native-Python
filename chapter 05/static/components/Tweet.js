export default class Tweet extends React.Component {
  sendTweet(event){
    event.preventDefault();
    this.props.sendTweet(this.refs.tweetTextArea.value);
    this.refs.tweetTextArea.value = '';
  }
  render(){
    return(
        <div className="row">
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">APP</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/profile">Profile</a></li>
              <li><a href="/logout">Logout</a></li>
            </ul>
          </div>
        </nav>

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
