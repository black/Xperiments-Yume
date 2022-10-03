<template> 
    <tr class="group cursor-pointer bg-white hover:bg-gray-100 relative" :class="[{'bg-yume-grey-3 font-medium':item.selected}]" >
        <td class="w-16" :class="[selectedView]"> 
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
        <td class="px-5" :class="[selectedView]"> 
            <span class="font-normal">{{item.id}}</span>
        </td>
        <td  class="px-5"  :class="[selectedView]">
            <span class="font-normal">{{item.description}}</span>
        </td>
        <td  class="px-5"  :class="[selectedView]">
            <span class="font-normal">{{item.due_amount}}</span>
        </td>
        <td  class="px-5"  :class="[selectedView]">
            <span class="font-normal">{{item.due_date}}</span>
            <span class="text-xs px-3 py-1 bg-red rounded-full block">{{item.overdue}} Days</span>
        </td>
        <td  class="px-5"  :class="[selectedView]">
            <span class="font-normal">{{item.invoice_date}}</span>
        </td>
        <td class="px-5 relative" :class="[selectedView]"  @mouseover="showdownload=true" @mouseleave="showdownload=false">
            <span>DOWNLOAD</span>
            <div class="flex flex-col absolute top-full z-10 bg-white rounded-b shadow" :class="{'flex':showdownload,'hidden':!showdownload}">
                <span class="font-normal px-5 py-2 hover:bg-gray-200" v-for="(rep,idx) in item.invoice" :key="idx" @click.stop="">{{rep}}</span>
            </div>
        </td>
        <td  class="px-5 py-3 w-32"  :class="[selectedView]">
             <button class="px-5 py-2 w-full rounded uppercase" :class="{'bg-yellow-200':(item.action=='processing'), 'border':(item.action=='paid'),'bg-green-600':(item.action=='pay')}">{{item.action}}</button>
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
    setup(props: any) {
        const showdownload = ref(false)
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

        const setCheck = (state: boolean) => {  
            return state ? "check_box" : "check_box_outline_blank"
        }

        const setDetailPanel = ()=> {
            store.commit('detailpanelState', true)
            store.commit('detailpanelContent', props.row)
        } 

        return {
            item, selectedView, showdownload, setCheck, setDetailPanel
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
