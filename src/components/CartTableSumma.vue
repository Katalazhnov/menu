<template>
  <div>
    {{ summa }} ₽
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CartTableSumma",
  props: ['data'],
  data() {
    return {
      summa: 0,
    }
  },
  computed: {
    ...mapGetters(['cart', 'cartLength']),
  },
  methods: {
    ...mapActions(['addToCart', 'subFromCart']),
    initSumma() {
      if (this.cart[this.data.id]) {
        this.summa = this.cart[this.data.id] * this.data.price;
      }
    }
  },
  mounted() {
    this.initSumma();
  },
  watch: {
    cartLength() {
      this.initSumma();
    }
  },
}
</script>

<style scoped>

</style>