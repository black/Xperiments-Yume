import {
    computed, WritableComputedRef
} from 'vue'
import {
    useStore
} from 'vuex'

export default function Pagination() {
    const store = useStore();
    const selectedMenu:WritableComputedRef<string> = computed({
        get() {
            return store.state.currentMenu
        },
        set(value) { 
            store.commit('currentMenu', value)
        }
    })

    return {
        selectedMenu
    }
}