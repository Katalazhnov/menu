<template>
  <b-row class="main__header">
    <b-row>
      <b-col>
        <h1>{{ company.title }}</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-nav>
          <router-link to="/">Меню</router-link> |
          <router-link to="/about">О нас</router-link>
        </b-nav>
      </b-col>
      <b-col>
        <MenuCart />
      </b-col>
    </b-row>
  </b-row>
</template>

<script>
import MenuCart from "@/components/MenuCart";
import {mapGetters} from "vuex";
export default {
  name: 'MenuHeader',
  components: {MenuCart},
  computed: {
    ...mapGetters(['company']),
  },
}
</script>

<style scoped>
  a, h1 {
    color: white;
  }
</style>