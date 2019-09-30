import axios from 'axios';
import config from './../config/index';

class ApiProvider {
    constructor() {
        if (typeof ApiProvider.instance === 'object') {
            return ApiProvider.instance;
        }

        this.config = config;
        this.apiUrl = `${config.apiHost}:${config.apiPort}`;

        ApiProvider.instance = this;
        return this;
    }

    SetAccessToken(token) {
        this.config.accessToken = token;
    }

    Post(controller, func, data) {
        return axios({
            method: 'post',
            url: `http://${this.apiUrl}/${controller}/${func}`,
            data,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            }
        }).then(res => res.data);
    }

    Get(controller, func, data) {
        return axios({
            method: 'get',
            url: `http://${this.apiUrl}/${controller}/${func}`,
            data,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            }
        }).then(res => res.data);
    }
}

const Provider = new ApiProvider();

export default Provider;
