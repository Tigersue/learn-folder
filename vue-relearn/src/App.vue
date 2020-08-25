<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <button @click="testWtoast">testWtoast</button>
    <Tree/>
  </div>
</template>
<script>
import create from './components/Wtoast/create.js'
import Wtoast from './components/Wtoast/WToast'
import Tree from './components/Tree/Index'
export default {
  methods:{
    testWtoast(){
      const notice=create(Wtoast,{
        title:'test-title',
        message:'测试组件',
        duration:3000,
      })
      notice.show()
    }
  },
  components:{
    Tree
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
