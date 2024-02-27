<template>
  <img :src="src" :alt="alt"/>
</template>

<script>
export default {
  name: 'CoreImage',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
};
</script>
