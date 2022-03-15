<template>
  <div class="menu__card">
    <div class="card__image">
      <img src="https://picsum.photos/300/300/?image=41">
    </div>
    <div class="card__title">
      {{ product.title }}
    </div>
    <div class="card__description">
      <small>{{ product.volume }} {{ product.metric }}</small>
    </div>
    <div class="card__actions">
      <CartTableCount v-if="count > 0" :data="product" />
      <b-button v-else variant="primary" @click="addToCart(product)">
        {{ product.price }} ₽
      </b-button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import CartTableCount from "@/components/CartTableCount";

export default {
  name: "MenuCard",
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
  .menu__card {
    background-color: #515047;
    color: white;
    border-radius: 30px;
  }

  .card__image {
    margin-bottom: 20px;
  }

  .card__image img {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    width: 100%;
  }

  .card__title, .card__description {
    padding-right: 10px;
    padding-left: 10px;
  }

  .card__title {
    font-size: 18px;
  }

  .card__description {
    color: rgb(135, 135, 135);
  }

  .card__actions {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 64px !important;
  }

  .card__actions .btn-primary {
    background-color: #252423;
    border: none;
    border-radius: 20px;
    padding: 10px 17px;
    width: 100%;
    font-size: 20px;
  }

</style>