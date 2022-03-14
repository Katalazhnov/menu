<template>
  <div class="order__view">
    <h3>Оформление заказа</h3>
    <label>Точка самовывоза</label>
    <b-form-select :disabled="disabled" @change="setOrderPoint" :options="points" :value="order.point"/>
    <hr>
    <label>Имя</label>
    <b-input :disabled="disabled" @input="setOrderName" :value="order.name"/>
    <label>Телефон</label>
    <b-input :disabled="disabled" @input="setOrderPhone" :value="order.phone"/>
    <label>Комментарий к заказу</label>
    <b-textarea :disabled="disabled" @input="setOrderDescription" :value="order.description" rows="10"/>
    <b-button v-if="cartLength > 0" @click="sendOrder">Оформить</b-button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'OrderView',
  computed: {
    ...mapGetters(['order', 'cartLength', 'points']),
    disabled() {
      return !(this.cartLength > 0);
    }
  },
  methods: {
    ...mapActions(['setOrderName', 'setOrderPhone', 'setOrderDescription', 'sendOrder', 'setOrderPoint']),
  },
}
</script>

<style scoped>
  .order__view {
    background-color: white;
  }
</style>
