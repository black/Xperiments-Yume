<template>
    <div class="flex flex-col h-screen p-10" v-on:click.stop="show=!show">
        <div class="h-1/2">
            <img :src="require('@/assets/'+user.pic)" alt="" class="h-full">
        </div>
        <div class="px-2">
            <span class="text-6xl font-medium">{{user.name}}</span>
            <p class="text-xl">{{user.email}}</p>
        </div> 
        <router-link to="/"><span class="py-2 px-5 bg-red-500 hover:bg-gray-200 border">Home</span></router-link>
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
    setup(props: any) {
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
            show, user
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
