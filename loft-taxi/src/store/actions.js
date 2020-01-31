import {createAction} from 'redux-actions';

export const setUserInfo = createAction('USER_INFO');
export const setUserToken = createAction('USER_TOKEN');
export const setUserAcitve = createAction('USER_ACTIVE');
export const setLogOut = createAction('USER_LOGOUT');
export const setpreloader = createAction('PRELOADER');

export const setRegistration = createAction('UESR_REGISTRATION');
export const setMessageError = createAction('MESSAGE_ERROR');