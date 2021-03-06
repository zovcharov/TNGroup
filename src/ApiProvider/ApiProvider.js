/* eslint-disable consistent-return */

import axios from 'axios';
import config from '../config/index';
// eslint-disable-next-line import/no-cycle
import { store } from '../index';
import { resetState } from '../redux/actions';

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

    Post(controller, param, data, headers) {
        const token = data && data.curProjectId
            ? `${localStorage.getItem('access_token')};currPr=${data.curProjectId}`
            : localStorage.getItem('access_token');

        const head = Object.assign({}, headers, {
            Authorization: `Bearer ${token}`,
        });

        return axios({
            method: 'post',
            url: `http://${this.apiUrl}/api/${controller}${param ? `/${param}` : ''}`,
            data,
            headers: head,
        })
            .then((res) => res.data)
            .catch((e) => {
                if (e.response.status === 401) {
                    return this.UpdateToken('post', controller, param, data);
                }
            });
    }

    PostFile(controller, param, data, projectId) {
        const token = projectId
            ? `${localStorage.getItem('access_token')};currPr=${projectId}`
            : localStorage.getItem('access_token');

        const requestConfig = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
            },
        };

        return axios
            .post(`http://${this.apiUrl}/api/${controller}${param ? `/${param}` : ''}`, data, requestConfig)
            .then((res) => res.data);
    }

    Get(controller, param, data) {
        const token = data && data.curProjectId
            ? `${localStorage.getItem('access_token')};currPr=${data.curProjectId}`
            : localStorage.getItem('access_token');

        return axios({
            method: 'get',
            url: `http://${this.apiUrl}/api/${controller}${param ? `/${param}` : ''}`,
            data,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.data)
            .catch((e) => {
                if (e.response.status === 401) {
                    return this.UpdateToken('get', controller, param, data);
                }

                throw (e);
            });
    }

    Put(controller, param, data) {
        const token = data && data.curProjectId
            ? `${localStorage.getItem('access_token')};currPr=${data.curProjectId}`
            : localStorage.getItem('access_token');

        return axios({
            method: 'put',
            url: `http://${this.apiUrl}/api/${controller}${param ? `/${param}` : ''}`,
            data,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.data)
            .catch((e) => {
                if (e.response.status === 401) {
                    return this.UpdateToken('get', controller, param, data);
                }
            });
    }

    UpdateToken(method, controller, param, data) {
        return axios({
            method: 'post',
            url: `http://${this.apiUrl}/api/Auth/updateToken`,
            data: {
                clientName: 'MainProject',
                refresh_id: localStorage.getItem('refresh_id'),
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
        })
            .then(() => {
                if (method === 'post') {
                    return this.Post(controller, param, data);
                }

                return this.Get(controller, param, data);
            })
            .catch(() => {
                localStorage.removeItem('UserId');
                localStorage.removeItem('UserRoles');
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_id');
                store.dispatch(resetState());
                window.location.hash = '#/login';
            });
    }

    Delete(controller, param, data) {
        const token = data && data.curProjectId
            ? `${localStorage.getItem('access_token')};currPr=${data.curProjectId}`
            : localStorage.getItem('access_token');

        return axios({
            method: 'delete',
            url: `http://${this.apiUrl}/api/${controller}${param ? `/${param}` : ''}`,
            data,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.data)
            .catch((e) => {
                if (e.response.status === 401) {
                    return this.UpdateToken('get', controller, param, data);
                }
            });
    }
}

const Provider = new ApiProvider();

export default Provider;
