<template>
    <router-view></router-view>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
async function updateLogin () {
    await userStore.checkToken();
}

updateLogin();
</script>
