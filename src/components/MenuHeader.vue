<template>
  <div class="main__header">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ company.title }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <b-nav>
          <router-link to="/">Меню</router-link> |
          <router-link to="/about">О нас</router-link>
        </b-nav>
      </div>
      <div class="col-sm-6">
        <MenuCart />
      </div>
    </div>
  </div>

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