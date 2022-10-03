import { 
    computed, WritableComputedRef 
} from 'vue'
import {
    useStore
} from 'vuex'

export default function Details() {
    const store = useStore();
    const panelState:WritableComputedRef<boolean> = computed({
        get(){
            return store.state.detailpanelState
        },
        set(value) { 
            store.commit('detailpanelState', value)
        }
    })

    const details:WritableComputedRef<string> = computed({
        get() {
            return store.state.detailpanelContent
        },
        set(value) { 
            store.commit('detailpanelContent', value)
        }
    })

    return {
        panelState,
        details
    }
}