<template>
    <div class="header">
        <div class="header-icon">管理系统</div>
        <div class="user-info" v-if="loginStore.isLogin">
            <img src="https://w2.kskwai.com/udata/pkg/cloudcdn/img/logo-cili.6035c8d4.png">
            <div class="name">{{loginStore.nickname}}</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { usePCLoginStore } from '@/stores/pc-login';

const loginStore = usePCLoginStore();

</script>
<style lang="stylus" scoped>
.header
    height 100%
    display flex
    justify-content space-between
    align-items center
    margin 0 20px
    &-icon
        width 196px
        height 28px
    .user-info
        display flex
        align-items center
        img
            width 32px
            height 32px
            border 1px solid primary-border-color
            border-radius 50%
            margin-right 12px
        .name
            font-size 12px
            font-family PingFangHK, PingFangHK-Regular
            font-weight 400
            text-align left
            color primary-text-color
            line-height 12px
</style>
