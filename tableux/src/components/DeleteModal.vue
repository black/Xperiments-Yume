<template>
    <div class="bg-yume-backdrop z-10 fixed left-0 right-0 top-0 bottom-0 flex items-center">
        <div class="flex bg-white w-1/3 mx-auto mb-4 flex-col px-6 py-4 rounded gap-2">
            <div class="flex justify-between items-center pb-5"> 
                <h1 class="text-xl font-bold">Delete</h1>
                <span class="material-icons text-base hover:bg-blue-100 rounded-full px-4 py-3 cursor-pointer"
                    v-on:click="deletePopup=false">
                    close
                </span>
            </div> 
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, illo.
            </div>
            <div class="flex gap-5 justify-end">
                <button class="px-6 py-3 rounded bg-gray-100 hover:bg-gray-200" v-on:click="deletePopup=false">CANCEL</button> 
                <button class="px-6 py-3 rounded bg-red-600 hover:bg-red-500 text-white" v-on:click="deleteItem()">DELETE</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'DetailPanel',
    computed: {
        deletePopup: {
            set(value) {
                this.$store.commit('deletePopup', value)
            }
        } 
    },
    methods: {
        deleteItem() {
            console.log("item deleted");
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
