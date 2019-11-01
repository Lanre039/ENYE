import { take, put, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {  firebaseConfig } from './config/firebase';
import { database } from './config/firebase';
import {actionTypes} from './actions/types';
import actionCreators from './actions/index';


function createEventChannel() {
    const listener = eventChannel(
        emit => {
            database.ref('items')
            .on(
                'child_added', 
                data => emit(data.val())
            );
            return () => database.ref('items').off(listener);
        }
    );
    
    return listener;
};

function* updateDataSaga() {
  const formData = createEventChannel();
  while(true) {
    const data = yield take(formData);

    console.log(data);
    yield put(actionCreators.createUserId(data.userId));  
    yield put(actionCreators.createFirstName(data.firstName));
    yield put(actionCreators.createLastName(data.lastName));
    yield put(actionCreators.userDob(data.dobs));
    yield put(actionCreators.userHobby(data.hobby));
    yield put(actionCreators.userAge(data.ages));
  }
}

export default function* rootSaga() {
  yield fork(updateDataSaga);
}
