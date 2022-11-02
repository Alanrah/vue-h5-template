<template>
    <el-aside class="side" width="200">
        <el-menu
            :router="true"
            :default-active="defaultActive"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
        >
            <el-submenu index="1">
                <template v-slot:title>
                    <i class="el-icon-location"></i>
                    <span>用户管理</span>
                </template>
                <el-menu-item index="/pc/user"> 用户列表</el-menu-item>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter, useRoute } from '@/router';

const route = useRoute();
const router = useRouter();

const defaultActive = computed(() => {
    return route.path.slice(9) || '/pc/user';
});

</script>

<style lang="stylus" scoped>
.side,
ul
    width 200px
    height calc(100vh - 48px)
</style>
