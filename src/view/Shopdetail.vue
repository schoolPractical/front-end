<template>
  <div id="Shops" class="shops">
  </div>
</template>

<script>
export default {
  name: 'Shops',
  created() {
    console.log(this.$route.query.id);
  },
};
</script>

<style scoped>

</style>
