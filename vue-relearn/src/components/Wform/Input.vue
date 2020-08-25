<template>
<!-- $attrs:将父组件传来的值展开赋值给自己 -->
    <div>
        <input :value='value' @input="onInput" v-bind="$attrs">
    </div>
</template>

<script>
export default {
    inheritAttrs:false,//???????????????
    props:{ //从父组件获得值
        value:{
            type:String,
            default:''
        }
    },
    data(){
        return{

        }
    },
    methods:{
        onInput(e){ //直接派发input事件
            this.$emit('input',e.target.value)
            this.$parent.$emit('validate')
        }
    }
}
</script>

<style>

</style>
