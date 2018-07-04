<template>
  <div class='home'>
    <Reusable msg='Reusable component'/>
  </div>
</template>

<script>
// @ is an alias to /src
import Reusable from '@/components/Reusable.vue'

export default {
  name: 'home',
  components: {
    Reusable
  }
}
</script>
