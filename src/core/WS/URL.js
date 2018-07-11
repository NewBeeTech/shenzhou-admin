/* @flow */
let rootURL: string = '/api/';
// if(process.env.NODE_ENV === 'production') {
//   rootURL = 'http://xiguawang.com.cn/api/';
// }
if (process.env.APIURL) {
  rootURL = process.env.APIURL+'/api/'
}


/**
 * 登录地址
 * @type {string}
 */
export const LoginPath: string = `${rootURL}admin/login`;

// 列表
export const getSupportListPath: string = `${rootURL}admin/list`;

// 删除公告
export const delDynamicPath: string = `${rootURL}`;

// 新增公告
export const addDynamicPath: string = `${rootURL}`;

// 修改公告
export const updateDynamicPath: string = `${rootURL}`;

// 上传OSS
export const GetOSSSignature: string = `${rootURL}`;
