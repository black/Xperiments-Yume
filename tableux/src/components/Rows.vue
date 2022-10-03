<template> 
    <tr class="group cursor-pointer bg-white hover:bg-gray-100 relative" :class="[{'bg-yume-grey-3 font-medium':selected}]" >
        <td class="first-col px-4" :class="[selectedView]"> 
            <div class="grid grid-cols-1 grid-rows-1 place-items-center">
                <span class="row-item col-span-1 row-span-1 group-hover:hidden" :class="{'hidden':item.selected,'inline':!item.selected}">
                    {{index}}
                </span>
                <span class="row-item col-span-1 row-span-1 material-icons group-hover:inline"
                    :class="{'inline':item.selected,'hidden':!item.selected}">
                    {{setCheck(item.selected)}}
                </span>
            </div>
        </td> 
        <td  class="px-5"  :class="[selectedView]">
            <img :src="item.img" alt="" class="w-8 h-8 rounded-full">
        </td>
        <td  class="px-5"  :class="[selectedView]">
            <span class="font-normal">{{item.name}}</span>
        </td>
        <td  class="px-5"  :class="[selectedView]">
            <span class="font-normal">{{item.designation}}</span>
        </td>
        <td  class="px-5"  :class="[selectedView]">
            <span class="font-normal">{{item.gender}}</span>
        </td>
        <td  class="px-5"  :class="[selectedView]">
            <span class="font-normal">{{item.color}}</span>
        </td>
        <td  class="px-5"  :class="[selectedView]">
            <div class="rounded-full h-4 w-4" :class="{'bg-green-600':row.status,'bg-red-600':!row.status}"> 
            </div>
        </td>
        <RowOptions :row="item" /> 
    </tr> 
</template> 

<script lang="ts"> 
import RowOptions from '@/components/RowOptions.vue'
import {
    computed, ref
} from 'vue'
import {
    useStore
} from 'vuex'
export default {
    name: 'RowItem',
    props: ['row', 'index'],
    components: { 
        RowOptions
    }, 
    setup(props:any) {
        const item = ref(props.row)
        const store = useStore()
        const selectedView = computed(() => {
            switch (store.state.viewType) {
                case 'comfortable':
                    return "py-6";
                case 'compact':
                    return "py-3";
                default:
                    return "";
            }
        })

        const setCheck = (state:boolean) => {
            return state ? "check_box" : "check_box_outline_blank"
        }

        const setDetailPanel = ()=> {
            store.commit('detailpanelState', true)
            store.commit('detailpanelContent', props.row)
        } 

        return {
            item, selectedView, setCheck, setDetailPanel
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
