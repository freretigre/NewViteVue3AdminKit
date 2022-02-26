<template>
  <svg aria-hidden="true" @click="handleSvg">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script lang="ts">
import { computed } from 'vue';
import * as events from "events";


export default {
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#333',
    },
  },
  setup(props:{prefix: string, name: string}) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)

    const handleSvg = (event: events) => {
      // console.log("symbolId", symbolId);
      console.log("handleSvg", event);
    }
    return {
      symbolId,
      handleSvg,
    }
  },
}
</script>
