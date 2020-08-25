<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <p v-if="errmsg">{{errmsg}}</p>
   
    </div>
</template>

<script>
import Schema from 'async-validator'
export default {
    inject:['form'],//拿到form 数据
    props:{
        label:{
            type:String,
            default:''
        },
        prop:{
            type:String
        }
    },
    data(){
        return {
            errmsg:''
        }
    },
    methods:{
        validate(){
            //校验
         const value = this.form.model[this.prop]
         const rules = this.form.rules[this.prop]
            //使用async-validator 库来校验
         const desc ={[this.prop]:rules}   
         const schema =new Schema(desc)
         return schema.validate({[this.prop]:value},errors=>{
             if(errors){
                 this.errmsg=errors[0].message
             }else{
                 this.errmsg=''
             }
         })
        }
    },
    mounted(){
        this.$on('validate',this.validate)
    }
}
</script>

<style>

</style>
