import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";

const getUsersSelector = (state: AppStateType) => {
   return state.usersPage.items;
};
/**
 * Пример использования реселекторов
 */
export const getUsers = createSelector(getUsersSelector, (item) => {
   return item.filter(u => true);
})

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