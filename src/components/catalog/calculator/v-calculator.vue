<template>
  <div class="v-calculator">
    <div v-if="!flag" class="info-box">
      <p v-if="ACTIVE_DATA.type == 'bed'" class="product-category">Кровать</p>
      <p v-if="ACTIVE_DATA.type == 'sofa'" class="product-category">Диван</p>
      <p class="name">{{name}}</p>
    </div>
    <div class="image-box">
      <img
         v-for="(img, index) in images" 
        :key="index" 
        :src="img" 
        class="image-box__image"
        alt="">
    </div>
    <div class="calculator-wrapper">
      <VPrice />
      <VSize />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VSize from './v-size'
import VPrice from './v-price'


export default{
  name: 'v-catalog',

  components: {
    VSize,
    VPrice
  },
  data(){
    return{
      flag: true
    }
  },
  methods:{
    checkSize(){
      if(innerWidth > 780){
        this.flag = true
      } else{
         this.flag = false
      }
    }
  },
  computed:{
    ...mapGetters([
      'ACTIVE_DATA',
      'GET_STATE',
      'BEDS'
    ]),
    images(){
      if(this.ACTIVE_DATA.images){
          if(this.flag){
            return this.ACTIVE_DATA.images
        } else{
          return this.ACTIVE_DATA.images.slice(0,3)
        }
      } else{
        return {}
      }
      
    },
    name(){
      return this.ACTIVE_DATA.name
    },
  },
  created() {
    this.checkSize();
    window.addEventListener('resize', this.checkSize)
  },
}
</script>

<style lang="scss">
.calculator-wrapper{
  width: 50%;
  padding-left: 40px;
  @media(max-width: 780px){
      width: 100%;
      padding-left: 0px;
  }
}
.v-calculator{
  display: flex;
  @media(max-width: 780px){
      flex-direction: column;
  }
}
.image-box{
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 10px;
  justify-content: space-between;
  &__image{
    width: 47%;
    &:first-child{
      width: 100%;
    }
    @media(max-width: 780px){
      width: 100%;
    }
  }
  @media(max-width: 780px){
    width: 100%;
  }
}
.product-category{
    color: #D7B256;
    font-size: 25px;
}
.info-box{
  margin: 10px;
}
</style>
