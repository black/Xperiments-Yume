<template>
    <div class="flex items-center mx-3 rounded hover:bg-yume-grey-1 hover:text-green-700 relative group cursor-pointer" :class="{'bg-green-700 text-white':selected}">
        <span class="material-icons text-base px-4 py-3">
            {{menu.icon}}
        </span>
        <span v-show="expanded" class="capitalize">{{menu.title}}</span>
        <div class="absolute left-full px-5 py-3 ml-5 rounded bg-yume-grey-3 hidden group-hover:block z-40 shadow-lg capitalize" :class="{'hidden':expanded,'block':!expanded }">
            <span>{{menu.title}}</span>
        </div>
    </div>
</template>

<script> 
export default {
    name: 'MenuRow',
    props: ['menu', 'expanded','selected'], 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
