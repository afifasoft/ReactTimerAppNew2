var React = require('react');
var ReactDOM = require('react-dom');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return(
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Timer New App
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            <Link to="/" activeClassName="active-link">Countdown</Link>
          </li>
        </ul>

      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created By <a href="https://github.com/afifasoft" target="_blank">Afifasoft</a>
          </li>
        </ul>

      </div>
    </div>
  );
};

module.exports = Navigation;
