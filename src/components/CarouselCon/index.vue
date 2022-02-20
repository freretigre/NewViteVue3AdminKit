<template>
  <div class="norma">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in data" :key="item.id">
        <img class="img" :src="item.img" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
// import {ref, reactive} from 'vue'
const data = [
  {
    id: 1001,
    img: `/src/assets/carouselCon/1.jpeg`,
  },
  {
    id: 1002,
    img: `/src/assets/carouselCon/2.jpeg`,
  },
  {
    id: 1003,
    img: `/src/assets/carouselCon/3.jpeg`,
  },
  {
    id: 1004,
    img: `/src/assets/carouselCon/4.jpeg`,
  },
]
console.log(data);
</script>

<style scoped lang="scss">
@import "./index.scss";

</style>
