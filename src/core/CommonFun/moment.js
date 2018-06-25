import moment from 'moment';
const weeks = ['日', '一', '二', '三', '四', '五', '六'];
// 获取活动时间
export const getActivityTime = (startTime, endTime) => {
  if(startTime && endTime) {
    const date = moment(startTime).format('MM/DD');
    const week = moment(startTime).format('d');
    const start = moment(startTime).format('HH:mm');
    const end = moment(endTime).format('HH:mm');
    return `${date} (${weeks[week]}) ${start}-${end}`;
  }
}