<template>
  <div class="cart__table">
    <h3 class="header">Заказ</h3>
    <div v-if="cartLength > 0">
      <b-row class="cart__row" v-for="item in items" :key="item.id">
        <b-col cols="2" class="cart__image">
          <b-img-lazy :src="item.image"/>
        </b-col>
        <b-col class="cart__title">
          <span>{{ item.title }}</span>
          <b-col class="cart__count">
            <CartTableCount :data="item" />
          </b-col>
        </b-col>
        <b-col cols="3"  align="center" class="cart__summa">
          <CartTableSumma :data="item" />
        </b-col>
      </b-row>
      <b-row class="cart__summary">
        <b-col align="right">
          <router-link to="/order">
            <b-button size="lg" variant="primary">Оформить заказ на {{ cartSumma }} ₽</b-button>
          </router-link>
        </b-col>
      </b-row>
    </div>
    <div class="cart__empty" v-else>
      <h5>Корзина пуста</h5>
    </div>
  </div>

</template>

<script>
import {mapGetters} from "vuex";
import CartTableCount from "@/components/CartTableCount";
import CartTableSumma from "@/components/CartTableSumma";

export default {
  name: "CartTable",
  components: {CartTableSumma, CartTableCount},
  computed: {
    ...mapGetters(['cart', 'products', 'cartLength', 'cartSumma']),
  },
  mounted() {
    this.initCount();
  },
  methods: {
    initCount() {
      this.items = [];
      this.cart.forEach((value, index) =>  {
        let product = this.products.find(el => el.id === index);
        if (value > 0) {
          product.count = value;
          this.items.push(product);
        }
      })
    }
  },
  watch: {
    cartLength() {
      this.initCount();
    }
  },
  data() {
    return {
      items: [],
    }
  }
}
</script>

<style scoped>
  .cart__row {
    color: white;
    display: flex;
    align-items: center;
    border-top: 1px solid white;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .cart__row:nth-child(1) {
    border: none !important;
  }

  .cart__image {
    padding: 0;
  }
  .cart__image img {
    width: 100%;
  }

  .cart__title {
    font-size: 20px;
  }

  .cart__count {
    padding-top: 15px;
    max-width: 200px;
  }

  .cart__summa, .cart__count {
    font-size: 25px;
  }

  .cart__summary {
    padding-top: 20px;
  }

  .cart__summary .btn {
    background-color: white;
    color: #000000;
    border: none;
    border-radius: 15px;
  }

  .cart__empty {
    font-size: 30px;
    color: white;
  }

  .header {
    color: white;
  }

</style>