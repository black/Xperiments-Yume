<template>
    <div class="flex flex-col bg-yume-grey-2 h-screen" :class="{'w-60':show,'w-auto':!show}"> 
        <div class="flex items-center mx-3 rounded cursor-pointer h-14"  v-on:click="show=!show">
            <span class="material-icons px-3 py-3">
                menu
            </span>
            <span v-show="show" class="font-bold">MENU</span> 
        </div>
        <ul class="flex flex-col h-full">
            <li v-for="(menu,idx) in getMenu" :key="idx" :class="{'mt-auto mb-3':(idx>3)}" v-on:click="selectedMenu=menu.title">
                <MenuRow :menu="menu" :expanded="show" :selected="(selectedMenu==menu.title)?true:false"/>
            </li>
        </ul>
    </div>
</template>

<script>
import MenuRow from '@/components/MenuRow.vue'
export default {
    name: 'SideBar', 
    components: {
        MenuRow
    },
    data() {
        return {
            show: false, 
       }
    },
    computed: {
        getMenu() {
            return require("@/assets/menu.json") 
        },
        selectedMenu: {
            get() {
                return this.$store.state.menu 
            },
            set(value) {
                this.$store.commit('menu', value)
            }
        } 
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
