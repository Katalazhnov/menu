<template>
  <div>
    <h4>{{ cartSumma }}</h4>
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