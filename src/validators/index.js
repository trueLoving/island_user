/**
 * 判断值是否为空,undefined 或者 null
 * @param {Any} value 
 */
export function isNotEmpty(value, key, msg) {
    if (value == '' || value == undefined || value == null) {
        msg[key] = '输入内容不能为空';
        return false;
    } else {
        return true;
    }
}


/**
 * 判断邮箱是否符合格式
 * @param {String} email 邮箱
 */
export function validateEMail(email, key, msg) {
    const reg = /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
    if (reg.test(email)) {
        return true;
    } else {
        msg[key] = '邮箱格式不正确';
        return false;
    }
}
