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
export const getListPath: string = `${rootURL}admin/list`;
