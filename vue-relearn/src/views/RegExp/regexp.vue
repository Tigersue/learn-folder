<template>
  <div>
      <van-button type="primary" @click="m1">小数</van-button>
      <van-button type="primary" @click="m2">版本号</van-button>
      <van-button type="primary" @click="m3">不包含字母</van-button>
  </div>
</template>

<script>
export default {
    methods:{
        m1(){
          let reg=/^\d+\.\d+$/
          let digit=7.8
          console.log(reg.test(digit))  
        },
        m2(){
        // 符号 ?: 非捕获元之一
          let reg=/^\d+(?:\.\d+){2}$/   
          let version='17.82.5'
          console.log(reg.test(version))  
        },
        m3(){
            // 匹配任何包含零个或多个 n 的字符串---- n*
          let reg=/^[^A-Za-z]*$/ 
          let str='17.82.5'
          console.log(reg.test(str))  
        },
        
    },
    mounted(){
    }
}
</script>

<style>

</style>