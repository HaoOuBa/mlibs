import getType from '../type/getType';

/**
 * @description: 校验是否是 QQ 号码
 * @param {str} string
 * @return {Boolean}
 */
export default (str: string): boolean => {
  const datatype = getType(str);
  if (datatype !== 'string') console.warn(`Expected parameter type is string, You passed in ${datatype}`);
  return /^[1-9][0-9]{4,9}$/.test(str);
};