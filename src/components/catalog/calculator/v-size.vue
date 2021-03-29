<template>
  <div class="v-size">
    
    <span class="category__quantity">1.</span>
    <span class="category__label">Выберите размер</span>
    <div class="v-size__select-box">
      <p v-if="ACTIVE_DATA.type == 'bed'" class="v-size__item v-size__width">
        <span class="v-size__width-label">Длина</span>
          {{ACTIVE_DATA.length}} мм
      </p>
      <p v-if="ACTIVE_DATA.type == 'sofa'" class="v-size__item v-size__width">
        <span class="v-size__width-label">Ширина</span>
          {{ACTIVE_DATA.width}} мм
      </p>

      <vBedMultiselect v-if="ACTIVE_DATA.type == 'bed'" class="v-size__item v-multiselect"/>
      <vSofaMultiselect v-if="ACTIVE_DATA.type == 'sofa'" class="v-size__item v-multiselect"/>
    </div>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import vBedMultiselect from './multiselect/v-krov_multiselect'
import vSofaMultiselect from './multiselect/v-sofa_multiselect'
export default{
  name: 'v-size',
  components: {
    vBedMultiselect,
    vSofaMultiselect
  },
  data(){
    return{}
  },
  methods:{
  },
  computed: {
    ...mapGetters([
      'GET_LENGTH',
      'ACTIVE_DATA'
    ])
  }
}
</script>

<style lang="scss">
.v-size{
  padding: 20px;
  background-color: #FBFBFD;
  height: 145px;
  border: 1px solid #DADADA;;
  &__item{
    width: 40%;
    height: 50px;
  }
  &__select-box{
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__width{
    position: relative;
    border: 1px solid #272727;
    min-height: 40px;
    padding-left: 22px;
    align-items: center;
    display: flex;
    font-size: 15px;
    background-color: #fff;
    @media(max-width: 780px){
      padding-left: 12px;
    }
    &-label{
      left: 0;
      top: -16px;
      font-size: 12px;
      position: absolute;
      color: #A6A6A6;;
    }
  }
  
}
.v-multiselect{
  position: relative;
}
.category{
  &__label{
    font-size: 17px;
    margin-left: 7px;
    
  }
  &__quantity{
    font-size: 17px;
    color: #9D9D9D;
  }
}
</style>
