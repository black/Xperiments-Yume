<template>
    <div class="flex items-center gap-5">
        <span class="font-bold uppercase">{{getSelectedMenu}} MODULE</span> 
        <div class="flex gap-3 py-2 ml-auto">
            <button class="add-btn"> <span class="material-icons text-base">add</span> ADD PERSON</button>
            <div class="icon-btn relative">
                <span class="material-icons text-base" v-on:click="viewoptions=!viewoptions">
                    view_day
                </span>
                <Dropdown :list="options" v-show="viewoptions" />
            </div>
            <div class="icon-btn">
                <span class="material-icons text-base">
                    person_off
                </span>
            </div>
            <div class="icon-btn">
                <span class="material-icons text-base">
                    delete
                </span>
            </div> 
        </div>
    </div>
</template>

<script>
import Dropdown from '@/components/DropdownRadioList.vue'
export default {
    name: 'TableToolBar',
    props: ['name'],
    components: {
        Dropdown
    },
    data() {
      return{
          viewoptions: false,
          options: [
              {
                  "title": "default",
                  "state":true  
              },
              {
                  "title": "compact",
                  "state": false
              },
              {
                  "title": "comfortable",
                  "state": false
              }
          ],
          selectedView:'default'
      }  
    },
    computed: { 
        getSelectedMenu() {
            return this.$store.state.menu
        } 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only --> 
<style lang="postcss"  scoped>
.add-btn{
    @apply rounded-full text-sm px-5 bg-gray-900 text-white flex items-center
}

.add-btn:hover{
    @apply bg-gray-700
}
.icon-btn {
    @apply flex justify-center align-middle p-2 rounded-full w-10 cursor-pointer;
}

.icon-btn:hover{
    @apply bg-yume-grey-2
}
 
</style>
