<template>
  <div>
    <b-button size="sm" @click="subFromCart(data)" class="mr-1" variant="primary">-</b-button>
    {{ count }}
    <b-button size="sm" @click="addToCart(data)" class="mr-1" variant="primary">+</b-button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CartTableCount",
  props: ['data'],
  data() {
    return {
      count: 0,
    }
  },
  computed: {
    ...mapGetters(['cart', 'cartLength']),
  },
  methods: {
    ...mapActions(['addToCart', 'subFromCart']),
    initCount() {
      if (this.cart[this.data.id]) {
        this.count = this.cart[this.data.id];
      }
    }
  },
  mounted() {
    this.initCount();
  },
  watch: {
    cartLength() {
      this.initCount();
    }
  },
}
</script>

<style scoped>

</style>