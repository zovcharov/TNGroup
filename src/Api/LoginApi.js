import ApiProvider from './../ApiProvider/ApiProvider';

const setInfoToStorage = (access_token, refresh_id) => {
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_id', refresh_id);

    setTimeout(() => {
        ApiProvider.Post('Auth', 'updateToken', {
            clientName: 'MainProject',
            Refresh_id: refresh_id,
        }).then(data => setInfoToStorage(data.access_token, data.refresh_id));
    }, 600000)
};

export const Login = (userName, password) => {
    return ApiProvider.Post('Auth', '', {
        clientName: 'MainProject',
        userName,
        password
    }).then(data => {
        setInfoToStorage(data.access_token, data.refresh_id);
    })
};

export const Logout = () => {

};
