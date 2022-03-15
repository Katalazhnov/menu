<template>
  <b-row>
    <b-col v-for="(product, index) in items"
           :item="product"
           :index="index"
           :key="product.id">
      <MenuCard :product="product"/>
    </b-col>
  </b-row>
</template>

<script>
import MenuCard from "@/components/MenuCard";
import {mapGetters} from "vuex";
export default {
  name: "MenuList",
  components: {MenuCard},
  data() {
    return {
      items: [],
    }
  },
  mounted() {
    this.initItems();
  },
  watch: {
    activeCategory() {
      this.initItems();
    },
  },
  methods: {
    initItems() {
      this.items = this.products;
      if (this.activeCategory) {
        this.items = this.items.filter(el => {
          return el.category === this.activeCategory.id;
        });
      }
    }
  },
  computed: {
    ...mapGetters(['products', 'activeCategory']),
  }
}
</script>

<style scoped>
  .col {
    margin-bottom: 20px;
  }
</style>