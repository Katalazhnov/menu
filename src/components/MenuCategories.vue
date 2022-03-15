<template>
  <div class="menu__categories">
    <vuescroll mode="native">
      <b-button size="sm" @click="setActiveCategory()" :variant="!activeCategory ? 'primary' : 'info'">Все</b-button>
      <b-button v-for="category in categories" :key="category.id" size="sm" @click="setActiveCategory(category)" :variant="category === activeCategory ? 'primary' : 'info'">{{ category.title }}</b-button>
    </vuescroll>
    <hr>
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
    color: white !important;
    border: none;
    border-radius: 16px;
    padding: 10px 17px;
  }

  .btn-info {
    background-color: #252423;
  }

  .btn-primary {
    background-color: #747269;
  }

  .btn:hover {
    background-color: #747269;
  }

  hr {
    color: #747269;
    background-color: #747269;
    height: 2px;
  }
</style>