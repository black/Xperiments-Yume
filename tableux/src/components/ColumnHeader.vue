<template>
    <tr>
        <th class="grid grid-cols-1 grid-rows-1 group cursor-pointer py-3"> 
            <span class="material-icons text-base text-gray-700" v-on:click="changeCheckBoxState()">
                {{checkBox}}
            </span>
        </th>
        <th v-for="(header,index) in columns" :key="index" class=" hover:bg-gray-300"> 
            <div class="flex align-middle gap-5">
                <span class="material-icons text-base py-3 pl-3">
                    {{header.icon}}
                </span>
                <span class="capitalize font-medium py-3">
                    {{header.title}}
                </span>
                <span class="material-icons text-base ml-auto cursor-pointer hover:bg-slate-400 px-4 py-3">
                    keyboard_arrow_down
                </span>
            </div>
        </th> 
    </tr> 
</template>

<script lang="ts">
import {
    computed, ref
} from 'vue'
import {
    useStore
} from 'vuex'

export default {
    name: 'ColumnHeader',
    props: ['columns', 'index'],
    setup() {
        const store = useStore()
        const show = ref(false)
        let selectAll = ref(false) 

        const changeCheckBoxState = ()=> {
            selectAll.value = !selectAll.value
            store.state.rowItems.forEach((item: any) => item.selected = selectAll.value)
        }

        const checkBox = computed(() => {
            const data = store.state.rowItems
            const states = data.filter((item:any) => item.selected)
            if (states.length == data.length) {
                return "check_box"
            } else if (states.length < data.length && states.length > 0) {
                return "indeterminate_check_box"
            } else {
                return "check_box_outline_blank"
            }
        })

        return {
            show, selectAll, checkBox, changeCheckBoxState
        }
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
