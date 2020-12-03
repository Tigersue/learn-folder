const LOCAL_KEY="todomvc"
/**
 * 生成一个任务的唯一编号，时间戳+4位随机数
 */
export function generateId(){
    return Date.now()+Math.random().toString(16).substr(2,4)
}
/**
 * 获取目前所有的任务
 */
export function fetch(){
    const res= localStorage.getItem(LOCAL_KEY)
    if(res){
        return JSON.parse(res)
    }
    return []
}

/**
 * 保存所有任务
 * @param {*} todos 任务列表
 */

 export function save(todos){
     localStorage.setItem(LOCAL_KEY,JSON.stringify(todos))
 }

 export function filter(todos,visbility='all'){
    if(visbility==="all"){
        return todos
    }else if(visbility==='active'){
        return todos.filter((it)=>!it.completed)
    }else if(visbility==='completed'){
        return todos.filter((it)=>it.completed)
    }
    throw new Error('error')
 }