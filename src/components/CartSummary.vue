<template>
  <div>
    <h4>Итого {{ cartSumma }}</h4>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CartSummary",
  computed: {
    ...mapGetters(['cartSumma']),
  },
}
</script>

<style scoped>

</style>