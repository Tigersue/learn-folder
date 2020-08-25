<template>
<li>
    <div @click='toggle'>
        {{model.title}}
        <span v-if="isFolder">[{{open?'-':'+'}}]</span>
    </div>
    <ul v-show="open" v-if="isFolder">
        <item class='item' v-for="model in model.children" :model='model'></item>
    </ul>
</li>
    
</template>

<script>
export default {
    name:'Item',
    props:{
       model:{
           type:Object,
           required:true
       }
    },
    data(){
        return{
            open:false,
        }
    },
    methods:{
       toggle(){
           if(this.isFolder){
            this.open=!this.open
           }
           
       }
    },
    computed:{
        isFolder(){
            return this.model.children &&  this.model.children.length
        }
    }
}
</script>

<style scoped>
.box{
    width: 300px;
    height: 100px;
    margin: 200px auto;
    background: #cccccc
}
h3{
    text-align: center;
}
</style>

