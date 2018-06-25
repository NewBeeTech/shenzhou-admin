import 'react-fastclick';
// antd 样式
require('antd/dist/antd.min.css');
// 覆盖样式
require('./assets/stylesheets/antd.css');
require('antd-mobile/dist/antd-mobile.css');
// require('./core/IM/');

// import { initMonitor } from './core/monitor/crashMonitor';
// import AppInfo from '../AppInfo';
import { AppRegistry } from './AppRegistry';
// import userInfoStorage from './core/UserInfoStorage';


// /**
//  * 初始化异常捕获监控
//  */
// if (AppInfo.prod) {
//   initMonitor();
// }

/**
 * 挂载 web app
 */
AppRegistry();
