import request from './index';

/*
    用户相关
*/

export const login = (data) => request.post('/user/login', data);

/**
 * 项目相关
 *
 */
// 获取需求列表
export const getDemand = (data) => request.get('/demand/getDemand', { params: data });
// 添加需求
export const addDemandApi = (data) => request.post('/demand/addDemand', data);
// 删除需求
export const delDemand = (data) => request.delete('/demand/delDemand', { params: data });
// 修改状态
export const editStatus = (data) => request.post('/demand/editStatus', data);
