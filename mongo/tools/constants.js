module.exports = {
    SUCCESS              : 0, // 请求正常
    FAIL                 : 1, // 请求失败
    // 用户类 1000
    USERNAME_CANT_FIND   : 1001, // 无该用户名
    WRONG_PASSWORD       : 1002, // 密码错误
    NO_SIGNIN            : 1003, // 未登录
    USERNAME_ERROR       : 1004, // 缺少用户名
    PASSWORD_ERROR       : 1005, // 缺少密码
    REPASSWORD_ERROR     : 1006,  // 缺少重复密码
    REQUIRELEVEL2        : 1007,
    REQUIRELEVEL3        : 1008,
    NEWPASSWORD_ERROR    : 1009, //缺少新密码
    PASSWORD_DIFFER      : 1010, //重复密码不一致
    DELETED_ERROR        : 1011, //用户已注销
};
