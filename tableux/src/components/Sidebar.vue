<template>  
    <div class="flex flex-col bg-yume-grey-2 h-screen" :class="{'w-60':show,'w-auto':!show}"> 
        <div class="flex items-center mx-3 rounded cursor-pointer h-14"  v-on:click="show=!show">
            <span class="material-icons px-3 py-3">
                menu
            </span>  
            <transition name="fade"> 
                <span v-if="show" class="font-bold">MENU</span> 
            </transition>
        </div>
        <ul class="flex flex-col h-full">
            <li v-for="(menu,idx) in getMenu" :key="idx" :class="{'mt-auto mb-3':(idx>3)}" v-on:click="selectedMenu=menu.title">
                <router-link :to="{ path: '/home/' + menu.route }"><MenuRow :menu="menu" :expanded="show" :selected="(selectedMenu==menu.title)?true:false" /> </router-link> 
            </li>
        </ul>
    </div> 
</template>

<script lang="ts">
import {
    computed,ref
} from 'vue'
import {
    useStore
} from 'vuex'
import MenuRow from '@/components/MenuRow.vue'
import fakeMenu from '@/assets/menu.json'
export default {
    name: 'SideBar', 
    components: {
        MenuRow
    },
    setup() {
        const store = useStore()
        const show = ref(false)

        const selectedMenu = computed({
            get() {
                return store.state.currentMenu
            },
            set(value) {
                store.commit('currentMenu', value)
            }
        }) 

        const getMenu = computed(() => { 
            return fakeMenu 
        }) 

        return {
            show, selectedMenu,getMenu
        }
    }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
