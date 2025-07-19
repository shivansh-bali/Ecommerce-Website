<template>
  <UContainer>
    <div class="min-h-screen bg-white">
      <div class="flex items-center mb-8">
        <UIcon name="hugeicons:catalogue" class="text-xl mr-2 text-black p-4 ml-4" />
        <h1 class="font-bold text-black text-xl">Catalogs</h1>
      </div>
      
      <div class="bg-white rounded-lg p-6 flex flex-col shadow-sm border border-gray-400 max-w-5xl mx-auto items-center w-300 h-100 align-middle">
        
        <div class="mb-6 flex justify-center">
          <img 
            src="https://thumbs.dreamstime.com/z/product-catalog-icon-isolated-white-background-your-web-mobile-app-design-133862573.jpg?w=768" 
            alt="Campaign tracking" 
            class="w-48 h-auto" 
          />
        </div>

        <div class="text-center max-w-2xl">
          <h2 class="text-black font-bold mb-3 text-xl">Personalize buying with catalogs</h2>
          <p class="text-black mb-6">
            Create custom product and pricing offerings for your customers with catalogs.
          </p>
     
          <UButton color="primary" class="mx-auto" to="/createcatalog">Create catalog</UButton>
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
