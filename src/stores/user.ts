import { defineStore } from 'pinia';
import { request } from '@/services/axios';
import { ref } from 'vue'

export const isMobileLogin = ref(false);
export const useUserStore = defineStore({
    id: 'userStore',
    state: () => ({
        isLogin: false,
        mobile: '',
        nickname: '',
    }),
    getters: {},
    actions: {
        initUserState (user: any) {
            this.mobile = user.mobile || '';
      this.nickname = user.nickname || '';
    },

        async getUserInfo () {
            const res: any = await request.get('/api/1.0/auth/check/token');
            if (res.data?.id) {
                this.initUserState(res.data);
            }
        },

        async mobileLogin (params: any) {
            const res: any = await request.post('/api/1.0/auth/front', params);
            if (res.code === 200) {
                this.isLogin = true;
        isMobileLogin.value = true;
        // @ts-ignore
        request.defaults.headers = { Authorization: `${res.data.token}` };
                this.initUserState(res.data);
      }
            return res;
    },
        async checkToken () {
            const res: any = await request.get('/api/1.0/auth/check/token');
            if (res.code === 200) {
                this.isLogin = true;
        isMobileLogin.value = true;
        this.initUserState(res.data);
            }
        },
    },
});
