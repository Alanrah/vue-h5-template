<template>
    <div class="content">
        <van-form @submit="submit">
            <van-field
            v-model="state.mobile"
            label="监护人手机号"
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
            <van-button class="app-button-primary button" native-type="submit"><span class="app-button-text-space">登</span>录</van-button>
        </van-form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { Toast } from 'vant';
import { PhoneReg } from '@/utils/reg';
import { getCaptcha } from '@/services/register';
import { useUserStore } from '@/stores/user';
import { useRouter } from '@/router';

const router = useRouter();

const state = reactive({
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
    const res = await getCaptcha({ type: 'login', mobile: state.mobile });
    if (res.code !== 200) {
        Toast(res.message);
        return;
    }
    state.timeLimit = 60;
    loopCheck();
}

async function submit () {
    const res = await userStore.mobileLogin({
        account: state.mobile,
        captcha: state.captcha
    });
    if (res.code === 200) {
        Toast('登录成功');
        router.replace({});
    } else {
        Toast(res.message);
    }
}
</script>
<style lang="stylus" scoped>
.content
    margin-top 8rpx
    width 100vw
    padding 0px 25rpx 0px 25rpx
.textfield
    margin-bottom 15rpx
    width  315rpx
    height  45rpx
    border-radius 45rpx
    background #EDEDED
.textbtn
    width 28rpx
    height 18rpx
    font-size 18rpx
    font-weight normal
    line-height 18rpx
    color: #F81212;
    margin 20rpx 0px 24rpx 200rpx
</style>
