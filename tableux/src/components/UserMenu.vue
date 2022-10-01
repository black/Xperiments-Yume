<template>
    <div class="flex items-center">
        <img :src="require('@/assets/'+user.pic)" alt="" class="h-10">
        <div class="px-2">
            <span class="text-sm font-medium">{{user.name}}</span>
            <p class="text-xs">{{user.email}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserMenu', 
    computed: {
        user: {
            get() {
                return this.$store.state.user
            },
            set(value) {
                this.$store.commit('user', value)
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
