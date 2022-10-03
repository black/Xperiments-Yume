<template>
    <div class="bg-yume-backdrop z-10 fixed left-0 right-0 top-0 bottom-0 flex items-end">
        <div class="flex bg-white w-1/3 mx-auto mb-4 flex-col px-6 py-4 rounded gap-2"> 
            <div class="flex justify-between items-center pb-5 border-b-2">
                <div class="flex gap-4 flex-0">
                    <img :src="item.img" alt="item.img" class="object-contain rounded-full h-14 bg-blue-100">
                </div>
                <h1 class="text-xl font-bold">Detail Panel</h1>
                <span class="material-icons text-base hover:bg-blue-100 rounded-full px-4 py-3 cursor-pointer"  v-on:click="panelState=false">
                    close
                </span>
            </div>
            <div class="flex gap-4">
                <span class="material-icons text-base">
                    person
                </span>
                <span>{{item.name}}</span>
            </div>
            <div class="flex gap-4">
                <span class="material-icons text-base">
                    support_agent
                </span>
                <span>{{item.designation}}</span>
            </div>
            <div class="flex gap-4">
                <span class="material-icons text-base">
                     male
                </span>
                <span>{{item.gender}}</span>
            </div>
            <div class="flex gap-4">
                <span class="material-icons text-base">
                     face_2  
                </span>
                <span>{{item.color}}</span>
            </div>
            <div class="flex gap-4">
                <span class="material-icons text-base">
                visibility
                </span>
                <span>{{item.status}}</span>
            </div> 
        </div>
    </div>
</template>

<script lang="ts">

import Details from '@/use/details'
export default {
    name:'DetailPanel',
    setup() {  
        const { panelState, details } = Details()
        const item = details 
        return {
            panelState, item
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
