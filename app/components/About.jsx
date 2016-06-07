var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

//improved statless component
var About = (props) => {
  return (
    <div>
      <h3>About Component</h3>
      <p>Welcome to my simple About page!</p>
    </div>
  )
};


module.exports = About;
