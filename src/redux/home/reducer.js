import {handleActions} from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../../redux/constants';


const initialState = {
    project: {
      data:      {
        projectName: 'Project A'
      },
      isLoading: false,
      isError:   false,
      isSuccess: false,
      message:   ''
    },
    sidebarMenu: {
      data: [
        {color:'#faebd7', id:1, label:''},
        {color:'#9eccfe', id:2, label:''},
        {color:'#929eaa', id:3, label:''},
    ],
      isLoading: false,
      isError:   false,
      isSuccess: false,
      message:   ''
    },
    user: {
      data:      {
        userName:'sam '
      },
      isLoading: false,
      isError:   false,
      isSuccess: false,
      message:   ''
    },
    tabs: {
      data:     [
        {id:1, tabName:'Page 1', data:{}},
        {id:2, tabName:'Page 1', data:{}},
        {id:3, tabName:'Page 1', data:{}},
        {id:4, tabName:'Page 1', data:{}},
      ],
      isLoading: false,
      isError:   false,
      isSuccess: false,
      message:   ''
    },
}


const getUserRequest = (state, action) => update(state, {
  user: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const getUserSuccess = (state, action) => update(state, {
  user: {
    data:      {$set: action.payload},
    isLoading: {$set: false},
    isError:   {$set: false},
    isSuccess: {$set: true},
    message:   {$set: ''}
  }
});

const getUserError = (state, action) => update(state, {
  user: {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: action.payload}
  }
});

  export default handleActions({
    [constants.GET_USER_REQUEST]:                getUserRequest,
    [constants.GET_USER_SUCCESS]:                getUserSuccess,
    [constants.GET_USER_ERROR]:                  getUserError
  }, initialState);
  