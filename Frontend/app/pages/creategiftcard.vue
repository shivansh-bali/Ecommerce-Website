<template>
  <UContainer class="bg-white">
    <UPage>
      <UIcon name="ic:round-card-giftcard" class=""></UIcon>
        <span class="text-black font-bold ml-1">Create gift card</span>
   
      
      <UPageBody>
        <div class="flex">
        <UCard  class="bg-white rounded-xl shadow p-10 w-3xl  flex mr-3 ml-10">
          <h2 class="text-lg font-semibold mb-4 -mt-7 -ml-7 text-black">Gift card details</h2>
               <div class="text-black -ml-7 mb-1">Gift card code</div>
         <input 
  type="text" 
  placeholder="fhfd3u9ry3r893" 
  style="
    background: white;
    border: 1px solid #ddd;
    border-radius: 7px;
    padding: 8px 12px;
    font-size: 16px;
      height: 30px;
    width: 200px;
    outline: none;
    margin-left: -1.6rem;
  "
>
<br><br>
  <div class="text-black -ml-7 mb-1">Initial value</div>
  <input 
  type="text" 
  placeholder="20" 
  style="
    background: white;
    border: 1px solid #ddd ;
    border-radius: 7px;
    padding: 8px 12px;
    height: 30px;
    font-size: 16px;
    width: 200px;
    outline: none;
    margin-left: -1.6rem;
  "
>
        </UCard>
        <UCard  class="bg-white rounded-xl shadow p-10 w-60 flex">
          <UFormGroup label="Customer" class="mb-4 -ml-12">
            <USelectMenu 
              v-model="selectedCustomer" 
              :options="customers" 
              placeholder="Search or create customer"
              searchable
              creatable
            />
          </UFormGroup>
          <br><br>
          <UFormGroup label="Notes" class="-ml-8">
            <UTextarea v-model="notes" placeholder="No notes" />
          </UFormGroup>
       </UCard>
       </div>
          <UCard  class="bg-white rounded-xl shadow p-10 w-full max-w-2xl ml-10">
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