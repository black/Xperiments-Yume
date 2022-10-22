<template> 
    <input class="border p-2 px-4 bg-gray-100" type="text" v-model="name">  
</template>

<script lang="ts">
import {
    defineComponent,
    ref,
    computed
} from 'vue'; 

export default defineComponent({
    name: 'DynamicForm',
    props: ['node'],
    setup() {
        const something = ref()
        const name = computed({
            set(value) {
                something.value = value
            },
            get() {
                return  something.value
            }
        })
         
        return {
            name 
        }
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped> 
</style>
