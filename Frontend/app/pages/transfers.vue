<script setup lang="ts">

</script>


<template>
  <div class="min-h-screen w-full bg-gray-100 p-4">

    <div class="text-xl font-semibold flex items-center gap-2 mb-6">
      <UIcon name="hugeicons:square-arrow-data-transfer-horizontal" class="text-black" />
      <span class="text-black font-bold">Transfers</span>
    </div>

    
    <div class="flex justify-center items-center">
      <div class="bg-white rounded-xl shadow p-10 w-full max-w-2xl text-center">
    
        <img
          src="https://static.vecteezy.com/system/resources/previews/001/963/609/original/transfer-isolated-icon-symbol-for-website-and-mobile-app-free-vector.jpg"
          alt="Transfers Icon"
          class="w-32 h-32 mx-auto mb-6"
        />

        <h2 class="text-lg font-bold text-gray-900 mb-2">
          Move inventory between locations
        </h2>

        
        <p class="text-gray-600 mb-6">
          Move and track inventory between your buisness locations.<br><br>
          To create a transfer you’ll need more than one location.
        </p>

   
        <UButton size="md" to="/addlocation">
          Add a location
        </UButton>
      </div>
    </div>
  </div>
</template>

