<template>
  <div class="min-h-screen w-full bg-white flex items-center justify-center p-4">
    
  
    <div class="max-w-lg w-full">
    
      <div class="text-xl font-semibold flex items-center gap-2 mb-4">
        <UIcon name="i-heroicons-shopping-cart" class="text-black" />
        <span class="text-black font-bold">Abandoned checkouts</span>
      </div>

      <div class="bg-white rounded-lg p-6 flex flex-col items-center shadow-sm text-center border border-gray-200">
    
        <img
          src="https://static-00.iconduck.com/assets.00/cart-cross-fill-icon-256x254-e5wsxjtf.png"
          alt="Abandoned Checkout"
          class="w-32 h-32 object-contain mb-4"
        />

       
        <div>
          <h2 class="text-black font-bold mb-1">Abandoned checkouts will show here</h2>
          <p class="text-gray-600">
            See when customers put an item in their cart but don’t check out.
            You can also email customers a link to their cart.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

