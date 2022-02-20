<template>
  <div class="norma">
    <h1> i18n 配置#</h1>
    <p>通过 Config Provider 来配置多语言，让你的应用可以随时切换语言。</p>
    <p>使用两个属性来提供 i18n 相关配置</p>
    <el-config-provider :locale="localeData">
      <el-color-picker :model-value="colorPicker" @change="handleColorPicker" v-model="colorPicker" style="vertical-align: middle"/>
    </el-config-provider>
    <el-button style="margin-left: 8px; vertical-align: middle" @click="toggle">
       Switch Lang-{{localeData.title}}
    </el-button>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'


const locale1 = ref({
  name: 'zh-cn',
  title: '中文',
  el: {
    colorpicker: {
      confirm: '确定',
      clear: '清空',
    },
  },
})
const locale2 = ref({
  name: 'en',
  title: '英文',
  el: {
    colorpicker: {
      confirm: 'Confirm',
      clear: 'Clear',
    },
  },
})

let flag = false;
let localeData = ref(locale1.value);
const toggle = () => {
  flag = !flag;
  if(flag){
    localeData.value = locale1.value;
    console.log("中文: ", flag, localeData.value, color1.value)
  }else{
    localeData.value = locale2.value;
    console.log("英文: ", flag, localeData.value, color1.value)
  }
}


const color1 = ref('#409EFF')
const colorPicker = ref(color1.value);
const handleColorPicker = (event) => {
  console.log("event: ", event)
  colorPicker.value = event;
}
</script>

<style scoped>
@import "./index.scss";
</style>
