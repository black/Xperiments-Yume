<template>
     <div class="flex gap-1 border rounded-md">
        <span class="px-3 py-2 bg-gray-300 rounded-l-md">{{currentPage}}/{{pages}}</span>
        <button class="material-icons px-2 hover:bg-gray-100" v-on:click="setCurrentPage(-5)">first_page</button>
        <button class="material-icons px-2 hover:bg-gray-100" v-on:click="setCurrentPage(-1)">chevron_left</button>
        <button class="material-icons px-2 hover:bg-gray-100" v-on:click="setCurrentPage(1)">chevron_right</button>
        <button class="material-icons px-2 hover:bg-gray-100" v-on:click="setCurrentPage(5)">last_page</button>
     </div> 
</template>

<script lang="ts">
import Pagination from '@/use/pagination'
export default {
    name: 'MenuRow',
    props: ['pages'], 
    setup(props:any) { 
        let { currentPage } = Pagination() 
        const setCurrentPage = (pos:number) => {
            currentPage.value += pos
            if (currentPage.value < 1) {
                currentPage.value = 1
            }
            if (currentPage.value > props.pages) {
                currentPage.value = props.pages
            }
            console.log(currentPage)
        }
        return {
            currentPage, setCurrentPage
        }
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
