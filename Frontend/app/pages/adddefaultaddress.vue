<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

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
const itemsp = ref(['India'])
const valuep = ref('India')

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
   <div class="">
  <div class="mb-1 mt-2">Add default address</div><br>
  <div>
    <div class="text-sm mb-1">Country/Region</div>
   <USelectMenu v-model="valuep" :items="itemsp" class="w-full" />
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
