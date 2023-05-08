import request from './index';

/*
    用户相关
*/

export const login = (data) => request.post('/user/login', data);
