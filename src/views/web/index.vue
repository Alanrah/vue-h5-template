<template>
    <el-container class="pc-layout">
        <el-header height="48px">
            <header-content></header-content>
        </el-header>
        <el-container class="layout">
            <WebAside></WebAside>
            <el-main class="main">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import HeaderContent from './components/pc-header.vue';
import WebAside from './components/web-aside.vue';

</script>

<style lang="stylus" scoped>
:deep()
    .el-header
        background outline-bg-color
        box-shadow 0px 1px 5px 0px rgba(17, 22, 35, 0.1), 0px 1px 0px 0px rgba(0, 0, 0, 0.1)
        z-index 5
.layout
    display flex
.pc-layout
    height 100vh
.main
    height calc(100vh - 48px)
    overflow auto
</style>
