<script setup lang="ts">

</script>


<template>
  <div class="min-h-screen w-full bg-gray-100 p-4">
  
    <div class="text-xl font-semibold flex items-center gap-2 mb-6">
      <UIcon name="ic:baseline-card-giftcard" class="text-black" />
      <span class="text-black font-bold">Gift Cards</span>
    </div>

    <div class="flex justify-center items-center">
      <div class="bg-white rounded-xl shadow p-10 w-full max-w-2xl text-center">
       
        <img
          src="https://th.bing.com/th/id/OIP.x7iweir_PMq3z0PVeSQQ2gHaHa?rs=1&pid=ImgDetMain"
          alt="Gift Cards Icon"
          class="w-32 h-32 mx-auto mb-6"
        />

       
        <h2 class="text-lg font-bold text-gray-900 mb-2">
          Start selling gift cards
        </h2>

     
        <p class="text-gray-600 mb-6">
          Add gift card products to sell or create gift cards and send them directly to your customers.
        </p>

     
        <UButton size="md" to="/creategiftcard" class="mr-2">
          Create gift card
        </UButton>
        <UButton size="md" to="/createPurchaseorder" color='neutral'>
          Add gift card product
        </UButton>
      </div>
    </div>
  </div>
</template>

