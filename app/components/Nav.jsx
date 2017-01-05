var React = require('react');
var {Link, IndexLink } = require('react-router');

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);

    if(location.length>0){
      this.refs.search.value = '';
      window.location.hash = '#/?location=' + location;
    }


  },
  render: function(){
    return(
      <div className = "top-bar">
        <div className = "top-bar-left">
          <ul className = "menu">
            <li className="menu-text">WeatherApp</li>
            <li>
              <IndexLink to = "/" activeClassName = "active" activeStyle = {{ fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <IndexLink to = "/about" activeStyle = {{ fontWeight: 'bold'}}>About</IndexLink>
            </li>
            <li>
              <IndexLink to = "/examples" activeStyle = {{ fontWeight: 'bold'}}>Examples</IndexLink>
            </li>
          </ul>
        </div>

        <div className="top-bar-right">
          <form onSubmit = {this.onSearch}>
             <ul className="menu">
               <li><input type="search" placeholder="Search weather" ref = "search" /></li>
               <li><button type="submit" className="button" value = "Get Weather">Search</button></li>
             </ul>
          </form>
       </div>

      </div>
    );
  }
});


module.exports = Nav;
