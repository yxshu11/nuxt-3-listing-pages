<template>
  <div class="sub-app-homepage">
    SUB APP 1 HOMPAGE

    <HelloWorld />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  setup() {
    
  },
  components: {
    HelloWorld
  }
})
</script>
