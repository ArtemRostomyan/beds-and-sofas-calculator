<template>
  <div id="app">
    <v-main-wrapper/>
  </div>
</template>

<script>
import VMainWrapper from './components/v-main-wrapper.vue'


export default {
  name: 'App',
  components: {
    VMainWrapper
    
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: Arial, Helvetica, sans-serif;
}
.container {
  max-width: 1170px;
  margin: 0 auto;
}

@media (max-width: 1182px) {
  .container {
    max-width: 970px;
  }
}

@media (max-width: 991.98px) {
  .container {
    max-width: 750px;
  }
}

@media (max-width: 767.98px) {
  .container {
    max-width: none;
    padding: 0 10px;
    &.np{
      padding: 0;
    }
  }
}
</style>
