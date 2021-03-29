<template>
  <div class="v-catalog">
    <VCatalogItem 
    v-for="(bed, index) in BEDS" :key="index"
    :bed_data="bed"
    @updateCatalog="updateCatalog"
    />
    <div v-if="Object.keys(ACTIVE_DATA).length" class="container np" style="margin-top: 45px;">
        <VCalculator/>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import VCatalogItem from './v-catalog-item'
import VCalculator from './calculator/v-calculator'
export default{
  name: 'v-catalog',
  components: {
    VCatalogItem,
    VCalculator
  },
  data(){
    return{
      active_data: {}
    }
  },
  methods:{
    ...mapActions([
      'UPDATE_ACTIVE_DATA'
    ]),
    updateCatalog(data){
      this.UPDATE_ACTIVE_DATA(data)
    }
  },
  computed: {
    ...mapGetters([
      'BEDS',
      'ACTIVE_DATA'
    ]),
  }
}
</script>

<style lang="scss">

</style>
