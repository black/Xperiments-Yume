<template>
        <div class="flex items-center mx-3 rounded hover:bg-yume-grey-1 hover:text-green-700 relative group cursor-pointer" :class="{'bg-green-700 text-white':selected}">
            <span class="material-icons text-base px-4 py-3">
                {{menu.icon}}
            </span>
            <transition name="fade">
                <span v-if="expanded" class="capitalize">{{menu.title}}</span>
            </transition>
            <transition name="fade">
                <div v-if="!expanded" class="absolute left-full px-5 py-3 ml-5 rounded bg-green-700 text-green-100 hidden group-hover:block z-40 shadow-lg capitalize" :class="{'hidden':expanded,'block':!expanded }">
                    <span>{{menu.title}}</span>
                </div>
            </transition>
        </div> 
</template>

<script lang="ts"> 
export default {
    name: 'MenuRow',
    props: ['menu', 'expanded','selected'], 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
