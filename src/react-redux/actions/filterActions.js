import * as types from "./actionTypes"

export const searchFilterChanged = (searchText) => ({
    type: types.SEARCH_FILTER_CHANGED,
    payload: searchText
});

export const statusFilterChanged = (status) => ({
    type: types.STATUS_FILTER_CHANGED,
    payload: status
})

export const prioritiesFilterChanged = (priorities) => ({
    type: types.PRIORITIES_FILTER_CHANGED,
    payload: priorities
})