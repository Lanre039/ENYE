import {DOB, GET_DOB, AGE, GET_AGE, HOBBY, GET_HOBBY, VISIBILITY, RM_VISIBILITY, CREATE_PROFILE, GET_PROFILES} from './types';

export const createProfile = (profileFormValues) => dispatch => {
    dispatch({ type: CREATE_PROFILE, payload: profileFormValues })
}
export const getProfiles = () => dispatch => {
    dispatch({ type: GET_PROFILES })
}
export const userDob = (dob) => dispatch => {
    dispatch ({type: DOB, payload: dob})
};
export const getDob = () => dispatch => {
    dispatch ({type: GET_DOB})
};
export const userHobby = (hobby) => dispatch => {
    dispatch ({type: HOBBY, payload: hobby})
};
export const getHobby = () => dispatch => {
    dispatch ({type: GET_HOBBY})
};
export const userAge = (age) => dispatch => {
    dispatch ({type: AGE, payload: age})
};
export const getAge = () => dispatch => {
    dispatch ({type: GET_AGE})
};

export const userStyle = () => dispatch => {
    dispatch ({type: VISIBILITY})
};
export const rmStyle = () => dispatch => {
    dispatch ({type: RM_VISIBILITY})
};