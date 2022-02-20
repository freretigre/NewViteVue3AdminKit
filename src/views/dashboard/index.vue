<template>
  <div>
    <h1>Dashboard page</h1>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <ConfigI18n />
    <CarouselCon />
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
// import ConfigI18n from '@/components/ConfigI18n/index.vue';

export default {
  name: 'Dashboard',
  setup(props, next){
    const router = useRouter();
    onMounted(() => {
      console.log("props", props);
      console.log("next", next);
      console.log("useRouter", router);
    });
  }
}
</script>