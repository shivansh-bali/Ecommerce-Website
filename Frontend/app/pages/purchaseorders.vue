<script setup lang="ts">

</script>


<template>
  <div class="min-h-screen w-full bg-gray-100 p-4">

    <div class="text-xl font-semibold flex items-center gap-2 mb-6">
      <UIcon name="streamline:computer-desktop-check-success-approve-device-display-desktop-computer" class="text-black" />
      <span class="text-black font-bold">Purchase Orders</span>
    </div>

 
    <div class="flex justify-center items-center">
      <div class="bg-white rounded-xl shadow p-10 w-full max-w-2xl text-center">
   
        <img
          src="https://cdn-icons-png.flaticon.com/512/10112/10112496.png"
          alt="Purchase Orders Icon"
          class="w-32 h-32 mx-auto mb-6"
        />

  
        <h2 class="text-lg font-bold text-gray-900 mb-2">
          Manage your purchase orders
        </h2>

    
        <p class="text-gray-600 mb-6">
          Track and receive inventory ordered form suppliers.
        </p>

    
        <UButton size="md" to="/createPurchaseorder">
          Create purchase order
        </UButton>
      </div>
    </div>
  </div>
</template>

