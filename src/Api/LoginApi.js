import ApiProvider from './../ApiProvider/ApiProvider';

export const Login = (userName, password) => {
    return ApiProvider.Post('Auth', '', {
        clientName: 'MainProject',
        userName,
        password
    }).then(data => {
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_id', data.refresh_id);
    })
};

export const Logout = () => {

};
