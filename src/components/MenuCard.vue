<template>
  <div class="menu__card">
    <div class="card__image">
      <transition name="fade">
      <div v-if="count > 0" class="card__summary">
        <div>
          <span class="count">{{ count }}</span>
          <span class="summa">{{ summa }} ₽</span>
        </div>
      </div>
      </transition>
      <img src="https://img.freepik.com/free-photo/beer-glass-in-front-of-black-background_23-2148098813.jpg?w=2000">
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
    summa() {
      return this.count * this.product.price;
    }
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
    position: relative;
  }

  .card__image .card__summary {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(30, 30, 30, 0.6);
  }

  .card__image .card__summary span {
    display: block;
    text-align: center;
    font-size: 20px;
  }

  .card__image .card__summary span.count {
    font-size: 40px;
    font-weight: 700;
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

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }

</style>