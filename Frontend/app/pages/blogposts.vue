<template>
  <UContainer>
    <div class="min-h-screen bg-white">
      <div class="flex items-center mb-8">
        <UIcon name="carbon:blog" class="text-xl mr-2 text-black p-4 ml-4" />
        <h1 class="font-bold text-black text-xl">Blog posts</h1>
      </div>
      
      <div class="bg-white rounded-lg p-6 flex flex-col shadow-sm border border-gray-400 max-w-5xl mx-auto items-center w-300 h-100 align-middle">
     
        <div class="mb-6 flex justify-center">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/6114/6114045.png" 
            alt="Campaign tracking" 
            class="w-48 h-auto" 
          />
        </div>

      
        <div class="text-center max-w-2xl">
          <h2 class="text-black font-bold mb-3 text-xl">Write a blog post</h2>
          <p class="text-black mb-6">
           Blog posts are a great way to build a community around your products and your brand.
          </p>
          
         
          <UButton color="neutral" class="mx-auto">Learn more</UButton>
          <UButton color="primary" class="mx-auto">Create blog post</UButton>
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