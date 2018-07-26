import * as actions from '../../redux/actions';
import * as api from '../../redux/api';
import {sidebarData, userData, projectData, tabsData} from '../../constants';


export const getUserData = () => {
    return (dispatch, getState) => {
      return new Promise((resolve, reject) => {
        dispatch(actions.getUserSuccess(userData));
      });
    };
};

export const getProjectData = () => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
        dispatch(actions.getProjectSuccess(projectData));
        });
    };
};

export const getTabsData = () => {
    return (dispatch, getState) => {
      return new Promise((resolve, reject) => {
        dispatch(actions.getTabsSuccess(tabsData));
      });
    };
  };

export const getSidebarData = () => {
    return (dispatch, getState) => {
      return new Promise((resolve, reject) => {
        dispatch(actions.getSidebarSuccess(sidebarData));
      });
    };
  };

  export const updateTabs = (params) => {
    return (dispatch, getState) => {
      return new Promise((resolve, reject) => {
        dispatch(actions.updateTabsSuccess(params));
      });
    };
  };
