<template>
    <div class="main">
        {{ useCounter.counter }} --- {{ useCounter.doubleCounter }}
        <button @click="change">修改</button>
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
    </div>
</template>


<script setup lang='ts'>
import useCounterStore from '@/store/counter';
const useCounter = useCounterStore()
const change = () => {
    useCounter.changeCounter(999)
}

</script>


<style scoped lang='less'>
.main {}
</style>