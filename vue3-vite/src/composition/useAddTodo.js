import {ref} from 'vue'
import { generateId } from '../utils/todoStorage';
export default function useAddTodo(todosRef){
    const newTodoRef=ref("")
    const addTodo=()=>{
        const value=newTodoRef.value&&newTodoRef.value.trim()
        if(!value){
            return
        }
        //生成一个todo并插入到todolist
        const todo={
            id:generateId(),
            title:value,
            completed:false
        }
        todosRef.value.push(todo)
        newTodoRef.value=''
    }
    return {
        newTodoRef,
        addTodo
    }
}