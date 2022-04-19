<template>
  <b-row class="main__header">
    <b-row>
      <b-col>
        <h1>{{ company.title }}</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div class="navigation">
          <router-link to="/">
            <b-button variant="primary">Меню</b-button>
          </router-link>
          <router-link to="/about">
            <b-button variant="primary">О наЦ</b-button>
          </router-link>
        </div>
      </b-col>
      <b-col>
        <MenuCart />
      </b-col>
    </b-row>
  </b-row>
</template>

<script>
import MenuCart from "@/components/MenuCart";
import {mapGetters} from "vuex";
export default {
  name: 'MenuHeader',
  components: {MenuCart},
  computed: {
    ...mapGetters(['company']),
  },
}
</script>

<style scoped>
  a, h1 {
    color: white;
  }
  .navigation {
    background-color: #747269;
    border-radius: 15px;
    padding: 2px;
  }

  .btn {
    border: none;
    border-radius: 15px;
  }

  .navigation {
    max-width: 300px;
  }

  .navigation .router-link-exact-active .btn-primary {
    background-color: #252423;
    color: white;
  }

  .navigation .btn-primary {
    background-color: transparent;
    color: rgb(140, 140, 140);
    width: 50%;
  }

</style>