/**
 * Happy Hacking
 * Created by leiyouwho on 14/5/2016.
 */
import { notification } from 'antd';
/**
 *
 * @param message 标题
 * @param description 描述
 * @param type 类型
 * @param duration 持续时间
 */
export default (message: string, description: string, type = 'info', duration = 2) => {
  notification[type]({
    message,
    description,
    duration,
  });
};
