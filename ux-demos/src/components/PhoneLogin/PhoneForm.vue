<template>
    <div class="flex flex-col gap-2">
        <div class="w-full">
            <input v-model="phoneNumber" maxlength="10" type="tel" class="w-full border border-gray-200 px-4 py-2 rounded" placeholder="+919990099900"> 
            <p class="text-xs text-red-600">{{error?"Please enter a valid number":""}}</p>
        </div>
         <button class="px-5 py-2 rounded bg-green-600 hover:bg-green-500 text-white">SEND</button>
    </div> 
</template>
    
<script lang="ts">
import {
    defineComponent,
    ref,
    computed
} from 'vue'; 

export default defineComponent({
    name: 'PhoneForm',  
    setup(props) {
        const phone = ref(0)
        const phoneNumber = computed({
            set(value:number) {
                phone.value = value
            },
            get() {
                return phone.value
            }
        })

        const error = computed(() => {
            return isNaN(phoneNumber.value)
        })
        
        return { 
            phoneNumber,error
        }
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped> 
</style>
