<script setup lang='ts'>
import type { Period, Range, Stat } from '~/types'

const panelOpen = ref(false);
const currentTemplate = ref({
  title: '',
  description: ''
});


const props = defineProps<{
  period: Period
  range: Range
}>()
 
const items1 = [
  'https://picsum.photos/640/640?random=1'
 
]
  
function formatCurrency(value: number): string {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  })
}

import { h, resolveComponent } from 'vue'
const UButton = resolveComponent('UButton')
const items = ref<AccordionItem[]>([
  {
    label: 'Recover abandoned checkout',
    icon: 'ant-design:product-filled',
    slot: 'colors' as const,
    content:'Convert high intent customers who have started to check out. Send them an email with a link to their abandoned checkout, making it easier to come back and finish placing their order.'
  },
  {
    label: 'Recover abandoned cart',
    icon: 'tdesign:store-filled',
    slot: 'colors1' as const,
    content: 'Convert motivated customers who have added products to their cart but haven\'t proceeded to checkout. Send them an email with a link to their abandoned cart making it easier to come back and complete their purchase.'
  },
  {
    label: 'Convert abandoned product browse',
    icon: 'ic:sharp-drive-file-rename-outline',
    slot: 'colors2' as const,
    content: 'Retarget potential customers who have viewed a specific product but have not added it to their cart. Send them an email to remind them of the product they were previously interested in and a link to view it again.'
  },
  {
    label: 'Welcome new subscribers with discount email',
    icon: 'pajamas:review-checkmark',
    slot: 'colors3' as const,
    content: 'Turn new subscribers into new customers. Send a welcome email with a discount to motivate them to make their first purchase.'
  },
  {
    label: 'Thank customers after they purchase',
    icon: 'lsicon:place-order-outline',
    slot: 'colors4' as const,
    content: 'Start building customer relationships early by sending them distinct thank you emails after their first and second order.'
  },

])

const openPanel = (templateId) => {
  currentTemplate.value = templates[templateId];
  panelOpen.value = true;
};

const closePanel = () => {
  panelOpen.value = false;
};

const checkedItems = reactive({
  abandonedCheckout: false,
  abandonedBrowse: false,
  welcomeDiscount: false
});
</script>

<style scoped>

html, body {
  background-color: white;
  margin: 0;
  padding: 0;
}
body:has(.translate-x-0) {
  overflow: hidden;
}
</style>



