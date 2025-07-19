<script setup lang="ts">
const items = [
  'https://th.bing.com/th/id/OIP.sFh9h0-FC08pPtaPE7H7vwHaHe?rs=1&pid=ImgDetMain',
  
]
</script>


<template>
  <div class="min-h-screen w-full bg-gray-100 p-4">
   
    <div class=" flex items-center gap-0">
      <UIcon name="eos-icons:products" class="text-black size-6 mr-2" />
      <span class="text-xl text-black font-bold">Products</span>
    </div>

    <div class="flex justify-center items-center mt-3">
      <div class="mt-2 bg-white rounded-xl shadow p-10 w-300 ">
      
      
       <span class="flex gap-96">
        <span>
        <span class=" font-bold text-gray-900 mb-1 text-base ">
          Add your products
        </span>
        
        <br>
        <span class="flex text-gray-600 mb-6 text-sm">
         Start by stocking your store with products your customers will love
        </span>
        
         <br><br>
        <span class="flex">
        <UButton size="md" to="/addproduct" class="mr-2 inline-flex" color='neutral' >
        Add product
        </UButton>
        <UButton size="md" to="/createPurchaseorder" color='neutral' variant="outline" class="inline-flex">
          Import 
        </UButton>
    </span>
    </span>
    <span>
  <UCarousel v-slot="{ item }" :items="items" container="flex items-star ml-100">
    <img :src="item"  class=" w-32 h-32">
  </UCarousel>
</span>
</span>
      </div>
    </div>
  </div>
</template>

