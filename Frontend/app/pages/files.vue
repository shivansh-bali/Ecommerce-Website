<template>
  <UContainer>
    <div class="min-h-screen bg-white">
      <div class="flex items-center mb-8">
        <UIcon name="material-symbols:files" class="text-xl mr-2 text-black p-4 ml-4" />
        <h1 class="font-bold text-black text-xl">Files</h1>
      </div>
      
      <div class="bg-white rounded-lg p-6 flex flex-col shadow-sm border border-gray-400 max-w-5xl mx-auto items-center w-300 h-100 align-middle">
       
        <div class="mb-6 flex justify-center">
          <img 
            src="https://static.vecteezy.com/system/resources/previews/000/420/464/original/vector-document-in-folder-icon.jpg" 
            alt="Files" 
            class="w-48 h-auto" 
          />
        </div>

      
        <div class="text-center max-w-2xl">
          <h2 class="text-black font-bold mb-3 text-xl">Upload and manage your files</h2>
          <p class="text-black mb-6">
            Files can be images, videos, documents, and more.
          </p>
        
          <UButton color="primary" class="mx-auto">Upload files</UButton>
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