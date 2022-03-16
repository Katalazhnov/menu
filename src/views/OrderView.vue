<template>
  <div class="order__view">
    <b-row>
      <b-col>
        <h3>Оформление заказа</h3>
      </b-col>
    </b-row>
    <b-row >
      <b-col class="order__form">
        <label>Точка самовывоза</label>
        <b-form-select :disabled="disabled" @change="setOrderPoint" :options="points" :value="order.point"/><br>
        <label>Имя</label>
        <b-input :disabled="disabled" @input="setOrderName" :value="order.name"/>
        <label>Телефон</label>
        <b-input :disabled="disabled" @input="setOrderPhone" :value="order.phone"/>
        <label>Комментарий к заказу</label>
        <b-textarea :disabled="disabled" @input="setOrderDescription" :value="order.description" rows="10"/>
      </b-col>
    </b-row>
    <b-row>
      <b-col align="right">
        <b-button  variant="primary" size="lg" v-if="cartLength > 0" @click="sendOrder">Оформить</b-button>
      </b-col>
    </b-row>
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
  .order__view h3{
    color: white;
  }
  .order__form {
    background-color: white;
    border-radius: 15px;
  }
</style>
