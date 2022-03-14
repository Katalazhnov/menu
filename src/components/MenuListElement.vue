<template>
  <b-list-group-item href="#" class="flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ product.title }}</h5>
      <CartTableCount v-if="count > 0" :data="product" />
      <b-button v-else variant="primary" @click="addToCart(product)">
        {{ product.price }}
      </b-button>
    </div>

    <p class="mb-1">
      {{ product.description }}
    </p>

  </b-list-group-item>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import CartTableCount from "@/components/CartTableCount";

export default {
  name: "MenuListElement",
  components: {CartTableCount},
  props: ['product'],
  data() {
    return {
      count: 0
    }
  },
  methods: {
    ...mapActions(['addToCart']),
    initCount() {
      this.count = this.cart[this.product.id] ?? 0;
    }
  },
  computed: {
    ...mapGetters(['cart', 'cartLength']),
  },
  watch: {
    cartLength() {
      this.initCount();
    }
  },
  mounted() {
    this.initCount();
  },
}
</script>

<style scoped>

</style>