<template>
  <div>
    <h1>Dashboard page</h1>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <ConfigI18n />
    <CarouselCon />

    <SvgIcon name="cake"></SvgIcon>

    <DatePickers />
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
// import ConfigI18n from '@/components/ConfigI18n/index.vue';

export default {
  name: 'Dashboard',
  setup(props: any, next: any){
    const router = useRouter();
    onMounted(() => {
      console.log("props", props);
      console.log("next", next);
      console.log("useRouter", router);
    });

    const sayHi = () => {
      alert('hi svg')
    }
    return {
      sayHi
    }
  }
}
</script>

<style lang="scss">
.custom-class { // 自定义样式404
  font-size: 200px;
  color: green;
}
</style>