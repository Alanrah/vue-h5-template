import { defineStore } from 'pinia';
import { ref } from 'vue';
import { request } from '@/services/axios';

export const isPCLogin = ref(false);

export const usePCLoginStore = defineStore({
    id: 'pc-login',
    state: () => ({
        isLogin: false,
        id: 0,
        nickname: '',
        token: '',
    }),
    getters: {},
    actions: {
        async login (params: any) {
            const res = await request.post<any, any>('/api/1.0/auth/login', params);
            if (res.code === 200) {
                this.isLogin = true;
                isPCLogin.value = true;
                this.id = res.data.id;
                this.nickname = res.data.nickname;
                this.token = res.data.token;
                // @ts-ignore
                request.defaults.headers = { Authorization: `${this.token}`};
            }
            return res;
        },
    },
});
