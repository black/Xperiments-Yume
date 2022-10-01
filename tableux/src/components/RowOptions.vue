<template> 
    <div class="absolute bg-black  right-0 top-0 bottom-0  items-center hidden group-hover:flex z-10">
        <!-- stopPropagation event from child to parent element click.stop -->
        <span class="material-icons text-base text-white p-4" v-on:click.stop="setDetailPanel()">
            visibility
        </span>
        <span class="material-icons text-base text-white p-4" v-on:click.stop="deletePopup()">
            delete
        </span>
    </div>
</template> 

<script>
export default {
    name: 'RowItem',
    props: ['row', 'index'], 
    methods: { 
        setDetailPanel() {
            this.$store.commit('detailpanelState', true)
            this.$store.commit('detailpanelContent', this.row)
        },
        deletePopup() { 
            this.$store.commit('deletePopup', true)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss"  scoped>
.row-item {
    @apply px-5 py-3 text-base;
}
</style>
