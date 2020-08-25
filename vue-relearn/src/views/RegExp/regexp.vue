<template>
  <div>
      <button @click="m1">小数</button>
  </div>
</template>

<script>
export default {
    methods:{
        m1(){
          let reg=/^\d+\.\d+$/
          let digit=0.78
          console.log(reg.test(digit))  
        }
    },
    mounted(){
    }
}
</script>

<style>

</style>