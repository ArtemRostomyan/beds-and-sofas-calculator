<template>
  <div class="v-multiselect">
    <span class="multiselect-label">Ширина</span>
    <multiselect 
      @input="updateGlobalWidth"
      v-model="value" 
      :value="value + 'мм'"
      :options="name" 
      :searchable="false" 
      :show-labels="false" 
      :allow-empty="false"
      :preselect-first="true"></multiselect>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Multiselect from 'vue-multiselect'
export default{
  name: 'v-multiselect',
  components: {
    Multiselect
  },
  data(){
    return{
      value: '',
      
    }
  },
  methods:{
    ...mapActions([
      'UPDATE_GLOBAL_WIDTH'
    ]),
    updateGlobalWidth(width){
      this.UPDATE_GLOBAL_WIDTH(width)
    }
  },
  computed: {
    ...mapGetters([
      'BED_SIZES'
    ]),
    options_store(){
      return this.BED_SIZES
    },
    name(){
      
      function getName(objects){
        let name = []
        for(let i = 0; i < objects.length; i++){
          name.push(objects[i].bed_width)
        }
        return name
      }
      return getName(this.BED_SIZES)
    }
  }
}
</script>

<style lang="scss">
.multiselect{
  &__tags{
    border: 1px solid #E1E1E1;
    border-radius: 0px;
    height: 50px;
    display: flex;
    align-items: center;
  }
  &-label{
    left: 0;
    top: -16px;
    font-size: 12px;
    position: absolute;
    color: #A6A6A6;;
  }
  &__select{
    height: 45px;
  }
  &__single{
    padding-left: 14px;
    @media(max-width: 780px){
      padding-left: 5px;
    }
  }
}
</style>
