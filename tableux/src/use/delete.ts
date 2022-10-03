import {
    computed,WritableComputedRef
} from 'vue'
import {
    useStore
} from 'vuex'

export default function Pagination() {
    const store = useStore();
    const deletePopup:WritableComputedRef<boolean> = computed({
        get() {
            return store.state.deletePopup
        },
        set(value) { 
            store.commit('deletePopup', value)
        }
    })

    return {
        deletePopup
    }
}