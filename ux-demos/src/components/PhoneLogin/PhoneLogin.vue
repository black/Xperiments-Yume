<template>
    <div class="flex flex-col gap-x-2 align-middle items-center border rounded max-w-sm mx-auto p-10 gap-y-4">
        <PhoneForm/>
        <OTPForm/>
    </div> 
</template>
    
<script lang="ts">

import PhoneForm from '@/components/PhoneLogin/PhoneForm.vue'; 
import OTPForm from '@/components/PhoneLogin/OTPForm.vue';

import {
    defineComponent,
    ref,
    computed
} from 'vue'; 

export default defineComponent({
    name: 'PhoneLogin', 
    components: {
        PhoneForm,
        OTPForm
    },
    setup(props) { 
        return { 
            
        }
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped> 
</style>
