<template>
  <div class="v-main-wrapper">
    <VCatalog/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import VCatalog from './catalog/v-catalog'

export default{
  name: "v-main-wrapper",
  components: {
    VCatalog
  },
  data(){
    return{}
  },
  methods:{
    ...mapActions([
      'GET_SPECIALISTS_FROM_GITHUB',
      'GET_BEDS_FROM_GITHUB',
      'GET_MATERIALS_FROM_GITHUB'
    ])
  },
  mounted(){
    this.GET_SPECIALISTS_FROM_GITHUB()
    this.GET_MATERIALS_FROM_GITHUB()
    this.GET_BEDS_FROM_GITHUB()
  }
}
</script>

<style lang="scss">
</style>
