<script setup lang="ts">

</script>


<template>
  <div class="min-h-screen w-full bg-gray-100 p-4">

    <div class="text-xl font-semibold flex items-center gap-2 mb-6">
      <UIcon name="material-symbols:inventory-2" class="text-black" />
      <span class="text-black font-bold">Inventory</span>
    </div>

    <div class="flex justify-center items-center">
      <div class="bg-white rounded-xl shadow p-10 w-full max-w-2xl text-center">
      
        <img
          src="https://static.vecteezy.com/system/resources/previews/013/815/464/original/inventory-management-icon-design-free-vector.jpg"
          alt="Inventory Icon"
          class="w-32 h-32 mx-auto mb-6"
        />

        <h2 class="text-lg font-bold text-gray-900 mb-2">
          Keep track of your inventory
        </h2>

        <p class="text-gray-600 mb-6">
          When you enable inventory tracking on your products, you can view and adjust their inventory counts here.
        </p>

        <UButton size="md" to="/productslist">
          Go to products
        </UButton>
      </div>
    </div>
  </div>
</template>

