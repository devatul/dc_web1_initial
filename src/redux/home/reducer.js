import {handleActions} from 'redux-actions';
import update from 'immutability-helper';
import {findIndex, cloneDeep, find, extend, remove} from 'lodash';
import * as constants from '../../redux/constants';


const initialState = {
    project: {
      data:      {},
      isLoading: false,
      isError:   false,
      isSuccess: false,
      message:   ''
    },
    sidebarMenu: {
      data: [],
      isLoading: false,
      isError:   false,
      isSuccess: false,
      message:   ''
    },
    user: {
      data:      {},
      isLoading: false,
      isError:   false,
      isSuccess: false,
      message:   ''
    },
    tabs: {
      data: [],
      isLoading: false,
      isError:   false,
      isSuccess: false,
      message:   ''
    },
}

// user data update
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
// sidebar data update
const getSidebarRequest = (state, action) => update(state, {
  sidebarMenu: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const getSidebarSuccess = (state, action) => update(state, {
  sidebarMenu: {
    data:      {$set: action.payload},
    isLoading: {$set: false},
    isError:   {$set: false},
    isSuccess: {$set: true},
    message:   {$set: ''}
  }
});

const getSidebarError = (state, action) => update(state, {
  sidebarMenu: {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: action.payload}
  }
});
// project data update
const getProjectRequest = (state, action) => update(state, {
  project: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const getProjectSuccess = (state, action) => update(state, {
  project: {
    data:      {$set: action.payload},
    isLoading: {$set: false},
    isError:   {$set: false},
    isSuccess: {$set: true},
    message:   {$set: ''}
  }
});

const getProjectError = (state, action) => update(state, {
  project: {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: action.payload}
  }
});

// tabs data update
const getTabsRequest = (state, action) => update(state, {
  tabs: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const getTabsSuccess = (state, action) => update(state, {
  tabs: {
    data:      {$set: action.payload},
    isLoading: {$set: false},
    isError:   {$set: false},
    isSuccess: {$set: true},
    message:   {$set: ''}
  }
});

const getTabsError = (state, action) => update(state, {
  tabs: {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: action.payload}
  }
});

const updateTabsSuccess = (state, action) =>{
  let tabData = cloneDeep(state.tabs.data);
  let tabIndex = findIndex(tabData, {id:action.payload.tabId});
  let count = 0;
  let i = action.payload.tile.i;
  const checkUniqId = (tile) => {
    if(find(tabData[tabIndex].tiles, {i:tile.i})){
      tile.i = i + '-' + count;
      count++;
      checkUniqId(tile);
    }else{
      tabData[tabIndex].tiles.push(tile);  
    }
  }
  checkUniqId(action.payload.tile);
  return  update(state, {
    tabs: {
      data:      {$set: tabData},
      isLoading: {$set: false},
      isError:   {$set: false},
      isSuccess: {$set: true},
      message:   {$set: ''}
    }
  })
};
const updateLayoutSuccess = (state, action) => {
    let tabData = cloneDeep(state.tabs.data);
    let index = findIndex(tabData, {id:action.payload.tabId});
    tabData[index].tiles.map((item)=>{
      let tile = find(action.payload.layout, {i:item.i})
      if(tile){
        return extend(item, tile);
      }
    });
    return  update(state, {
      tabs: {
        data:      {$set: tabData},
        isLoading: {$set: false},
        isError:   {$set: false},
        isSuccess: {$set: true},
        message:   {$set: ''}
      }
    });
}
const removeItemSuccess = (state, action) => {
  let tabData = cloneDeep(state.tabs.data);
  let index = findIndex(tabData, {id:action.payload.tabId});
  remove(tabData[index].tiles, function(n) {return n.i === action.payload.tile.i;});
  return  update(state, {
    tabs: {
      data:      {$set: tabData},
      isLoading: {$set: false},
      isError:   {$set: false},
      isSuccess: {$set: true},
      message:   {$set: ''}
    }
  });
}


  export default handleActions({
    [constants.GET_USER_REQUEST]:                getUserRequest,
    [constants.GET_USER_SUCCESS]:                getUserSuccess,
    [constants.GET_USER_ERROR]:                  getUserError,

    [constants.GET_SIDEBAR_REQUEST]:             getSidebarRequest,
    [constants.GET_SIDEBAR_SUCCESS]:             getSidebarSuccess,
    [constants.GET_SIDEBAR_ERROR]:               getSidebarError,

    [constants.GET_PROJECT_REQUEST]:             getProjectRequest,
    [constants.GET_PROJECT_SUCCESS]:             getProjectSuccess,
    [constants.GET_PROJECT_ERROR]:               getProjectError,

    [constants.GET_TABS_REQUEST]:                getTabsRequest,
    [constants.GET_TABS_SUCCESS]:                getTabsSuccess,
    [constants.GET_TABS_ERROR]:                  getTabsError,
    [constants.UPDATE_TABS_SUCCESS]:             updateTabsSuccess,

    [constants.UPDATE_LAYOUT_SUCCESS]:           updateLayoutSuccess,
    [constants.REMOVE_LAYOUT_ITEM_SUCCESS]:      removeItemSuccess,
  }, initialState);
  