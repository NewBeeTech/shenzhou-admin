/* @flow */
let rootURL: string = '/api/';
// if(process.env.NODE_ENV === 'production') {
//   rootURL = 'http://xiguawang.com.cn/api/';
// }
if (process.env.APIURL) {
  rootURL = process.env.APIURL+'/api/'
}


// 获取OSS签名
export const GetOSSSignature: string = `${rootURL}oss/web/sign`;

export const getOssImgPath: string = '';

/**
 * 登录地址
 * @type {string}
 */
export const LoginPath: string = `${rootURL}admin/login`;
/**
 * 登出地址
 * @type {string}
 */
export const LogoutPath: string = `${rootURL}admin/logout`;

// 列表
export const getListPath: string = `${rootURL}admin/list`;
// 详情
export const getInfoPath: string = `${rootURL}admin/detail`;
// 修改
export const savePath: string = `${rootURL}admin/save`;

/************************用户管理**************************/
// 余额变更
export const updatecashPath: string = `${rootURL}admin/changebalance`;

// 用户状态修改
export const changeUserStatePath: string = `${rootURL}admin/banuser`;


/************************账号管理**************************/
// 账号列表
export const getAccountListPath: string = `${rootURL}admin/listUser`;

// 账号新增
export const addAccountPath: string = `${rootURL}admin/addUser`;

// 账号删除
export const deleteAccountPath: string = `${rootURL}admin/deleteUser`;

/************************订单管理**************************/

// 退单
export const drawBackPath: string = `${rootURL}admin/drawback`;

/************************配置管理**************************/
// 设置banner
export const setBannerPath: string = `${rootURL}admin/setbanner`;

// 动态ID删除
export const closeStateIdPath: string = `${rootURL}admin/delete`;

export const getTypeListPath: string = `${rootURL}admin/gettype`;
// 品类设置
export const setTypePath: string = `${rootURL}admin/settype`;

// 推送
export const pushPath: string = `${rootURL}msg/push`;

/************************技能审核管理**************************/

//修改技能审核
export const updateSkillPath: string = `${rootURL}admin/skillreview`;

/************************H5页面**************************/

// 用户主页
export const shareUserPath: string = `${rootURL}user/getUserInfoNoLogin`;

// 提现列表
export const getTiXianListPath: string = `${rootURL}admin/cashRecord/list`;

// 修改提现备注
export const updateRemarkPath: string = `${rootURL}admin/cashRecord/updateRemark`;

// 提现申请
export const tixianPath: string = `${rootURL}user/cash`;

// 获取验证码
export const getCodePath: string = `${rootURL}user/getCode`;

// 举报的动态
export const getreportDynListPath: string = `${rootURL}complain/listFeed`;
// 举报的用户
export const getreportUserListPath: string = `${rootURL}complain/listUser`;
// 封禁被举报的动态
export const blockFeedPath: string = `${rootURL}complain/blockFeed`;
// 举报被举报的用户
export const blockUserPath: string = `${rootURL}complain/blockUser`;
// 修改备注
export const updateCommentPath: string = `${rootURL}complain/comment`;
// 修改抽成比例
export const changePercentagePath: string = `${rootURL}admin/changePercentage`;
// // 移动端 举报动态
// export const complainFeed: string = `${rootURL}feed/complain`;
// // 移动端 举报用户
// export const complainUser: string = `${rootURL}user/complain`;
// 移动端 举报用户
export const changeOrderState: string = `${rootURL}admin/processOrder`;
