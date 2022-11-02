import Vue from 'vue';
import VueRouter from 'vue-router';
import { isPCLogin } from '@/stores/pc-login';
import { CURR_prefix } from '@/utils/const';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: CURR_prefix,
    routes: [
    // pc web 的 routes
        {
            path: '/pc',
            name: 'pcHome',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: async () => await import('@/views/web/index.vue'),
            children: [
                {
                    path: 'login',
                    name: 'pcLogin',
                    component: async () => await import('@/views/web/login.vue')
                }

            ]
        },
        // 移动端 app 的routes
        {
            path: '/mobile',
            name: 'app',
            component: async () => await import('@/views/app/index.vue'),
            children: [{
                path: 'login', // 登录
                name: 'mobileLogin',
                component: async () => await import('@/views/app/login/index.vue')
            },

            {
                path: 'register', // 个人中心-编辑信息
                name: 'register',
                component: async () => await import('@/views/app/register/index.vue')
            }
            ]
        },
        {
            path: '*', // 404
            name: 'notFound',
            component: async () => await import('@/views/app/components/not-found.vue'),
            meta: {
                title: '该页面不存在'
            }
        }
    ]
});

router.beforeEach(async (to, from, next) => {
    if (to.fullPath.includes('pc')) {
        if (isPCLogin.value || to.name === 'pcLogin') {
            next();
        } else {
            next({
                name: 'pcLogin',
                replace: true
            });
        }
        return;
    }
    next();
});
export default router;

export function useRouter () {
    return router;
}

export function useRoute () {
    return router.currentRoute;
}
