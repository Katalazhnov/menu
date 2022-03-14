<template>
  <div class="about">

  </div>
</template>

<script>
export default {
  name: 'AboutView',
  computed: {
    company() {
      return this.$store.getters.company;
    },
  }
}

</script>
