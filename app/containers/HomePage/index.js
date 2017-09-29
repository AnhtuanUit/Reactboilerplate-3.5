/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectResponse, makeSelectContactData, makeSelectLoading, makeSelectError } from 'containers/ContactForm/selectors';

import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { createContact } from '../ContactForm/actions';
import reducer from '../ContactForm/reducer';
import saga from './saga';

import { Container, Row } from './GridSystems';
import { Title, Hr, Highlight, Description } from './SectionHeader';

import Customer from './SectionCustomer';
import SaveTime from './SectionSaveTime';
import Carousel from 'components/Carousel';
import ContactusForm from 'containers/ContactForm';


import CommonButton from 'components/Button';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
  }

  render() {
    const { loading, error, response } = this.props;
    const reposListProps = {
      loading,
      error,
      response,
    };

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div>
          <section className='body'>

            <Customer>
              <Container>
                <Title><FormattedMessage {...messages.titleCustomer} /></Title>
                <Hr />
                <Description><FormattedMessage {...messages.des1Customer} /><Highlight><FormattedMessage {...messages.mobytelab} /></Highlight><FormattedMessage {...messages.des2Customer} /></Description>
                <Carousel />
              </Container>
              <section className='cross'></section>
            </Customer>

            <SaveTime>
              <Title><FormattedMessage {...messages.titleSaveTime} /></Title>
              <Hr />
              <Description><FormattedMessage {...messages.desSaveTime} /></Description>
              <div className='group-button'>
                <div className='start-free-button'>
                  <CommonButton style={{marginBottom: '20px'}}><FormattedMessage {...messages.buttonSaveTimeBuilding} /></CommonButton>
                </div>
                <div className='start-quick-button'>
                  <CommonButton white><FormattedMessage {...messages.buttonSaveTimeQuickStart} /></CommonButton>
                </div>
              </div>
            </SaveTime>

            <ContactusForm onSubmit={this.props.onSubmitForm} loading={this.props.loading} errMsg={this.props.error} response={this.props.response}/>
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  response: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (values) => {
      dispatch(createContact(values.toJS()));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  response: makeSelectResponse(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
