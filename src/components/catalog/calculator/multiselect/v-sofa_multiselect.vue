<template>
  <div class="v-multiselect">
    <span class="multiselect-label">Длина</span>
    <multiselect 
      @input="updateGlobalLength"
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
      'UPDATE_GLOBAL_LENGTH'
    ]),
    updateGlobalLength(length){
      this.UPDATE_GLOBAL_LENGTH(length)
    }
  },
  computed: {
    ...mapGetters([
      'SOFA_SIZES'
    ]),
    options_store(){
      return this.SOFA_SIZES
    },
    name(){
      function getName(objects){
        let name = []
        for(let i = 0; i < objects.length; i++){
          name.push(objects[i].div_length)
        }
        return name
      }
      return getName(this.SOFA_SIZES)
    }
  }
}
</script>