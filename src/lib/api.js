import axios from 'axios';

const baseUrl = "http://localhost:5000";

const singup = async (user) => {
    try {
        const response = await axios.post(baseUrl + '/api/users/signup', { user });
        return response.data;
    } catch (err) {
        return err;
    }
}
const login = async (user) => {
    try {
        const response = await axios.post(baseUrl + '/api/users/login', { user });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

const getUserById = async (id) => {
    try {
        const response = await axios.get(baseUrl + `/api/users/${id}`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

const updateUser = async (id, userInfo) => {
    try {
        const response = await axios.put(baseUrl + `/api/users/${id}`, { userInfo });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export {
    singup, login, getUserById, updateUser
};