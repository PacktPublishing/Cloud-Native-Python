

// var reactval = React.createClass({
//   render: function() {
//     // return <Tweet />;
//     return ('<form> <div className="input-field"><textarea className="materialize-textarea" /> <label>How you doing?</label><button className="btn right">Tweet now</button></div></form>'
//     );
//   }
// });
// import React from 'react';
//
// var React = require("react");
import Tweet from "./components/Tweet";
class Main extends React.Component{
  render(){
    return (
      <Tweet />
    );
  }
}


let documentReady =() =>{
  ReactDOM.render(
    <Main />,
    document.getElementById('react')
  );
};

$(documentReady);
