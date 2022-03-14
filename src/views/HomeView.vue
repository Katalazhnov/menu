<template>
  <div>
    <MenuCategories />
    <MenuList />
  </div>
</template>

<script>
import MenuList from "@/components/MenuList";
import {mapGetters} from "vuex";
import MenuCategories from "@/components/MenuCategories";
export default {
  name: 'HomeView',
  components: {MenuCategories, MenuList},
  computed: {
    ...mapGetters(['cart']),
  }
}
</script>
