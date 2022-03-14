<template>
  <div class="menu__categories">
    <vuescroll mode="native">
      <b-button size="sm" @click="setActiveCategory()" :variant="!activeCategory ? 'primary' : 'info'">Все</b-button>
      <b-button v-for="category in categories" :key="category.id" size="sm" @click="setActiveCategory(category)" :variant="category === activeCategory ? 'primary' : 'info'">{{ category.title }}</b-button>
    </vuescroll>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import vuescroll from 'vuescroll';

export default {
  name: "MenuCategories",
  components: {
    vuescroll
  },
  computed: {
    ...mapGetters(['categories', 'activeCategory']),
  },
  methods: {
    ...mapActions(['setActiveCategory']),
  },
}
</script>

<style scoped>
  .menu__categories {
    margin-bottom: 10px;
  }

  button {
    margin-right: 5px;
  }
</style>