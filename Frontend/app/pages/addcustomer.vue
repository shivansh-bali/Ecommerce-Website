<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
const open = ref(false)
const schema = z.object({
  customer: z.string().min(2)
})
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
  <UForm
    :state="state"
    :schema="schema"
    class="gap-4 flex flex-col w-300"
    @submit="onSubmit"
  >
   <div class=" rounded-lg p-6 shadow-sm border border-gray-400 w-full mx-auto h-120">
  <div class="mb-1 -mt-2">Customer Overview</div><br>
  <div class='flex gap-1'>
    <UFormField label="First name" name="customer" class='w-100'>
      <UInput v-model="state.customer" class="w-100"  />
    </UFormField>
     <UFormField label="Last name" name="customer" class='w-100'>
      <UInput v-model="state.customer" class="w-100" />
    </UFormField>
  </div><br>
  
  <label class='font-medium text-gray-700 dark:text-gray-200' style="font-size: 14px;">Language</label><br>
   <UInputMenu v-model="value" arrow :items="items" class="mt-1"/>
    <UForm
      v-for="item, count in state.items"
      :key="count"
      :state="item"
      :schema="itemSchema"
      attach
      class="block"
    >
      <div><br>
    <UFormField label="Email" name="customer" class="block w-full">
      <UInput v-model="state.customer" class="w-full"/>
    </UFormField>
    </div>
    <br>
      <UFormField :label="!count ? 'Phone number' : undefined" name="phonenumber" class="w-full">
        <UInput v-model="item.price" type="number" class="w-full" />
      </UFormField>
    
    </UForm>
    <br>
    <UCheckbox label="Customer agreed to receive marketing emails." />
    <UCheckbox label="Customer agreed to receive SMS marketing text messages." />
    </div>
     <div class=" rounded-lg p-6 shadow-sm border border-gray-400 w-full mx-auto">
    <p><span class="font-bold text-sm">Default Address</span><br>
    <span class="text-sm text-gray-400">The primary address of this customer</span>
    </p><br>
     <USlideover v-model:open="open" title="Add default address"  :ui="{
      footer: 'justify-end' }"
      >
    <UButton label="Add address" color="neutral" variant="subtle" />
    
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
      <UButton type="submit" color="primary">
        Save
      </UButton>
    </div>
 </UForm>
    </template>

    <template #footer="{ close }">
      <UButton label="Cancel" color="neutral" variant="outline" @click="close" />
      <UButton label="Submit" color="neutral" />
    </template>
  </USlideover>
    </div>
    <div class=" rounded-lg p-6 shadow-sm border border-gray-400 w-full mx-auto">
    <p ><span class="font-bold text-sm">Tax details</span><br>
    <span class="text-sm text-gray-400">Tax settings</span>
    </p>
   <br>
    <USelectMenu v-model="valuep" :items="itemsp" class="w-full" />
    </div>
    
    <div>
      <UButton type="submit">
        Submit
      </UButton>
    </div>
  </UForm>
</template>

