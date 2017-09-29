import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import Navbar from './NavBar';
import messages from './messages';
import MobytelabIcon from './mobytelab-icon.svg';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Navbar className="navbar">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">
                <img src={MobytelabIcon} />
                <span className="left">mobytelab</span>
                <span className="mid">|</span>
                <span className="right">Solution For Your Business</span>
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to='/blog'><FormattedMessage {...messages.blog} /></Link></li>
                <li><Link to='/about'><FormattedMessage {...messages.aboutUs} /></Link></li>
                <hr/>
                <li><Link to="/" className="want-us"><FormattedMessage {...messages.wantUs} /></Link></li>
                <li><a data-toggle="modal" data-target="#myModal" className="contact-us"><FormattedMessage {...messages.contactUs} /></a></li>
              </ul>
            </div>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;
