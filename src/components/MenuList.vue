<template>
  <b-list-group>
    <MenuListElement v-for="(product, index) in items"
                     :item="product"
                     :index="index"
                     :key="product.id"
                      :product="product"/>

  </b-list-group>
</template>

<script>
import MenuListElement from "@/components/MenuListElement";
import {mapGetters} from "vuex";
export default {
  name: "MenuList",
  components: {MenuListElement},
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

</style>