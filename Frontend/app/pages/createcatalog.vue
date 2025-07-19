<template>
  <UContainer class="bg-white">
    <UPage>
      <UIcon name="ic:round-card-giftcard" class=""></UIcon>
        <span class="text-black font-bold ml-1">New catalog</span>
   
      
      <UPageBody>
        <div class="flex">
        <UCard  class="bg-white rounded-xl shadow p-10 w-250  flex mr-3 ml-10">
          
          
               <div class="text-black -ml-10 mb-1">Title</div>
               <span class="flex">
               <UInput v-model="valueio" class="w-200 -ml-10"/>
       <USelectMenu placeholder="Active" :items="items" class="w-30 ml-4" />
               </span>
  
        </UCard>
        
       </div>
          <UCard  class="bg-white rounded-xl shadow p-10 w-250 ml-10">
          <UFormGroup label="Expiration date" class="mb-4">
            <div class="text-black -mt-10 -ml-5 font-bold mb-1">Expiration date</div>
            <p class="text-sm text-gray-600 mb-2 -ml-5">
              Countries have different laws for gift card expiry dates. Check the laws for your country before changing this date.
            </p>
            
            <div class="space-y-2 -ml-5 ">
              <UCheckbox 
                v-model="noExpirationDate" 
                label="No expiration date" 
                name="expirationOption"
                
              />
              <UCheckbox 
                v-model="setExpirationDate" 
                label="Set expiration date" 
                name="expirationOption"
                
              />
              
              <UInput 
                v-if="setExpirationDate" 
                type="date" 
                v-model="expirationDate" 
                class="mt-2"
              />
            </div>
          </UFormGroup>
          </UCard>
           
      </UPageBody>
    </UPage>
  </UContainer>
</template>

<script setup>
const valueio = ref('')
const items = ref(['Active', 'Draft'])
// Generate a random gift card code
const giftCardCode = ref('879rpfjfgbwrpp6p');
const initialValue = ref(10.00);
const noExpirationDate = ref(true);
const setExpirationDate = ref(false);
const expirationDate = ref('');
const selectedCustomer = ref(null);
const notes = ref('');

// Sample customer data
const customers = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
];
</script>

<style scoped>
/* Add any custom styles if needed */
</style>