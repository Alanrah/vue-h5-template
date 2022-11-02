export const isProduction = window.location.href.includes('prod.com.cn');
export const isTest = window.location.href.includes('dev.com.cn');
export const isDev = !isProduction && !isTest;

export const PageSize = 10;

export const PROD_HOST = 'https://prod.com.cn';
export const TEST_HOST = 'https://dev.com.cn';
export const CURR_HOST = window.location.origin;

// 测试环境和线上的访问路径前缀不一样，正常情况下都是一样的
export const PROD_prefix = '/app/prod';
export const TEST_prefix = '/app/test';
export const CURR_prefix = isProduction ? PROD_prefix : TEST_prefix;
export const AXIOS_BASE_URL = isProduction ? '/api/prod' : (isTest ? '/app/test' : '/');
