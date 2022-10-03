<template>
    <div class="flex relative">
        <div class="absolute left-0 right-0 top-0 px-2 bg-yume-grey-1">
            <TableToolbar />
            <table class="w-full rounded-t-lg bg-yume-grey-2 overflow-y-hidden">
                <ColumnHeader :columns="getColumns" />
                <Rows :row="item" :index="index" v-for="(item,index) in rowItems" :key="index"
                    v-on:click="item.selected=!item.selected" />
            </table>
        </div>
        <DetailPanel v-show="panelState" />
        <DeleteModal v-show="deletePopup" />
    </div>
</template>

<script lang="ts">
import ColumnHeader from '@/components/ColumnHeader.vue'
import Rows from '@/components/RowsPayment.vue'
import TableToolbar from '@/components/TableToolbar.vue'
import DetailPanel from '@/components/DetailPanel.vue'
import DeleteModal from '@/components/DeleteModal.vue'

import cols from "@/assets/columns_payment.json"
import fakeData from "@/assets/mock_payment.json"

import Pagination from '@/use/pagination'
import DeleteState from '@/use/delete'
import Details from '@/use/details'

import {
    computed, onMounted
} from 'vue'
import {
    useStore
} from 'vuex'

export default {
    name: 'HomeVue',
    components: {
        TableToolbar,
        ColumnHeader,
        Rows,
        DetailPanel,
        DeleteModal
    },
    setup() {
        const store = useStore()

        /* Delete Popup State*/
        const { deletePopup } = DeleteState()

        /* Detail Panel State */
        const { panelState } = Details()

        /* Current Page */
        let { currentPage } = Pagination()

        /* load fake data */
        let rowItems = computed({
            set() {
                store.commit('paymentRowItems', fakeData)
            },
            get() {
                return store.state.paymentRowItems
            }
        })

        /* load fake columns */
        let getColumns = computed({
            get() {
                return cols
            },
            set() {
                console.log(fakeData)
            }
        })

        /* Activate Data on mount */
        onMounted(() => {
            rowItems.value = ""
            getColumns.value
        })

        return {
            panelState, rowItems, currentPage, getColumns, deletePopup
        }
    }
}
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.container-snap::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.container-snap {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>
