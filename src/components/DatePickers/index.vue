<template>
  <div class="norma">
    <div class="block">
      <span class="demonstration">快速选项</span>
      <el-date-picker
          v-model="value2"
          type="daterange"
          unlink-panels
          range-separator="到"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          :shortcuts="shortcuts"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value2 = ref('')

const shortcuts = [
  {
    text: '上个星期',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: '上个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: '过去 3 个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
