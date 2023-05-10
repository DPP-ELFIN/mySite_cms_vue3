<template>
    <div class="not_found">
        <img src="@/assets/img/404.png" alt="">
        <h1>页面未找到！</h1>
        <el-button type="danger" size="large" @click="goBack">返回</el-button>
    </div>
</template>


<script setup lang='ts'>
import { useRouter } from 'vue-router';

const router = useRouter()
const goBack = () => {
    router.back()
}

</script>


<style scoped lang='less'>
.not_found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
}
</style>