<template>
    <div class="absolute top-full left-0 rounded mt-2 text-left bg-yume-grey-2 shadow-lg z-10"> 
        <div class="form-check flex items-center gap-1 hover:bg-yume-grey-1 px-3" v-for="(item,idx) in list" :key="idx">
            <input type="radio" v-model="selectedOption" :value="item.title" :id="item.title">
            <label class="form-check-label inline-block text-gray-800 flex-1 p-3 cursor-pointer capitalize" :for="item.title">
                {{item.title}}
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DorpdownList',
    props: ['list'], 
    computed: {
        selectedOption: {
            get() {
                return this.$store.state.viewType
            },
            set(value) {
                this.$store.commit('viewType', value)
            }
        }
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
