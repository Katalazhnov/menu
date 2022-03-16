<template>
  <div class="about">
    <p>{{ company.description }}</p>
    <h3>Контакты</h3>
    <h5 v-for="phone in company.phones" :key="phone.number">
      <font-awesome-icon icon="phone" /> {{ phone.title }}: <a :href="'tel:' + phone.attribute">{{ phone.number }}</a>
    </h5>
    <h5><font-awesome-icon icon="map-marker-alt" /> {{ company.address }}</h5>
    <h5><font-awesome-icon icon="clock" /> Режим работы: {{ company.time }}</h5>
    <hr>
    <span>{{ company.business.name }}</span><br>
    <span>ИНН {{ company.business.inn }}</span><br>
    <span>Юридический адрес 681000, {{ company.business.address }}</span>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  computed: {
    company() {
      return this.$store.getters.company;
    },
  },
}
</script>


<style scoped>
  * {
    color: white;
  }
</style>