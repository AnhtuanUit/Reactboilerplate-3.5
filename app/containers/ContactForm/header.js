import React from 'react'
import { FormattedMessage } from 'react-intl';

import Image1 from './images/james-nguyen.png';
import Image2 from './images/left-quote.png';
import messages from './messages';
import Header from './WrapperHeader';

import moment from 'moment-timezone';

const header = () => {
  return (
    <Header className='header-contact-form'>
      <div className='col-sm-12 col-xs-12 button-close'>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className='col-sm-5 col-xs-12'>
        <span className="man-chat">
          <img alt='avatar' src={Image1}/>
          <span>
            <p><FormattedMessage {...messages.boss} /></p>
            <p>{moment().tz(moment.tz.guess()).format('h:mm A z')}</p>
          </span>
        </span>
      </div>
      <div className='col-sm-7 col-xs-12 message'>
        <img src={Image2}/>
        <p><FormattedMessage {...messages.messageHello} /></p>
      </div>
    </Header>
  )
}

export default header;
