import {SEARCH_FILTER_CHANGED, STATUS_FILTER_CHANGED, PRIORITIES_FILTER_CHANGED} from "./actionTypes"

export const searchFilterChanged = (searchText) => ({
    type: SEARCH_FILTER_CHANGED,
    payload: searchText
});

export const statusFilterChanged = (status) => ({
    type: STATUS_FILTER_CHANGED,
    payload: status
})

export const prioritiesFilterChanged = (priorities) => ({
    type: PRIORITIES_FILTER_CHANGED,
    payload: priorities
})