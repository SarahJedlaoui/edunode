import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    VERIFICATION_SUCCESS,
    REGISTER_FAIL,
    VERIFICATION_FAIL,
    IS_VERIFYING,
    HAS_USERNAME,
    ALBEDO_VERIFICATION_SUCCESS,
    ALBEDO_VERIFICATION_FAIL,
    FIRST_COURSE_DONE,
    UPDATED_ACCOUNT
  } from '../actions/types';
  
  const initialState = {
      token: localStorage.getItem("token"),
      isLoading: false,
      user: null
  };
  
  
  
  export default function (state = initialState, action) {
      switch (action.type) {
        case USER_LOADING:
        case IS_VERIFYING:
          return {
            ...state,
            isLoading: true,
          };
        case USER_LOADED:
          return {
            ...state,
            ...action.payload,
            isLoading: false,
          
          };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
        case VERIFICATION_FAIL:
          return {
            ...state,
            ...action.payload,
            isLoading: false,
            isAuthenticated: true,
          };
        case VERIFICATION_SUCCESS:
          return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            isVerified: true,
            isLoading: false,
          };
        case HAS_USERNAME:
          return {
            ...state,
            ...action.payload,
            isLoading: false,
            isAuthenticated: true,
            isVerified: true,
            hasUsername: true,
     
          };
        case ALBEDO_VERIFICATION_SUCCESS:
          return {
            ...state,
            ...action.payload,
            isLoading: false,
            isGranted: true,
            isAuthenticated: true,
            isVerified: true,
          };
        case ALBEDO_VERIFICATION_FAIL:
          return {
            ...state,
            ...action.payload,
            isLoading: false,
            isGranted: false,
          };
        case FIRST_COURSE_DONE:
          return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            isVerified: true,
            isLoading: false,
            courseOneDone: true,
          };
        case UPDATED_ACCOUNT:
          return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            isVerified: true,
            isLoading: false,
            isUpdated: true
          };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case LOGOUT_SUCCESS:
          return {
            isAuthenticated: false,
            isLoading: false,
            token: null,
            isVerified: false,
          };
        default:
          return state;
      }
  }