<template>
  <div class="col-xs-12 col-md-6 col-lg-4 character-list-item">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <CharacterAvatar :src="character.image" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ character.name }}</h5>
            <p class="card-text">Gender: {{ character.gender }}</p>
            <p class="card-text">Species: {{ character.species }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CharacterAvatar from '@/components/molecules/CharacterAvatar/CharacterAvatar.vue';

export default {
  name: 'CharacterCard',
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  components: {
    CharacterAvatar,
  },
};
</script>

<style scoped>
/* Add or customize styles as needed */
</style>
