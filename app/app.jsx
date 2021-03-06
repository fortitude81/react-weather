var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');  //es6 destructuring syntax; same as var Route = require('react-router').Route etc....
var Main = require('Main');
var Nav = require('Nav');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//load foundatoin
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();  //fire up foundation

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(                    //most common react DOM method to render to screen
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,        //jsx greeter tag from component
  document.getElementById('app')
);
