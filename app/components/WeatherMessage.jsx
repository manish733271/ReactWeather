var React = require('react');

// var WeatherMessage  = React.createClass({
//   render: function(){
//     var {temp,location} = this.props;
//     return (
//       <h3>Temperature is {temp} in {location}</h3>
//     )
//   }
// });

// var WeatherMessage = (props) => {
//   var {temp,location} = props;
//   return (
//     <h3>Temperature is {temp} in {location}</h3>
//   )
// };

var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className = "text-center">Temperature is {temp} degree in {location}</h3>
  )
};

module.exports = WeatherMessage;
