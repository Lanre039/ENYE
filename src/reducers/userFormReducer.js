import {DOB, GET_DOB, AGE, GET_AGE, HOBBY, GET_HOBBY, VISIBILITY, RM_VISIBILITY, CREATE_PROFILE, GET_PROFILES}  from '../actions/types';

const INITIAL_STATE = {
    profiles: [],
    ages: [],
    hobbies:[],
    dobs: [],
    style: {
        visibility: "hidden"
      }
};



export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CREATE_PROFILE:
            return {
                ...state, profiles: [...state.profiles, action.payload]
            };
        case GET_PROFILES:
            return {
                ...state, profiles: state.profiles
            };
        case DOB:
            return {  ...state, dobs: [...state.dobs, action.payload]
            };
        case GET_DOB:
            return {  ...state, profiles: state.profiles
            };
        case HOBBY:
            return {  ...state, hobbies: [...state.hobbies, action.payload]
            };
        case GET_HOBBY:
            return {  ...state, profiles: state.profiles
            };
        case AGE:
            return {  ...state, ages: [...state.ages, action.payload]
            };
        case GET_AGE:
            return {  ...state, profiles: state.profiles
                };
        case VISIBILITY:
            return { ...state, visibility: 'visible'};
        case RM_VISIBILITY:
            return { ...state, style: {visibility: 'visible'} };
        default:
            return state;
    };
};