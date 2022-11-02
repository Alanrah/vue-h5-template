// 微信的ua： Mozilla/5.0 (Linux; Android 10; ELS-AN00 Build/HUAWEIELS-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4313 MMWEBSDK/20220903 Mobile Safari/537.36 MMWEBID/6388 MicroMessenger/8.0.28.2240(0x28001C35) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64
// ios Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.28(0x18001c2d) NetType/4G Language/zh_CN
export function isInWeixin (userAgent = navigator.userAgent) {
    return /wechat|weixin|MicroMessenger/i.test(userAgent);
}

export function isIOS (userAgent = navigator.userAgent) {
    return /iPhone/i.test(userAgent);
}

export function isAndroid (userAgent = navigator.userAgent) {
    return /Android/i.test(userAgent);
}

// 监听打开该项目的系统
export function isH5 () {
    const machineType = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
    if (machineType === 'Mobile') {
        return true;
    } else {
        return false;
    }
}
