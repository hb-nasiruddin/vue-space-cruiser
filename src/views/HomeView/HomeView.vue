<template>
  <div>
    <div v-if="loading">Loading...</div>
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">Example</h1>
          <p class="lead text-body-secondary">Something short and leading about the collection below—its contents, the
            creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
          <p>
            <a href="#" class="btn btn-primary my-2">Main call to action</a>
            <a href="#" class="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </div>
    </section>
    <section v-if="!loading && result && result.characters" class="py-5 text-center container">
      <div className="container">
        <CharacterList :charactersData="result.characters" />
      </div>
    </section>
  </div>
</template>

<script>
import { useQuery } from '@vue/apollo-composable';
import { GET_CHARACTERS } from '@/lib';
import CharacterList from '@/components/templates/CharacterList/CharacterList.vue';

export default {
  name: 'HomeView',
  components: {
    CharacterList,
  },
  setup() {
    const { loading, error, result } = useQuery(GET_CHARACTERS);
    return {
      loading,
      error,
      result,
    };
  },
};
</script>
