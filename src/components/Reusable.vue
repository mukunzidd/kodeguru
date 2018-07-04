<template>
  <div>
    <h1>{{ msg }}</h1>
    Good Vue Stuff
  </div>
</template>

<script>
export default {
  name: 'Reusable',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
