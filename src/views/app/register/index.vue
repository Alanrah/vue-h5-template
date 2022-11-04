<template>
    <div class="content app-register">
        <van-form @submit="submitRegiste">
            <van-field
                v-model="state.username"
                name="姓名"
                label="姓名"
                placeholder="请输入真实姓名"
                required
                :rules="[{ required: true, }]"
            />
            <van-field
                v-model="state.mobile"
                label="手机号"
                placeholder="请输入正确手机号"
                required
                :rules="[{ required: true, pattern: PhoneReg}]"
            />
                <van-field
                    v-model="state.captcha"
                    center
                    clearable
                    label="验证码"
                    placeholder=""
                    maxlength="6"
                    required
                    :rules="[{ required: true}]"
                >
                    <template #button>
                        <div v-if="!state.timeLimit" class="sms" @click="sendCaptcha">获取验证码</div>
                        <div v-else class="sms">重新发送({{ state.timeLimit }}s)</div>
                    </template>
                </van-field>
            <div>
                <van-button class="button" round block type="info" native-type="submit">提交信息</van-button>
            </div>
        </van-form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { Toast } from 'vant';
import { PhoneReg } from '@/utils/reg';
import { useRouter } from '@/router';
import { useUserStore, isMobileLogin } from '@/stores/user';
import { submitRegister, getCaptcha } from '@/services/register';
import { request } from '@/services/axios';
const router = useRouter();

const state: Record<string, any> = reactive({
    username: '',
    mobile: '',
    captcha: '',
    timeLimit: 0,
    countDownTimer: 0
});

const userStore = useUserStore();
function loopCheck () {
    state.timeLimit--;
    if (state.timeLimit) {
        state.countDownTimer = setTimeout(() => {
            loopCheck();
        }, 1000);
    }
}

async function sendCaptcha () {
    if (!state.mobile || !PhoneReg.test(state.mobile)) {
        Toast('请输入正确手机号');
        return;
    }
    const res = await getCaptcha({ type: 'register', mobile: state.mobile });
    if (res.code !== 200) {
        Toast(res.message);
        return;
    }
    state.timeLimit = 60;
    loopCheck();
}

async function submitRegiste () {
    if (!state.captcha) {
        Toast('请输入验证码');
        return;
    }
    const res = await submitRegister({
        mobile: state.mobile,
        nickname: state.username,
        captcha: state.captcha
    });
    if (res.code === 200) {
        userStore.initUserState(res.data);
        // @ts-ignore
        request.defaults.headers = { Authorization: `${res.data.token}` };
        userStore.isLogin = true;
        isMobileLogin.value = true;
        router.replace({});
        Toast('注册成功');
        return;
    }
    Toast(res.message);
}

</script>
<style lang="stylus" scoped>
.content
    margin-top 8rpx
    width 100vw
    padding 0px 15rpx 0px 15rpx
</style>
