<template>
    <div class="flex justify-center items-center h-screen bg-red-100">
        <span class="text-6xl text-emerald-700">{{title}}</span>
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
    name: 'ProfileComp',
    setup(props: any) {
        const title = ref("404")
        return {
            title
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
