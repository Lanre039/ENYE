// import {DOB, GET_DOB, AGE, GET_AGE, HOBBY, GET_HOBBY, VISIBILITY, RM_VISIBILITY, CREATE_PROFILE, GET_PROFILES}  from '../actions/types';
import actionTypes from '../actions/types';

const INITIAL_STATE = {
    userId: [],
    firstName: [],
    lastName: [],
    // profiles: [],
    ages: [],
    hobbies:[],
    dobs: [],
    style: {
        visibility: "hidden"
      }
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.CREATE_USER_ID:
            return {
                ...state, userId: [...state.userId, action.payload]
            };
        case actionTypes.CREATE_FIRST_NAME:
            return {
                ...state, firstName: [...state.firstName, action.payload]
            };
        case actionTypes.CREATE_LAST_NAME:
            return {
                ...state, lastName: [...state.lastName, action.payload]
            };
        case actionTypes.DOB:
            return {  ...state, dobs: [...state.dobs, action.payload]
            };
        case actionTypes.HOBBY:
            return {  ...state, hobbies: [...state.hobbies, action.payload]
            };
        case actionTypes.AGE:
            return {  ...state, ages: [...state.ages, action.payload]
            };
        case actionTypes.RM_VISIBILITY:
            return { ...state, style: {visibility: 'visible'} };
        default:
            return state;
    };
};

// export default (state = INITIAL_STATE, action) => {
//     switch(action.type) {
//         case actionTypes.CREATE_FIRST_NAME:
//             return {
//                 ...state, profiles: [...state.profiles, action.payload]
//             };
//         case GET_PROFILES:
//             return {
//                 ...state, profiles: state.profiles
//             };
//         case DOB:
//             return {  ...state, dobs: [...state.dobs, action.payload]
//             };
//         case GET_DOB:
//             return {  ...state, profiles: state.profiles
//             };
//         case HOBBY:
//             return {  ...state, hobbies: [...state.hobbies, action.payload]
//             };
//         case GET_HOBBY:
//             return {  ...state, profiles: state.profiles
//             };
//         case AGE:
//             return {  ...state, ages: [...state.ages, action.payload]
//             };
//         case GET_AGE:
//             return {  ...state, profiles: state.profiles
//                 };
//         case VISIBILITY:
//             return { ...state, visibility: 'visible'};
//         case RM_VISIBILITY:
//             return { ...state, style: {visibility: 'visible'} };
//         default:
//             return state;
//     };
// };