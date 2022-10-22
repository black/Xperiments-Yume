<template>
<div class="flex gap-x-2 align-middle items-center">
    <div class="cursor-pointer p-4  bg-gray-200 w-14 text-center hover:bg-gray-300" v-on:click='row.selected=!row.selected'>
        <span class="material-icons text-base">
            {{setCheck(node.selected)}}
        </span>
    </div>
    <div class="cursor-pointer flex justify-between w-full bg-gray-100 p-4 hover:bg-gray-200" :class="{'font-semibold bg-green-400':row.selected, 'bg-yellow-200':expanded}" v-on:click="expanded=!expanded">
        <div :class="{'pl-5':(row.level==1),'pl-10':(row.level==2),'pl-16':(row.level==3)}">{{row.title}}</div>
        <span class="material-icons" v-show="(row.options.length>1)">
            {{setExpanded(expanded)}}
        </span>
    </div>
</div>
<div v-if="hasChild && expanded">
    <TreeNode v-for="child in node.options" :key="child.id" :node="child" />
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    ref,
    computed
} from 'vue';
// import TreeNode from '@/components/TreeNode.vue';

export default defineComponent({
    name: 'TreeNode',
    props: ['node'],
    setup(props) {
        const expanded = ref(false)
        const row = ref(props.node)
        const hasChild = computed(() => {
            return (row.value && row.value.options.length > 0) ? true : false
        })
        const setCheck = (state: boolean) => {
            return state ? "check_box" : "check_box_outline_blank"
        }

        const setExpanded = (state: boolean) => {
            return state ? "expand_more" : "chevron_right"
        }
        return {
            row,
            setCheck,
            setExpanded,
            hasChild,
            expanded
        }
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped> 
</style>
