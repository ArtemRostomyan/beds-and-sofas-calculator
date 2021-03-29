<template>
  <div @click="updateCatalog" class="catalog-item">
    <img class="catalog-item__logo" :src="bed_data.images[0]" alt="">
    <p
      >{{bed_data.name}}</p>
    <p v-if="total_sum">от {{total_sum.toLocaleString()}} <span class="price__icon">₽</span></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import totalPriceBED from '../../vuex/functions/totalPriceBED'
import totalPriceSOFA from '../../vuex/functions/totalPriceSofa'
export default{
  name: 'v-catalog-item',
  components: {

  },
  props: {
    bed_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data(){
    return{
      total_sum: 0
    }
  },
  methods:{
    updateCatalog(){
      this.$emit('updateCatalog', this.bed_data)
    }
  },
  computed: {
    ...mapGetters([
      'GET_STATE'
    ])
  },
  mounted(){
    if(this.bed_data.type == "bed"){
      this.total_sum = totalPriceBED(this.bed_data, this.GET_STATE)
    } else if(this.bed_data.type == "sofa"){
      this.total_sum = totalPriceSOFA(this.bed_data, this.GET_STATE)
    }
  }
}
</script>

<style lang="scss">
.catalog-item{
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
  padding: 7px 15px;
  margin: 2px 10px;
  width: 150px;
  border: 2px solid #000;
  font-size: 20px;
  border-radius: 10px;
  &:hover{
    background-color: rgb(211, 211, 211);
  }
  &__logo{
    width: 100%;
  }
}
</style>
