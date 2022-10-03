<template>
    <div class="flex justify-center items-center h-screen">
        <span class="text-6xl text-emerald-700">{{title}}</span>
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
    name: 'PaymentMod',
    setup(props: any) {
        const title = ref("Organization")
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
