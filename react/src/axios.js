import axios from 'axios';
import _ from 'lodash';
require('dotenv').config();

const instance = axios.create({
    // baseURL: 'http://localhost:8080',
    baseURL: 'http://54.169.68.138:8888',
    withCredentials: true
});


instance.interceptors.response.use(
    (response) => {
        const { data } = response;
        return response.data;
    }
)

export default instance;
