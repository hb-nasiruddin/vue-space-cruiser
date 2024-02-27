<template>
  <CoreImage :src="src" alt="Character Avatar" class="position-relative img-fluid rounded-start" />
</template>

<script>
import CoreImage from '@/components/atoms/CoreImage/CoreImage.vue';

export default {
  name: 'CharacterAvatar',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  components: {
    CoreImage,
  },
};
</script>

<style scoped>
/* Add or customize styles as needed */
</style>
