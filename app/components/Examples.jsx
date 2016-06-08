var React = require('react');
var {Link} = require('react-router');  //load in link component

// var Examples = React.createClass({
//   render: function() {
//     return (
//       <h3>Examples Component</h3>
//     )
//   }
// });

var Examples = (props) => {
    return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few example locations to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Dallas'>Dallas, TX</Link>
          </li>
          <li>
            <Link to='/?location=Auckland'>Auckland, New Zealand</Link>
          </li>
        </ol>
      </div>
    )
};

module.exports = Examples;
