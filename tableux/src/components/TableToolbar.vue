<template>
    <div class="flex items-center gap-5">
        <span class="font-bold uppercase">{{selectedMenu}} MODULE</span> 
        <div class="flex gap-3 py-2 ml-auto align-middle">
            <Pagination :pages="10"/>
            <button class="add-btn"> <span class="material-icons">add</span>ADD PERSON</button>
            <div class="icon-btn relative">
                <span class="material-icons text-base my-auto" v-on:click="viewoptions=!viewoptions">
                    view_day
                </span>
               <transition name="fade">
                    <Dropdown :list="options" v-if="viewoptions" />
               </transition>
            </div>
            <div class="icon-btn">
                <span class="material-icons text-base my-auto">
                    person_off
                </span>
            </div>
            <div class="icon-btn">
                <span class="material-icons text-base my-auto">
                    delete
                </span>
            </div> 
        </div>
    </div>
</template>

<script lang="ts">
import Dropdown from '@/components/DropdownRadioList.vue'
import Pagination from '@/components/Pagination.vue' 
import Pages from '@/use/pagination'
import {
    useStore
} from 'vuex'
import {
    ref,computed
} from 'vue'
import Menu from '@/use/menu'
export default {
    name: 'TableToolBar',
    props: ['name'],
    components: {
        Dropdown,
        Pagination  
    },
    setup(props: any) {
        const viewoptions = ref(false)
        const options = ref([
            {
                "title": "default",
                "state": true
            },
            {
                "title": "compact",
                "state": false
            },
            {
                "title": "comfortable",
                "state": false
            }
        ])
        const store = useStore() 
        const { selectedMenu } = Menu() 
        let { currentPage } = Pages()
        const setCurrentPage = (pos:number) => {
            currentPage.value += pos
            if (currentPage.value < 1) {
                currentPage.value = 1
            }
            if (currentPage.value > props.pages) {
                currentPage.value = props.pages
            } 
        }

        return {
            options, viewoptions, selectedMenu, setCurrentPage
        }
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only --> 
<style lang="postcss"  scoped>
.add-btn{
    @apply rounded-full text-xs px-5 bg-gray-900 text-white flex items-center
}

.add-btn:hover{
    @apply bg-gray-700
}
.icon-btn {
    @apply flex justify-center align-middle p-1 rounded-full w-10 h-10 cursor-pointer;
}

.icon-btn:hover{
    @apply bg-yume-grey-2
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
