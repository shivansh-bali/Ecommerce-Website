<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
const open = ref(false)
const schema = z.object({
  customer: z.string().min(2)
})
const items = ref(['English'])
const value = ref('English')
type Schema = z.output<typeof schema>
const items1 = ref(['g', 'Kg', 'lb', 'oz'])
const value1 = ref('Kg')
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
    class="gap-4 flex flex-col"
    @submit="onSubmit"
  >
    <div class="font-bold text-lr ml-2 mt-2">Create order</div>
    
    <!-- Centered container for both blocks -->
    <div class="flex flex-col items-center w-full">
      <!-- Products Block -->
      <div class="rounded-lg p-6 shadow-sm border border-gray-100 w-150 h-40 ml-60">
        <div class='gap-1'>
          <span style="font-weight: bold; font-size: 14px;">Products</span><br>
          <UInput icon="i-lucide-search" size="md" variant="outline" placeholder="Search products" class="mt-1 mr-2" />
          <UModal title="Select products">
            <UButton label="Browse" color="neutral" variant="subtle" class="mr-2" />
            <template #body>
              <Placeholder class="h-48" />
            </template>
          </UModal>
          
          <UModal title="Add custom item">
            <UButton label="Add custom item" color="neutral" variant="subtle" />
            <template #body>
              <span style="display: flex;">
                <span>
                  <span style="font-size: 14px;">Item name</span><br>
                  <UInput size="md" variant="outline" class="mt-1 mr-2 w-80 flex" />
                </span>    
                <span>
                  <span style="font-size: 14px;">Price</span><br>
                  <UInput size="md" variant="outline" placeholder="0.00" class="mt-1 mr-2 w-40 flex" />
                </span> 
                <span>
                  <span style="font-size: 14px;">Quantity</span><br>
                  <UInput size="md" variant="outline" placeholder="1" class="mt-1 mr-2 w-40 flex" />
                </span> 
              </span>
              <br>
              <UCheckbox color="neutral" default-value label="Item is taxable" class="mb-2"/>
              <UCheckbox color="neutral" default-value label="Item is a physical product" class="mb-3" /> 
              <span>
                <span style="font-size: 14px;">Item weight (optional)</span><br>
                <span style="display: flex;">
                  <UInput size="md" variant="outline" placeholder="0" class="mt-1 mr-2 w-50 flex" />
                  <USelect v-model="value1" size="sm" :items="items1" class="w-20 flex h-8 mt-1" />
                </span>    
              </span>  
              <div style="font-size: 12px; color: gray; margin-top: 0.5%;">Used to calculate shipping rates accurately</div>
            </template>
            <template #footer="{ close }">
              <UButton label="Cancel" color="neutral" variant="outline" class="ml-83" @click="close" />
              <UButton label="Add item" color="neutral" />
            </template>
          </UModal>
        </div>
        <br>
        
        <UForm
          v-for="item, count in state.items"
          :key="count"
          :state="item"
          :schema="itemSchema"
          attach
          class="block"
        >
          <div><br></div>
        </UForm>
      </div>
      <br>
      
      <!-- Payment Block -->
      <div class="rounded-lg p-6 shadow-sm border border-gray-100 w-150 ml-60">
        <p><span class="font-bold text-sm">Payment</span><br>
        <div class="rounded-lg p-6 shadow-sm border border-gray-100 w-100 h-40 mt-2">
          <span>Subtotal</span><br>
          <ULink to="/components/link">Add discount</ULink><br>
          <ULink to="/components/link">Add shipping or delivery</ULink><br>
          <ULink to="/components/link">Estimated tax</ULink><br>
          <span>Total</span>
        </div>
        </p><br>
        <div class="rounded-lg p-6 shadow-lr border border-gray-100 w-100 mt-2 flex">
          <UCheckbox default-value class="mt-0.5 mr-1" />
          <span>Payment due later</span>
        </div>
        <UButton color="neutral" variant="outline" class="ml-75 mt-2">Send invoice</UButton>
        <UButton color="neutral" class="ml-2 mt-2">Mark as unpaid</UButton>
      </div>
    </div>
    <!-- End of centered container -->
    
  </UForm>
</template>




 
