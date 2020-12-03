import {
    ref,
    computed,
    onMounted,
    onUnmounted
} from 'vue'
import {
    filter
} from '../utils/todoStorage'
const validHash = ['all', 'active', 'completed']
const visibilityRef = ref('all')
export default function useFilter(todosRef) {
    
    const onHashChange = () => {

        
        const hash = location.hash.replace(/#\/?/, '')
        console.log('hash',hash)
        if (validHash.includes(hash)) {
            visibilityRef.value = hash
        } else {
            location.hash = ''
            visibilityRef.value = 'all'
        }
    }
    
    onMounted(() => {
        window.addEventListener('hashchange', onHashChange)
    })
    onUnmounted(() => {
        window.removeEventListener('hashchange', onHashChange)
    })
    const filteredTodoRef = computed(() => {
        console.log('visibilityRef.value ',visibilityRef.value )
        console.log('todosRef.value',todosRef.value )
        return filter(todosRef.value, visibilityRef.value)
    })
    return {
        filteredTodoRef
    }

}