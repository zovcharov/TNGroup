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

    Post(controller, param, data) {
        const token = data && data.curProjectId ?
            `${localStorage.getItem('access_token')};currPr=${data.curProjectId}` :
            localStorage.getItem('access_token')

        return axios({
            method: 'post',
            url: `http://${this.apiUrl}/api/${controller}${param ? '/' + param : ''}`,
            data,
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(res => res.data)
            .catch(e => {
                if (e.response.status === 401) {
                    return this.UpdateToken('post', controller, func, data)
                }
            })
    }

    Get(controller, param, data) {
        const token = data && data.curProjectId ?
            `${localStorage.getItem('access_token')};currPr=${data.curProjectId}` :
            localStorage.getItem('access_token')

        return axios({
            method: 'get',
            url: `http://${this.apiUrl}/api/${controller}${param ? '/' + param : ''}`,
            data,
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(res => res.data)
            .catch(e => {
                if (e.response.status === 401) {
                    return this.UpdateToken('get', controller, func, data)
                }
            })
    }

    UpdateToken(methon, controller, func, data) {
        return axios({
            method: 'post',
            url: `http://${this.apiUrl}/api/Auth/updateToken`,
            data: {
                clientName: 'MainProject',
                refreshToken: localStorage.getItem('refresh_id'),
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            }
        })
            .then(res => {
                if (methon === 'post') {
                    return this.Post(controller, func, data);
                }

                return this.Get(controller, func, data);
            })
            .catch(e => {
            })
    }
}

const Provider = new ApiProvider();

export default Provider;
