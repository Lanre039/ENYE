// import {DOB, GET_DOB, AGE, GET_AGE, HOBBY, GET_HOBBY, VISIBILITY, RM_VISIBILITY, CREATE_PROFILE, GET_PROFILES} from './types';
import actionTypes from './types';

export const actionCreators = {
    createUserId: profileFormValues => ({
        type: actionTypes.CREATE_USER_ID,
        payload: profileFormValues
    }),
    createFirstName: profileFormValues => ({
        type: actionTypes.CREATE_FIRST_NAME,
        payload: profileFormValues
    }),
    createLastName: profileFormValues => ({
        type: actionTypes.CREATE_LAST_NAME,
        payload: profileFormValues
    }),
    userDob: dob => ({
        type: actionTypes.DOB,
        payload: dob
    }),
    userHobby: hobby => ({
        type: actionTypes.HOBBY,
        payload: hobby
    }),
    userAge: age => ({
        type: actionTypes.AGE,
        payload: age
    }),
    rmStyle: () => ({
        type: actionTypes.RM_VISIBILITY
    }) 
}
export default actionCreators;


// export const createProfile = (profileFormValues) => dispatch => {
//     dispatch({ type: CREATE_PROFILE, payload: profileFormValues })
// }
// export const getProfiles = () => dispatch => {
//     dispatch({ type: GET_PROFILES })
// }
// export const userDob = (dob) => dispatch => {
//     dispatch ({type: DOB, payload: dob})
// };
// export const getDob = () => dispatch => {
//     dispatch ({type: GET_DOB})
// };
// export const userHobby = (hobby) => dispatch => {
//     dispatch ({type: HOBBY, payload: hobby})
// };
// export const getHobby = () => dispatch => {
//     dispatch ({type: GET_HOBBY})
// };
// export const userAge = (age) => dispatch => {
//     dispatch ({type: AGE, payload: age})
// };
// export const getAge = () => dispatch => {
//     dispatch ({type: GET_AGE})
// };

// export const userStyle = () => dispatch => {
//     dispatch ({type: VISIBILITY})
// };
// export const rmStyle = () => dispatch => {
//     dispatch ({type: RM_VISIBILITY})
// };