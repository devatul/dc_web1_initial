import {createAction} from 'redux-actions';
import * as constants from './constants';

export const getUserRequest = createAction(constants.GET_USER_REQUEST);
export const getUserSuccess = createAction(constants.GET_USER_SUCCESS);
export const getUserError = createAction(constants.GET_USER_ERROR);

export const getSidebarRequest = createAction(constants.GET_SIDEBAR_REQUEST);
export const getSidebarSuccess = createAction(constants.GET_SIDEBAR_SUCCESS);
export const getSidebarError = createAction(constants.GET_SIDEBAR_ERROR);

export const getTabsRequest = createAction(constants.GET_TABS_REQUEST);
export const getTabsSuccess = createAction(constants.GET_TABS_SUCCESS);
export const getTabsError = createAction(constants.GET_TABS_ERROR);
export const updateTabsSuccess = createAction(constants.UPDATE_TABS_SUCCESS);

export const getProjectRequest = createAction(constants.GET_PROJECT_REQUEST);
export const getProjectSuccess = createAction(constants.GET_PROJECT_SUCCESS);
export const getProjectError = createAction(constants.GET_PROJECT_ERROR);
