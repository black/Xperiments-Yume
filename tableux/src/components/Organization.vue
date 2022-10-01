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

<script>
export default {
    name: 'OrganizationView',
    computed: {
        organization: {
            get() {
                return this.$store.state.organization
            },
            set(value) {
                this.$store.commit('organization', value)
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
