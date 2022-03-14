<template>
  <div class="cart__table">
    <div v-if="cartLength > 0">
      <b-table sticky-header small bordered hover :items="items" :fields="fields">
        <template v-slot:cell(count)="data">
          <CartTableCount :data="data.item" />
        </template>
        <template v-slot:cell(summa)="data">
          <CartTableSumma :data="data" />
        </template>
      </b-table>
      <CartSummary />
      <router-link to="/order">Оформить заказ</router-link>
    </div>
    <div v-else>
      <h5>Корзина пуста</h5>
    </div>
  </div>

</template>

<script>
import {mapGetters} from "vuex";
import CartTableCount from "@/components/CartTableCount";
import CartTableSumma from "@/components/CartTableSumma";
import CartSummary from "@/components/CartSummary";

export default {
  name: "CartTable",
  components: {CartSummary, CartTableSumma, CartTableCount},
  computed: {
    ...mapGetters(['cart', 'products', 'cartLength']),
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
      fields: [
        {
          key: 'article',
          label: 'Артикул',
          sortable: true
        },
        {
          key: 'title',
          label: 'Название',
          sortable: true
        },
        {
          key: 'price',
          label: 'Цена',
          sortable: true,
        },
        {
          key: 'count',
          label: 'Количество',
          sortable: true,
        },
        {
          key: 'summa',
          label: 'Сумма',
          sortable: true,
        }
      ],
    }
  }
}
</script>

<style scoped>
  .cart__table {
    background-color: white;
  }
</style>