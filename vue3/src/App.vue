<template>
  <div>
    <button @click='increase'>increase{{countRef}}</button>
    <button @click='decrease'>decrease{{countRef}}</button>
  </div>
</template>

<script>
import{ref} from 'vue'
export default {
  setup(){
    let countRef=ref(0)
    const increase=()=>{
      countRef.value++
    }
    const decrease=()=>{
      countRef.value--
    }
    return{
      countRef,
      increase,
      decrease
    }
  },
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
