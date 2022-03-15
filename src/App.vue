<template>
  <div id="app">
    <b-container class="main__container" fluid="xl">
      <MenuHeader />
      <div class="main__body">
        <router-view/>
      </div>
    </b-container>
  </div>
</template>

<script>
import MenuHeader from "@/components/MenuHeader";
export default {
  components: {MenuHeader}
}
</script>

<style>
  body, html {
    height: 100%;
    background-color: #000;
  }
</style>

<style scoped>
 #app {
   background-color: #000;
   height: 100%;
 }
 .main__body {
    background-color: #000;
    margin-top: 40px;
    padding: 10px;
    height: 100%;
 }
 .main__container {
   padding-top: 50px;
   height: 100%;
 }
</style>