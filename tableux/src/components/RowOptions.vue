<template> 
    <div class="absolute bg-black  right-0 top-0 bottom-0  items-center flex z-40">
        <!-- stopPropagation event from child to parent element click.stop -->
        <span class="material-icons text-base text-white p-4" v-on:click.stop="setDetailPanel()">
            visibility
        </span>
        <span class="material-icons text-base text-white p-4" v-on:click.stop="deletePopup()">
            delete
        </span>
    </div>
</template> 

<script lang="ts">

import Details from '@/use/details'
import {
    useStore
} from 'vuex'
export default {
    name: 'RowItem',
    props: ['row', 'index'],
    setup(props: any) {
        let store = useStore()
        let { panelState, details } = Details()
        function setDetailPanel() {
            panelState.value = true;
            details.value = props.row 
        }
        const deletePopup = () => {
            store.commit('deletePopup', true)
        }

        return {
            panelState, details, setDetailPanel, deletePopup
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss"  scoped>
.row-item {
    @apply px-5 py-3 text-base;
}
</style>
