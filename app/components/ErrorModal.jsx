//resusable component, can put anywhere in app and show modal with a Title and Message

var React = require('react');

var ErrorModal = React.createClass({
  //set default type for title
  getDefaultProps: function() {
    return {  //return an object of props
      title: 'Error'
    };
  },
  //set up prop types, in this case both strings and message required
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired  //not optional
  },
  //automatically called by React after DOM updated with whatever have in render function, here to open modal
  componentDidMount: function() {  //using Foundation.Reveal
    var modal = new Foundation.Reveal($('#error-modal')); //$ from webpack.config
    modal.open();
  },
  render: function () {
    var {title, message} = this.props;//pull props off this.props using es6 destructuring

    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            OKAY
          </button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
