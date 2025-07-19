<template>
  <div class="h-screen w-screen bg-white flex items-center justify-center px-4">
    <div class="text-center max-w-md mx-auto">
      
      <img
        src="https://cdn-icons-png.flaticon.com/512/8610/8610118.png"
        alt="Draft Order"
        class="w-32 h-32 mx-auto mb-6"
      />

     
      <h2 class="text-lg font-semibold text-gray-900 mb-2">
        Manually create orders and invoices
      </h2>

     
      <p class="text-gray-600 mb-6">
        Use draft orders to take orders over the phone, email invoices to customers, and collect payments.
      </p>

      <NuxtLink
        to="/createorder"
        class="bg-black text-white font-semibold px-4 py-2 rounded-md shadow hover:bg-gray-800 transition"
      >
        Create draft order
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

