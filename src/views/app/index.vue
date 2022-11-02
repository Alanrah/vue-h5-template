<template>
    <router-view></router-view>
</template>
<script setup lang="ts">
import { useRouter, useRoute } from '@/router';
import { useUserStore } from '@/stores/user';

const route = useRoute();
const router = useRouter();

const userStore = useUserStore();
async function updateLogin () {
    await userStore.checkToken();
}

updateLogin();
</script>
