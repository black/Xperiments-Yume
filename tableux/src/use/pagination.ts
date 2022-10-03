import {
    computed,WritableComputedRef
} from 'vue'
import {
    useStore
} from 'vuex'

export default function Pagination() {
    const store = useStore();
    const currentPage:WritableComputedRef<number> = computed({
        get() {
            return store.state.currentPage
        },
        set(value) { 
            store.commit('currentPage', value)
        }
    })

    return {
        currentPage
    }
}