<template>
  <div>
    <h2 class="price">{{total_price.toLocaleString()}} <span class="price__icon">₽</span></h2>
    <p class="name">{{name}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default{
  name: "v-price",
  data(){
    return{}
  },
  methods:{
  },
  computed: {
    ...mapGetters([
      'GET_TOTAL_PRICE',
      'ACTIVE_DATA'
    ]),
    total_price(){
      return this.GET_TOTAL_PRICE
    },
    name(){
      return this.ACTIVE_DATA.name
    }
  }
}
</script>

<style lang="scss">
.price{
  font-weight: 400;
  font-style: italic;
  &__icon{
    font-weight: 300;
  }
}
.name{
  margin: 5px 0;
  font-style: italic;
  font-size: 45px;
  color: rgb(31, 31, 31);
}
</style>
