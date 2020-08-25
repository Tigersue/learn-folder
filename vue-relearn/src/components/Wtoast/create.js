import Vue from 'vue'
export default function(Component,props){
    //1,创建实例
    const vm=new Vue({
            render(h){
                //h --createElement,返回VNode虚拟DOM
              return  h(Component,{props}) //{}
            }
    }).$mount()
    //2、手动挂在
    document.body.appendChild(vm.$el)
    //3 销毁实例，给实例增加销毁方法
    const comp=vm.$children[0]
    comp.remove=function(){
        document.body.removeChild(vm.$el)
        //XIAOHUI
        vm.$destroy()
    }
    return comp
}