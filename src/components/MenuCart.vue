<template>
  <div class="menu__cart">
    <router-link v-if="cartLength > 0" to="/cart">
      <button id="myButton" class="foo bar">Корзина {{ cartLength }}</button>
    </router-link>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "MenuCart",
  computed: {
    ...mapGetters(['cartLength']),
  },
}
</script>

<style scoped>
  .menu__cart {
    text-align: right;
  }
</style>