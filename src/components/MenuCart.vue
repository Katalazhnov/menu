<template>
  <div class="menu__cart">
    <transition name="fade">
      <router-link v-if="cartLength > 0" to="/cart">
        <b-button id="popover-target-1" variant="primary">Корзина {{ cartLength }}</b-button>
        <b-popover target="popover-target-1" triggers="hover" placement="left">
          {{ cartLength }} товаров на {{ cartSumma }} ₽
        </b-popover>
      </router-link>
    </transition>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "MenuCart",
  computed: {
    ...mapGetters(['cartLength', 'cartSumma']),
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

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
</style>