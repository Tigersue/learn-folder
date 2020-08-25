<template>
    <div>
        <w-form :model="model" :rules='rules' ref="loginForm"> 
            <w-form-item label="用户名" prop='username'>
                <w-input type='text' v-model="model.username" placeholder="请输入用户名"></w-input>
            </w-form-item>
           <w-form-item>
               <button @click='submitInfo("loginForm")'>tijiao</button>
           </w-form-item>
        </w-form>
    
    </div>
</template>

<script>
import WForm from './Form'
import WFormItem from './FormItem'
import WInput from './Input'
export default {
    name:'',
    data(){
        return{
            model:{
                username:''
            },
            rules:{
                username:[
                    {
                        required:true,
                        message:'请输入用户名'
                    }
                ]
            }
        }

    },
    methods:{
        submitInfo(form){

            this.$refs[form].validate((valid)=>{
                if(valid){
                    alert('success')
                }else{
                    alert('error!!!!!!')
                }
            })
        }
    },
    components:{
        WForm,
        WFormItem,
        WInput  
    }
}
</script>

<style>

</style>
