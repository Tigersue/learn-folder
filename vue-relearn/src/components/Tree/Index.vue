<template>
    <div class="box" >
        <ul>
            <Item :model='dataTree'></Item>
        </ul>
    </div>
</template>

<script>
import Item from './Item'
export default {
    props:{
       
    },
    data(){
        return{
            dataTree:{
                title:'h1',
                children:[
                    {
                        title:'h2',
                        children:[
                            {title:'h3'}
                        ]
                    },
                    {
                        title:'h2'
                    }
                ]
                
            }
        }
    },
    methods:{
       
    },
    components:{
        Item
    }
}
</script>

<style scoped>

</style>

