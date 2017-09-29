import React from 'react';
import { FormattedMessage } from 'react-intl';

import RightFooter from './RightFooter';
import LeftFooter from './LeftFooter';
import ImgCountry from './ImgCountry';
import Wrapper from './Wrapper';

import Map from './Map';

import messages from './messages';

import Image1 from './images/united-states.png';
import Image2 from './images/vietnam.png';
import Image3 from './images/canada.png';
import Image4 from './images/england.png';
import Image5 from './images/thailand.png';
import Image6 from './images/belgium.png';
import Image7 from './images/australia.png';
import Image8 from './images/mobytelab-icon.svg';

function Footer() {
  return (
    <Wrapper className='footer'>
      <div className='container'>
        <Map className='row'>
          <div className="col-md-8 col-md-offset-2">
            <a href="https://www.google.com/maps/place/MOBYTELAB+INFORMATION+TECHNOLOGY+AND+SERVICES+COMPANY/@10.8075718,106.6724848,17z/data=!3m1!4b1!4m5!3m4!1s0x31752920c8786b79:0xd918bb9ce0cce3a0!8m2!3d10.8075718!4d106.6746735">
              <img src="https://s3.eu-central-1.amazonaws.com/mobytelab.com/mobytelab_map.png" alt="mobytelab location on Google Map"/>
            </a>
          </div>
        </Map>
        <div className='row'>
          <LeftFooter className='col-md-4 col-md-offset-2'>
            <h2 className='company'><FormattedMessage {...messages.company} /></h2>
            <ul className='navigation'>
              <li><a><FormattedMessage {...messages.about} /></a></li>
              <li><a href="https://medium.com/mobytelab"><FormattedMessage {...messages.blog} /></a></li>
              <li><a data-toggle="modal" data-target="#myModal"><FormattedMessage {...messages.contact} /></a></li>
            </ul>
            <div className='row'>
              <div className="col-xs-3 col-sm-2"><a><ImgCountry src={Image1}/></a></div>
              <div className="col-xs-3 col-sm-2"><a><ImgCountry src={Image2}/></a></div>
              <div className="col-xs-3 col-sm-2"><a><ImgCountry src={Image3}/></a></div>
              <div className="col-xs-3 col-sm-2"><a><ImgCountry src={Image4}/></a></div>
              <div className="col-xs-3 col-sm-2"><a><ImgCountry src={Image5}/></a></div>
              <div className="col-xs-3 col-sm-2"><a><ImgCountry src={Image6}/></a></div>
              <div className="col-xs-3 col-sm-2"><a><ImgCountry src={Image7}/></a></div>
            </div>
          </LeftFooter>
          <RightFooter className='col-sm-4'>
            <span className='mobytelab-logo'>
              <img src={Image8}/>
              <span className='name'>mobytelab</span>
              <span className='slogan'>DEVELOPMENT AS A SERVICE</span>
            </span>
            <p>Copyright © 2017</p>
            <p>MOBYTELAB CO., LTD</p>
          </RightFooter>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;
