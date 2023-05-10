<template>
    <div class="main">
        <el-container>
            <el-aside width="200px">
                <MainAside />
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script setup lang='ts'>
import MainAside from '@/components/layout/MainAside.vue';
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
.main {
    height: 100%;

    .el-container {
        height: 100%;
    }
}
</style>