<template>
  <UContainer>
    <div class="min-h-screen bg-white">
    <div class="flex items-center mb-8">
  <UIcon name="ic:round-discount" class="text-xl text-black ml-4 mt-3" />
  <h1 class="font-bold text-black text-xl ml-3 mt-3">Discounts</h1>
</div>
      
      <div class="bg-white rounded-lg p-6 flex flex-col shadow-sm border border-gray-400 max-w-5xl mx-auto items-center w-300 h-100 align-middle">
        
        <div class="mb-6 flex justify-center">
          <img 
            src="https://tse4.mm.bing.net/th?id=OIP.b64nNeI03CAUnIdyuZExZgHaHa&pid=Api&P=0&h=180" 
            alt="Discounts" 
            class="w-48 h-auto" 
          />
        </div>

      
        <div class="text-center max-w-2xl">
          <h2 class="text-black font-bold mb-3 text-xl">Manage discounts and promotions</h2>
          <p class="text-black mb-6">
            Add discount codes and automatic discounts that apply at checkout. You can also use discounts with compare at prices.
          </p>
          
       
          <UButton color="primary" class="mx-auto">Create discount</UButton>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup>

</script>

<style scoped>

html, body {
  background-color: white;
  margin: 0;
  padding: 0;
}
</style>