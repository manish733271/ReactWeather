var React = require('react');

// var About  = React.createClass({
//   render: function(){
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

var About = (props) => {
  return(
    <div>
      <h1 className = "text-center page-title">About</h1>
      <p>Weather application built on react following react web app developer course</p>
      <p>Here are the tools I used</p>
      <ul>
        <li>
          <a href = "https://facebook.github.io/react" target = "_blank">React</a> - This was the Javascript framework applied.
        </li>
        <li>
          <a href ="http://openweathermap.org" target = "_blank">Open Weather Map</a> - This was the Web API used
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
