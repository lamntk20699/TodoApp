import axiosClient from "./axiosClient";

const todoApi = {
    getAll: (params) => {
        const url = '/accounts/1/todoList';
        return axiosClient.get(url, {params});
    },

    get: (id) => {
        const url = `/accounts/${id}/todoList`;
        return axiosClient.get(url, {params});
    },
}

export default todoApi;