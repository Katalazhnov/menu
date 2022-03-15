<template>
  <div class="product__count row">
    <b-col>
      <b-button @click="subFromCart(data)" class="left" variant="primary">-</b-button>
    </b-col>
    <b-col>
      <span>{{ count }}</span>
    </b-col>
    <b-col>
      <b-button @click="addToCart(data)" class="right" variant="primary">+</b-button>
    </b-col>
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
.product__count {
  display: flex;
  align-items: center;
}
.product__count .btn-primary {
    background-color: #252423;
    border: none;
    border-radius: 20px;
    padding: 0;
    width: 60px;
    font-size: 30px;
    text-align: center;
  padding-bottom: 5px;
  }
</style>