<template>
    <div class="flex items-center ">
        <div class="bg-yume-grey-3">
            <img :src="require('@/assets/'+organization.logo)" alt="" class="h-14">
        </div>
        <div class="px-5">
            <span class="text-sm font-bold uppercase">{{organization.name}}</span>
            <p class="text-xs">PORTAL NAME</p>
        </div>
    </div>
</template>

<script lang="ts">
import {
    computed
} from 'vue'  
import {
    useStore
} from 'vuex'
export default {
    name: 'OrganizationView',
    setup() {
        const store = useStore()
        const organization  = computed({
            get() {
                return store.state.organization
            },
            set(value) {
               store.commit('organization', value)
            }
        })

        return {
            organization
        }
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
