var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var {temp, location} = this.props;
//
//     return (
//       <h3>It's it {temp} in {location}.</h3>
//     )
//   }
// });

//refactor using stateless functional component
var WeatherMessage = ({temp, location}) => {
  // var {temp, location} = props;  //dont need because destructuring above instead of props

  return (
    <h3>It's it {temp} in {location}.</h3>
  )
};

module.exports = WeatherMessage;
