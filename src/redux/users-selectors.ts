import {AppStateType} from "./redux-store";

export const getUser = (state: AppStateType) => {
   return state.usersPage.items;
};
export const getPageSize = (state: AppStateType) => {
   return state.usersPage.pageSize;
};
export const getTotalUsersCount = (state: AppStateType) => {
   return state.usersPage.totalCount;
};
export const getCurrentPage = (state: AppStateType) => {
   return state.usersPage.currentPage;
};
export const getIsFetching = (state: AppStateType) => {
   return state.usersPage.isFetching;
};
export const getFollowingInProgress = (state: AppStateType) => {
   return state.usersPage.followingInProgress;
};