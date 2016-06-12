var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;  //enables to access this keyword after create new funciotn below

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,  //clear data when make a search
      temp: undefined       //clear data when make a search
    });

    openWeatherMap.getTemp(location).then(function (temp) {  //should return a promise
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
      // alert(errorMessage); git rid of alert becuse using modal now
    });
  },
  //run search when component get started in browser and theres a proper location
  componentDidMount: function() {
    var location = this.props.location.query.location;//pull out location string from query and location object

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';  //remove location url
    }
  },
  componentWillReceiveProps: function (newProps) {
    var location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';  //remove location url
    }
  },
  render: function () {
    var {isLoading, temp, location, errorMessage} = this.state;  //pull out of state using destructuring

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (  //specifiy message prop set = to jsx expression
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
