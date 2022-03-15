<template>
  <div class="menu__cart">
    <router-link v-if="cartLength > 0" to="/cart">
      <b-button variant="primary">Корзина {{ cartLength }}</b-button>
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
    border-radius: 15px;
  }

  button {
    margin-right: 5px;
    color: white !important;
    border-radius: 15px;
  }

  .btn-primary, .btn-primary:hover {
    background-color: white;
    color: #000 !important;
    border: 2px solid white !important;
  }

  .router-link-exact-active .btn-primary {
    background-color: #252423;
    color: white !important;
    border: 2px solid #747269 !important;
  }
</style>