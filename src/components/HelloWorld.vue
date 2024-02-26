<template>
  <div>
    <!-- <div class="loading" v-if="loading"> Loading...</div>
    <div class="error" v-if="error"> {{ error }}</div>
    <div class="data" v-if="data"> {{ data }}</div> -->
  </div>
</template>

<script>
import { useQuery } from '@vue/apollo-composable';
import { GET_CHARACTERS } from '@/lib';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },

  setup() {
    const { loading, error, data } = useQuery({
      GET_CHARACTERS,
      variables: {
        page: 1,
      },
    }).then((res) => console.log(res)).catch((err) => console.error(err));
    console.log({ data });
    return {
      loading,
      error,
      data,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
