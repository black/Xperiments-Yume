<template>
    <div class="flex flex-col gap-2">
        <div class="w-full">
            <input v-model="phoneNumber" maxlength="10" type="tel" class="w-full border border-gray-200 px-4 py-2 rounded" placeholder="+919990099900"> 
            <p class="text-xs text-red-600">{{error?"Please enter a valid number":""}}</p>
        </div>
        <div class="flex align-middle gap-4">
            <p class="text-sm">Didn't receive OTP? <span class="font-bold">RESEND</span></p>
            <button class="px-5 py-2 rounded bg-green-600 hover:bg-green-500 text-white">SEND</button>
        </div>
    </div> 
</template>
    
<script lang="ts">
import {
    defineComponent,
    ref,
    computed
} from 'vue'; 

export default defineComponent({
    name: 'OTPForm', 
    props:[],
    setup(props) {
        const otp = ref([])
        // const otpNumber = computed({
        //     set(value:Array<number>) {
        //         otp.value = value
        //     },
        //     get() {
        //         return otp.value
        //     }
        // })

        // const error = computed(() => {
        //     return isNaN(phoneNumber.value)
        // })
        
        // return { 
        //     otpNumber
        // }
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped> 
</style>
