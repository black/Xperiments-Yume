<template>
     <div class="flex gap-1 border rounded-md">
        <span class="px-3 py-2 bg-gray-300 rounded-l-md">{{currentPage}}/{{pages}}</span>
        <button class="material-icons px-2 hover:bg-gray-100" v-on:click="setCurrentPage(-5)">first_page</button>
        <button class="material-icons px-2 hover:bg-gray-100" v-on:click="setCurrentPage(-1)">chevron_left</button>
        <button class="material-icons px-2 hover:bg-gray-100" v-on:click="setCurrentPage(1)">chevron_right</button>
        <button class="material-icons px-2 hover:bg-gray-100" v-on:click="setCurrentPage(5)">last_page</button>
     </div> 
</template>

<script>
export default {
    name: 'MenuRow',
    props: ['pages'],
    computed: {
        currentPage: {
            set(value) { 
                this.$store.commit('currentPage', value)
            },
            get() {
                return this.$store.state.currentPage
            }
        }
    },
    methods: {
        setCurrentPage(pos) {
            this.currentPage += pos
            if (this.currentPage < 1 ) {
                this.currentPage = 1
            }
            if (this.currentPage > this.pages) {
                this.currentPage = this.pages
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
