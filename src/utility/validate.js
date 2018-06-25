/**
 * 验证手机号码
 * 验证规则: 11位数字，以1开头。
 * @param cellPhoneNumber
 * @returns {boolean}
 */
export const validCellPhoneNumber = (cellPhoneNumber: string) => {
  const re = /^1\d{10}$/;
  return re.test(cellPhoneNumber);
};

/**
 * 验证验证码格式
 * 验证规则 6位数字
 * @param verificationCode
 * @returns {boolean}
 */
export const validVerificationCode = (verificationCode: string) => {
  const re = /^\d{6}$/;
  return re.test(verificationCode);
};

/**
 * 验证参数
 * 验证规则: 不为null undefined, 必须为字符串。
 * @param params
 * @returns {boolean}
 */
export const validparams = (params: string) => {
  const re = /^[^\s]*＄/;
  return re.test(params);
};

