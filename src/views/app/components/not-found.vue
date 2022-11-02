<template>
    <van-empty description="页面消失了">
        <van-button @click="goHome">
            去首页
        </van-button>
    </van-empty>
</template>
<script setup lang="ts">
import { reactive, onBeforeMount } from 'vue';
import { useRouter, useRoute } from '@/router';

const router = useRouter();
function goHome () {}
</script>
