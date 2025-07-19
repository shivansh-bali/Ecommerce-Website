<script setup lang="ts">

</script>


<template>
  <div class="min-h-screen w-full bg-gray-100 p-4">
   
    <div class=" flex items-center gap-0">
      <UIcon name="garden:customer-lists-fill-26" class="text-black size-6 " />
      <span class="text-xl text-black font-bold">Customers</span>
    </div>

    <div class="flex justify-center items-center">
      <div class="bg-white rounded-xl shadow p-10 w-full max-w-2xl text-center">
      
        <img
          src="https://img.freepik.com/premium-vector/customer-interaction-icon-costumer-retention-icon-network-icon_995545-50.jpg?w=2000"
          alt="Purchase Orders Icon"
          class="w-32 h-32 mx-auto mb-6"
        />

        <h2 class="text-lg font-bold text-gray-900 mb-2">
          Everything customers-related in one place
        </h2>

       
        <p class="text-gray-600 mb-6">
          Manage customer details, see customer order history, and group customers into segments.
        </p>

    
        <UButton size="md" to="/addcustomer" class="mr-2">
          Add customer
        </UButton>
        <UButton size="md" to="/createPurchaseorder" color='neutral'>
          Import customers
        </UButton>
      </div>
    </div>
  </div>
</template>

