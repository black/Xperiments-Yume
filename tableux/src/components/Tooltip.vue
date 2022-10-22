<template> 
    <div class="rounded-sm bg-gray-400 text-white px-2 py-2 absolute bottom-full left-1/2 -translate-x-1/2 min-w-full text-xs tooltip">
        <span>{{message}}</span>  
    </div>
</template> 

<script lang="ts">   
export default {
    name: 'ToolTip',
    props: ['message'] 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss"  scoped>
.row-item {
    @apply px-5 py-3 text-base;
} 

.tooltip:before{
    content: '';
    position: absolute;
    top:100%;
    left:50%;
    transform: translateX(-50%);
    height: 0px;
    width: 0px; 
    border-right: solid 5px transparent;
    border-left: solid 5px transparent;
    border-top: solid 5px rgb(156 163 175); 
}


</style>
