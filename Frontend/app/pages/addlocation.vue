<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
const open = ref(false)
const schema = z.object({
  customer: z.string().min(2)
})
const valuegt = ref(false)
const items = ref(['English', ])
const value = ref('English')
type Schema = z.output<typeof schema>

const itemSchema = z.object({
  description: z.string().min(1),
  price: z.number().min(0)
})
const itemsp = ref(['Collect tax', 'Collect tax unless exemptions apply', 'Don\'t collect tax'])
const valuep = ref('Collect tax')
const itemspp = ref(['India'])
const valuepp = ref('India')

type ItemSchema = z.output<typeof itemSchema>

const state = reactive<Partial<Schema & { items: Partial<ItemSchema>[] }>>({
  items: [{}]
})

function addItem() {
  if (!state.items) {
    state.items = []
  }
  state.items.push({})
}

function removeItem() {
  if (state.items) {
    state.items.pop()
  }
}

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}


</script>


<template>
  <div class="min-h-screen w-full bg-gray-100 p-4">
    <div class="text-xl font-semibold flex items-center gap-2 mb-6">
      <UIcon name="material-symbols:add-location" class="text-black" />
      <span class="text-black font-bold">Add location</span>
    </div>

    <div class="flex justify-center items-center">
      <div class="bg-white rounded-xl shadow pr-10 pl-10 pt-1 pb-10 w-full max-w-4xl  border border-gray-400">
      <div class="-ml-3 font-bold mt-1 text-gray-800 text-base">Location Details</div><br>
<div class="border border-gray-200 rounded-2xl">
        <div class="text-base text-gray-400 mb-2 ml-2">
             <UIcon name="material-symbols:storefront" class="size-4 mr-2"  />

         Name
    <USlideover v-model:open="open" title="Add location name"  description="Give this location a short, identifiable name. If this location offers local pickup, this name will be visible to your customers at checkout and in notifications."  :ui="{
      footer: 'justify-end' }"
      >
     <UButton
    :avatar="{
      src: 'https://th.bing.com/th/id/OIP.NMPCNSo7-3CcGxC5FADhYgHaHa?rs=1&pid=ImgDetMain'
    }"
    size="md"
    variant="outline"
    class=" ml-164"
  />

    <template #body>
      <UForm
    :state="state"
    :schema="schema"
    class="gap-4 flex flex-col w-100"
    @submit="onSubmit"
  >
   
  
  <div>
    
  <div class='flex gap-1'>
    <UFormField label="Location name" name="customer" class='w-100 mb-1'>
      <UInput v-model="state.customer" class="w-100"  />
    </UFormField>
    
  </div><br>

 
 
   
 </div>
   
 </UForm>
    </template>

    <template #footer="{ close }">
      <UButton label="Cancel" color="neutral" variant="outline" @click="close" />
      <UButton label="Done" color="neutral" />
    </template>
  </USlideover>
          

    </div>
    <USeparator class="w-200 ml-2 mb-2 bg-gray-100" />

 <div class="text-base text-gray-400 mb-2 ml-2">
     <UIcon name="material-symbols:add-location-alt-outline" class="size-4 mr-2" />
         Address
    <USlideover v-model:open="open" title="Edit location address"  :ui="{
  
      footer: 'justify-end'
      
      }"
      >
     <UButton
    :avatar="{
      src: 'https://th.bing.com/th/id/OIP.NMPCNSo7-3CcGxC5FADhYgHaHa?rs=1&pid=ImgDetMain'
    }"
    size="md"
    variant="outline"
    class=" ml-160"
  />
    
    <template #body>
      <UForm
    :state="state"
    :schema="schema"
    class="gap-4 flex flex-col w-300"
    @submit="onSubmit"
  >
   <div class="">
  
  <div>
    <div class="text-sm mb-1">Country/Region</div>
   <USelectMenu v-model="valuepp" :items="itemspp" class="w-full" />
   </div><br>
  <div class='flex gap-1'>
    <UFormField label="First name" name="customer" class='w-100 mb-1'>
      <UInput v-model="state.customer" class="w-100"  />
    </UFormField>
     <UFormField label="Last name" name="customer" class='w-100 mb-1'>
      <UInput v-model="state.customer" class="w-100" />
    </UFormField>
  </div><br>

  <UFormField label="Company" name="customer" class='w-full mb-1'>
      <UInput v-model="state.customer" class="w-full"  />
    </UFormField><br>
    <UFormField label="Address" name="customer" class='w-full mb-1'>
      <UInput v-model="state.customer" class="w-full mb-1"  />
    </UFormField><br>
    <UFormField label="Apartment,Suite,etc." name="customer" class='w-full'>
      <UInput v-model="state.customer" class="w-full"  />
    </UFormField><br>
    <div class='flex gap-1'>
    <UFormField label="City" name="customer" class='w-100 mb-1'>
      <UInput v-model="state.customer" class="w-100"  />
    </UFormField>
     <UFormField label="State" name="customer" class='w-100 mb-1'>
      <UInput v-model="state.customer" class="w-100" />
    </UFormField>
  </div><br>
    <UFormField label="PIN code" name="customer" class='w-full mb-1'>
      <UInput v-model="state.customer" class="w-full"  />
    </UFormField><br>
 <UFormField label="Phone" name="customer" class='w-full mb-1'>
      <UInput v-model="state.customer" class="w-full"  />
    </UFormField><br>
   
 </div>
     <div>
     
    </div>
 </UForm>
    </template>

    <template #footer="{ close }">
      <UButton label="Cancel" color="neutral" variant="outline" @click="close" />
      <UButton label="Save" color="neutral" />
    </template>
  </USlideover>
         
    </div>
</div>
 
      </div>
    </div>
    <br>
     <div class="flex justify-center items-center">
      <div class="bg-white rounded-xl shadow pr-10 pl-10 pt-1 pb-4 w-full max-w-4xl  border border-gray-400">
      <div class="-ml-3 font-bold mt-1 text-gray-800 text-base mb-2 ">Fulfillment</div>

<span class="text-gray-500 -ml-3 text-sm flex">Use inventory at this location to fulfill online orders<USwitch v-model="valuegt" class="ml-110"/>

</span>

    </div>
</div>
 
      
  </div>
</template>
