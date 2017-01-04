var React = require('react');
var {Link} =  require('react-router');

// var Examples = React.createClass({
//   render: function(){
//     return (
//       <h3>Examples Component</h3>
//     )
//   }
// });

var Examples = (props) => {
  return(
    <div>
      <h1 className = "text-center page-title">Examples!</h1>
      <p>Few examples to check to look at the temperature</p>
      <ol>
        <li>
          <Link to = '/?location=Bergen'>Bergen, Norway</Link>
        </li>
        <li>
          <Link to = '/?location=Lisbon'>Lisbon, Portugal</Link>
        </li>
      </ol>
    </div>
  )
};


module.exports = Examples;
