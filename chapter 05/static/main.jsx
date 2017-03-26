/*** @jsx React.DOM */

var reactval = React.createClass({
  render: function() {
    return (<form><div className="input-field"><textarea className="materialize-textarea" /><label>How you doing?</label> <button className="btn right">Tweet now</button> </div></form>);
  }
});

ReactDOM.render(
  React.createElement(reactval, null),
  document.getElementById('react')
);
