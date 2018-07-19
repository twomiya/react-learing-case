import {takeEvery,put} from 'redux-saga/effects';
import {GET_INIT_LIST} from './actionTypes'
import { getInitDataAction } from './actionCreator';
import axios from 'axios';


function* getLists(){
    const res = yield axios.get('http://localhost:3003/list');
    const action = getInitDataAction(res.data);
    yield put(action)

}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getLists);
  }

  
  export default mySaga;