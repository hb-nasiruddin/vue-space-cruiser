<template>
  <div class="row character-list" v-if="charactersData && charactersData.results">
    <CharacterCard
      v-for="(character) in charactersData.results"
      :key="character.id"
      :character="character" />
  </div>
</template>

<script>
import CharacterCard from '@/components/organisms/CharacterCard/CharacterCard.vue';

export default {
  name: 'CharacterList',
  props: {
    charactersData: {
      type: Object,
      required: true,
    },
  },
  components: {
    CharacterCard,
  },
};
</script>

<style scoped>
/* Add or customize styles as needed */
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
