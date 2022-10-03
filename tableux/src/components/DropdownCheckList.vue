<template> 
    <ul class="absolute top-full left-0 rounded mt-2 text-left bg-yume-grey-2 shadow-lg z-10">
        <li v-for="(item,key,idx) in selectors" :key="idx" v-on:click="item.state=!item.state"> 
            <div class="flex px-5 py-3 items-center hover:bg-yume-grey-1">
                <span class="material-icons text-base flex-shrink">
                    {{getState(item.state)}}
                </span>
                <div class="capitalize px-3">
                    {{item.title}}
                </div>
            </div>
        </li>
    </ul> 
</template>

<script lang="ts">
import {
    ref
} from 'vue'

export default {
    name: 'DorpdownList',
    props: ['list'],
    setup(props:any) {
        const selectors = ref(props.list)
        const getState = (state:boolean) => {
            return state ? "check_box" : "check_box_outline_blank"
        }

        return {
            selectors, getState
        }
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
