/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CREATE_CONTACT,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of CREATE_CONTACT
 */
export function createContact(contactData) {
  return {
    type: CREATE_CONTACT,
    contactData,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of CREATE_CONTACT_SUCCESS passing the repos
 */
export function contactCreated(responseContact) {
  return {
    type: CREATE_CONTACT_SUCCESS,
    responseContact,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of CREATE_CONTACT_ERROR passing the error
 */
export function contactCreatingError(error) {
  return {
    type: CREATE_CONTACT_ERROR,
    error,
  };
}
