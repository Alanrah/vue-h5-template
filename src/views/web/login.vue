<template>
    <div class="layout">
        <div>
            <div>
                请输入用户名：
                <el-input
                    placeholder="请输入"
                    v-model="state.account"
                    clearable>
                    </el-input>
            </div>
            <div>
                请输入密码：
                <el-input
                    placeholder="请输入"
                    v-model="state.password"
                    show-password
                >
                    </el-input>
            </div>
            <el-button class="btn" type="primary" @click="submit">登录</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { Message } from 'element-ui';
import { useRouter } from '@/router';
import { usePCLoginStore } from '@/stores/pc-login';

const loginStore = usePCLoginStore();
const router = useRouter();

const state = reactive({
    account: '',
    password: ''
});

async function submit () {
    const res = await loginStore.login({
        account: state.account,
        password: state.password,
        is_backend: true
    });
    if (res.code === 200) {
        Message.success('登陆成功');
        router.replace({});
    } else {
        Message.info(res.message);
    }
}
</script>

<style lang="stylus" scoped>
.layout
    display flex
    align-items center
    justify-content center
.btn
    margin-top 20px
</style>
