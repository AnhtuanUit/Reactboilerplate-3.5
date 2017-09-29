import React from 'react'
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form/immutable'


import ReCAPTCHA from 'react-google-recaptcha';

import { WrapperForm, WrapperFormTextarea } from './WrapperForm';
import validate from './validate';
import Wrapper from './Wrapper';
import Header from './header';
import Loading from './Loading';

import Button from 'components/Button';
import messages from './messages';

import Image3 from './images/upload.png';

function triggerUpload() {
  $('#myFile').click();
}

const renderField = ({ input, label, type, style, meta: { touched, error } }) =>
  <WrapperForm style={style} touched={touched} error={error}>
    <div>
      <input {...input} placeholder={label} type={type}/>
    </div>
  </WrapperForm>

const renderTextarea = ({ input, label, type, meta: { touched, error } }) =>
  <WrapperFormTextarea  touched={touched} error={error}>
    <div>
      <p>Hello,</p>
      <textarea {...input} placeholder={label} type={type}/>
    </div>
  </WrapperFormTextarea>

const renderFile = ({ input, label, type, meta: { touched, error } }) =>
  <div style={{ marginTop: '25px'}}>
    <input {...input} type={type} id="myFile" style={{ display: 'none' }} />
    <div>
      <img onClick={triggerUpload} style={{ marginRight: '10px', marginTop: '-10px'}} src={Image3} width="19px" height="25px"/><span>{label}</span>
    </div>
  </div>

const renderRecaptcha = ({ input, meta: { touched, error } }) =>
  <div>
    <ReCAPTCHA
      {... input}
       sitekey="6LeldCcUAAAAAKrs0CYp4PYLVRVbeUWj7zTb9Ic5"
       onChange={input.onChange}
     />
  </div>


const Contact = props => {

  const { error, handleSubmit, pristine, reset, submitting, loading, errMsg, response } = props
  return (
    <Wrapper className="modal fade" id="myModal" role="dialog">
      <div className="modal-dialog">

        <div className="modal-content">
          <div className="modal-header">
            <Header />
          </div>
          <div className="modal-body">
            <form onSubmit={ handleSubmit }>
              <Field
                style={{width: '50%', display: 'inline-block'}}
                name="firstName"
                type="text"
                component={renderField}
                label="First name"
              />
              <Field
                style={{width: '50%', display: 'inline-block'}}
                name="lastName"
                type="text"
                component={renderField}
                label="Last name"
              />
              <Field
                name="email"
                type="text"
                component={renderField}
                label="Your email address"
              />
              <Field
                name="content"
                type="text"
                component={renderTextarea}
                label="your message here ..."
              />


              {!!response && <div className="alert alert-success">
                  <strong><FormattedMessage {...messages.thankYou} /></strong>
                  {response}
              </div>}

              {!!errMsg && <div className="alert alert-danger error-message">
                <strong>Error! </strong>
                {errMsg}
              </div>}

              <div style={{display: 'inline-block', width: '100%'}}>
                <div className='col-sm-7'>
                  <Field
                    name="file"
                    type="file"
                    component={renderFile}
                    label="Upload a file to declare"
                  />
                </div>
                <div className='col-sm-5 send-button'>
                  <div style={{ marginTop: '25px' }}>
                    <Field
                      name='response'
                      component={renderRecaptcha}
                    />
                    <Button type="submit" style={{float: 'right', marginTop: '15px', marginBottom: '20px'}}
                      disabled={submitting} loading={loading} ><FormattedMessage {...messages.buttonSend} /></Button>
                    <Loading loading={loading}></Loading>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </Wrapper>
  )
}

export default reduxForm({
  validate,
  form: 'submitValidation' // a unique identifier for this form
})(Contact)
