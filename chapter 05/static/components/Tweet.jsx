export default class Tweet extends React.Component {
  render(){
    return(
        <form>
          <div className="input-field">
            <textarea className="materialize-textarea" />
            <label>How you doing?</label>
              <button className="btn right">Tweet now</button>
          </div>
         </form>
      );
    }
}
