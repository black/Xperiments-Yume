<template>
    <div class="flex justify-between bg-yume-grey-2"> 
        <Organization/>
        <UserMenu/>
    </div>
</template>

<script>
import UserMenu from '@/components/UserMenu.vue'
import Organization from '@/components/Organization.vue'
export default {
    name: 'TopBar',
    components: {
        Organization,
        UserMenu
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