<template>
    
  

  <div class="ml-4 w-full min-h-screen bg-white ">
   
    <div class="p-6 mb-4">
      <div class="flex items-center">
        <UIcon name="material-symbols:automation-outline" class="text-xl mr-3 text-black" />
        <h1 class="text-xl font-bold text-black">Automations</h1>
      </div>
    </div>

    <div class="bg-white rounded-lg p-6 flex flex-col shadow-sm border border-gray-400 max-w-6xl mx-auto mb-8 ">
 
      <section class="mb-8 w-full flex flex-row items-center">
        <div class="flex-1">
          <h2 class="text-xl font-semibold mb-3 text-black">Automate multi-channel customer journeys</h2>
          <p class="text-gray-600 mb-4">
            Marketing automations are set up once and run for as long as you want.
          </p>
          <UButton color="neutral" variant="outline" class="mt-2">View templates</UButton>
        </div>
        <div class="flex-1 flex justify-center">
          <img src="https://static.vecteezy.com/system/resources/previews/019/641/399/original/automation-icon-free-vector.jpg" alt="Automation illustration" class="max-w-md h-35 w-35">
        </div>
      </section>

      <hr class="my-8 border-gray-200 w-full ">

   
      <section class="mb-8 w-full">
        <h2 class="text-base font-semibold mb-3 text-black">Turn visitors into subscribers</h2>
        <p class="text-gray-600 mb-4 text-sm">
          From opt-in forms to automated welcome emails and marketing campaigns, set your business growth in motion. 
          <a href="#" class="text-blue-600 underline">View case study</a>
        </p>
      </section>
    </div>

    <div class="bg-white rounded-lg p-6 flex flex-col shadow-sm border border-gray-400 max-w-6xl mx-auto">
      <section>
  
      

       
     <UAccordion type="multiple" :items="items">
    <template #colors="{ item }" class="bg-white">
   
    
 
  <UCard class="bg-white">
    <div class="flex items-center justify-between bg-white">
       
      <div class="w-1/2 max-w-md bg-white">
     <p class="text-black">{{ item.content }}</p>
        <br><br>
          <UButton color="primary" >Preview template</UButton>
      </div>

     
      <img
        src="https://thumbs.dreamstime.com/z/recover-abandoned-carts-e-commerce-concept-sending-personal-marketing-emails-to-shoppers-who-leave-checkout-272528658.jpg"
        alt="Product"
        class="w-40 h-auto ml-8"
      />
    </div>
  </UCard>


    </template>
    <template #colors1="{ item }" class="bg-white">
     
      <UCard class="bg-white">
    <div class="flex items-center justify-between bg-white">
    
      <div class="w-1/2 max-w-md bg-white">
       <p class="text-black">{{ item.content }}</p>
        <br><br>
         <UInput v-model="value" color="neutral" highlight placeholder="Search..." /><br> <br>
        <UButton color="primary" >Preview template</UButton>
        
      </div>

      
      <img
        src="https://cdn.shopify.com/app-store/listing_images/4a6a20543f7326f3c4fd9c298169b45b/icon/CKXH3L2L1YMDEAE=.jpeg"
        alt="Product"
        class="w-40 h-auto ml-8"
      />
    </div>
  </UCard>
    </template>
    <template #colors2="{ item }">
     
      <UCard class="bg-white">
    <div class="flex items-center justify-between bg-white">
   
      <div class="w-1/2 max-w-md bg-white">
       <p class="text-black">{{ item.content }}</p>
        <br><br>
          <UButton color="primary" >Preview template</UButton>
      </div>

    
      <img
        src="https://cdn.shopify.com/app-store/listing_images/365757f11fb5d1701c3951b066fadee0/icon/COya572Tg_ICEAE=.png"
        alt="Product"
        class="w-40 h-auto ml-8"
      />
    </div>
  </UCard>

      
    </template>
    <template #colors3="{ item }">
      
       <UCard class="bg-white">
    <div class="flex items-center justify-between bg-white">
     
      <div class="w-1/2 max-w-md bg-white">
        <p class="text-black">{{ item.content }}</p>
        <br><br>
           <UButton color="primary" >Preview template</UButton>
      </div>

    
      <img
        src="https://cdn4.vectorstock.com/i/1000x1000/79/23/subscribers-icon-from-streaming-collection-simple-vector-38127923.jpg"
        alt="Product"
        class="w-40 h-auto ml-8"
      />
    </div>
  </UCard>
    </template>
    <template #colors4="{ item }">
     
       <UCard class="bg-white">
    <div class="flex items-center justify-between bg-white">
   
      <div class="w-1/2 max-w-md bg-white">
       <p class="text-black">{{ item.content }}</p>
        <br><br>
           <UButton color="primary" >Preview template</UButton>
      </div>

   
      <img
        src="https://cdn.iconscout.com/icon/premium/png-256-thumb/thank-your-customers-8539668-6967253.png?f=webp&w=256"
        alt="Product"
        class="w-40 h-auto ml-8"
      />
    </div>
  </UCard>
    </template>
  </UAccordion>
    
       

         
      </section>
    </div>

    <div 
      class="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out transform"
      :class="{'translate-x-0': panelOpen, 'translate-x-full': !panelOpen}"
    >
      <div class="p-6 h-full overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-bold">{{ currentTemplate.title }}</h3>
          <UButton 
            color="gray" 
            variant="ghost" 
            icon="i-heroicons-x-mark" 
            @click="closePanel"
          />
        </div>
        
        <div class="space-y-4">
          <p>{{ currentTemplate.description }}</p>
          <div class="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 class="font-medium mb-2">Template Preview</h4>
            <p class="text-sm text-gray-600">This would show the actual template design</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

