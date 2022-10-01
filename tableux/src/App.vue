<template> 
  <div class="flex">
    <Sidebar/>
    <div class="flex-1 relative">
      <Topbar/>
      <div class="absolute left-0 right-0 px-2 bg-yume-grey-1">
        <TableToolbar/>
        <table class="w-full rounded-t-lg bg-yume-grey-2">
          <ColumnHeader :columns="getColumns"/>  
          <Rows :row="item" :index="index" v-for="(item,index) in rowItems" :key="index" v-on:click="item.selected=!item.selected"/>
        </table> 
      </div>
      <DetailPanel v-show="panel"/>
      <DeleteModal v-show="deletePopup"/>
    </div>
  </div> 
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Topbar from '@/components/Topbar.vue'
import ColumnHeader from '@/components/ColumnHeader.vue'
import Rows from '@/components/Rows.vue'
import TableToolbar from '@/components/TableToolbar.vue' 
import DetailPanel from '@/components/DetailPanel.vue'
import DeleteModal from '@/components/DeleteModal.vue'

export default {
  name: 'App',
  components: {
    Topbar,
    TableToolbar,
    Sidebar,
    ColumnHeader,
    Rows,
    DetailPanel,
    DeleteModal 
  }, 
  computed: {
    currentPage: { 
      get() {
        return this.$store.state.currentPage
      }
    },
    rowItems: {
      set() {
        const data = require("@/assets/mock.json") 
        this.$store.commit('rowItems', data)
      }, 
      get() { 
        return this.$store.state.rowItems
      }
    },
    getColumns() {
      return require("@/assets/columns.json")
    }, 
    panel: {
      get() {
        return this.$store.state.detailpanelState
      }
    },
    deletePopup: {
      get() {
        return this.$store.state.deletePopup
      }
    } 
  }, 
  mounted() {
    this.rowItems = ''
  }
}
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.container-snap::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.container-snap {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
