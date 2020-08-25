<template>
    <div class="box" v-show="isShow">
        <h3>{{title}}</h3>
        <p class='contents'>{{message}}</p>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:''
        },
        message:{
            type:String,
            default:''
        },
        duration:{
            type:Number,
            default:30000
        }
    },
    data(){
        return{
            isShow:false
        }
    },
    methods:{
        show(){ 
            this.isShow=true
            // setTimeout(()=>{
            //     this.hide()
            // },this.duration)
            setTimeout(this.hide,this.duration)
        },
        hide(){
            this.isShow=false
            this.remove()
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

