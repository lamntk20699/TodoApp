import {SEARCH_FILTER_CHANGED, STATUS_FILTER_CHANGED, PRIORITY_FILTER_CHANGED} from "./actionTypes"

export const searchFilterChanged = (searchText) => ({
    type: SEARCH_FILTER_CHANGED,
    payload: searchText
});

export const statusFilterChanged = (status = 'All') => ({
    type: STATUS_FILTER_CHANGED,
    payload: status
})

export const priorityFilterChanged = (priorities) => ({
    type: PRIORITY_FILTER_CHANGED,
    payload: priorities
})