<template>
    <div class="main">
        <button @click="handleExit">退出登录</button>

    </div>
</template>


<script setup lang='ts'>
import useCounterStore from '@/store/counter';
import { localCache } from '@/utils/cache';
import { useRouter } from 'vue-router';
const router = useRouter()
const handleExit = () => {
    localCache.removeCache('token')
    router.push('/login')
}

</script>


<style scoped lang='less'>
.main {}
</style>