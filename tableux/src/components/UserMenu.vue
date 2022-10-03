<template>
    <div class="flex items-center relative cursor-pointer" v-on:click.stop="show=!show">
        <img :src="require('@/assets/'+user.pic)" alt="" class="h-10">
        <div class="px-2">
            <span class="text-sm font-medium">{{user.name}}</span>
            <p class="text-xs">{{user.email}}</p>
        </div>
        <div class="absolute bottom-0 top-full w-full z-10" :class="{'block':show,'hidden':!show}">
            <div class="flex flex-col bg-white w-full shadow-md rounded-b gap-1 py-2">
                <span class="py-2 px-5 hover:bg-gray-200" >Profile</span>
                <span class="py-2 px-5 hover:bg-gray-200">Settings</span>
                <span class="py-2 px-5 hover:bg-gray-200">Logout</span> 
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {
    computed, ref
} from 'vue'
import {
    useStore
} from 'vuex'
export default {
    name: 'UserMenu',  
    setup(props:any) {
        const show = ref(false)
        const store = useStore()
        const user = computed({
            get() {
                return store.state.user
            },
            set(value) {
                store.commit('user', value)
            }
        })

        return {
            show,user
        }
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
