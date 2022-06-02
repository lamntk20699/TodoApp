import axiosClient from "./axiosClient";

const todoApi = {
    getAll: (params) => {
        const url = '/accounts/1/todoList';
        return axiosClient.get(url, { params });
    },

    get: (accountID) => {
        const url = `/accounts/${accountID}/todoList`;
        return axiosClient.get(url);
    },

    postTodo: (accountID, data) => {
        const url = `/accounts/${accountID}/todoList`;
        return axiosClient.post(url, data);
    },

    deleteTodo: (accountID, todoID) => {
        const url = `/accounts/${accountID}/todoList/${todoID}`;
        return axiosClient.delete(url);
    },

    editTodo: (accountID, todoID, data) => {
        const url = `/accounts/${accountID}/todoList/${todoID}`;
        return axiosClient.put(url, data);
    }
}

export default todoApi;