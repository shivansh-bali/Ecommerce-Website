<script setup lang="ts">
import type { Period, Range, Stat } from '~/types'

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


/** 
const baseStats = [{
  title: 'Customers',
  icon: 'i-lucide-users',
  minValue: 400,
  maxValue: 1000,
  minVariation: -15,
  maxVariation: 25
}, {
  title: 'Conversions',
  icon: 'i-lucide-chart-pie',
  minValue: 1000,
  maxValue: 2000,
  minVariation: -10,
  maxVariation: 20
}, {
  title: 'Revenue',
  icon: 'i-lucide-circle-dollar-sign',
  minValue: 200000,
  maxValue: 500000,
  minVariation: -20,
  maxVariation: 30,
  formatter: formatCurrency
}, {
  title: 'Orders',
  icon: 'i-lucide-shopping-cart',
  minValue: 100,
  maxValue: 300,
  minVariation: -5,
  maxVariation: 15
}]
*/
import { h, resolveComponent } from 'vue'

const UButton = resolveComponent('UButton')
const mlp = ref<AccordionItem[]>([
   {
    label: 'Setup Guide',
    icon: 'material-symbols:security-update-good-outline-rounded',
    content:'Use this guide to get your product up and running'
  
   }
  ])
const items = ref<AccordionItem[]>([
  {
    label: 'Add Your First Product',
    icon: 'ant-design:product-filled',
    slot: 'colors' as const,
    content:'Add your products to the store by uploading photos, writing descriptions, and setting prices for each item you plan to offer.'
    
  },
  {
    label: 'Design Your Store',
    icon: 'tdesign:store-filled',
    slot: 'colors1' as const,
    content: 'Describe your products or brand in a few words to generate a custom theme for your online store.'
  },
  {
    label: 'Name Your Store',
    icon: 'ic:sharp-drive-file-rename-outline',
    slot: 'colors2' as const,
    content: 'Your temporary store name is currently My Store. The store name appears in your admin and your online store. '
  },
  {
    label: 'Review Your Shipping Rates',
    icon: 'pajamas:review-checkmark',
    slot: 'colors3' as const,
    content: 'You already have shipping rates set based on your location. Confirm that your rates fit your shipping strategy and reflect any discounts from our shipping labels.'
  },
  {
    label: 'Place A Test Order',
    icon: 'lsicon:place-order-outline',
    slot: 'colors4' as const,
    content: 'Make sure things are running smoothly by placing a test order from your own store.'
  },

])

const { data: stats } = await useAsyncData<Stat[]>('stats', async () => {
  return baseStats.map((stat) => {
    const value = randomInt(stat.minValue, stat.maxValue)
    const variation = randomInt(stat.minVariation, stat.maxVariation)

    return {
      title: stat.title,
      icon: stat.icon,
      value: stat.formatter ? stat.formatter(value) : value,
      variation
    }
  })
}, {
  watch: [() => props.period, () => props.range],
  default: () => []
})
const value = ref('')
</script>

<template>
 
  
  <UAccordion type="multiple" :items="items">
    <template #colors="{ item }">
     
 
  <UCard>
    <div class="flex items-center justify-between">
      <!-- Left: Text Content (shorter width) -->
      <div class="w-1/2 max-w-md">
        {{ item.content}}
        <br><br>
        <UButton color="neutral" >Add Product</UButton>
        <UButton color="black">Import Products</UButton>
      </div>

      <!-- Right: Image -->
      <img
        src="https://cdn-icons-png.flaticon.com/512/10307/10307688.png"
        alt="Product"
        class="w-40 h-auto ml-8"
      />
    </div>
  </UCard>


    </template>
    <template #colors1="{ item }">
     
      <UCard>
    <div class="flex items-center justify-between">
      <!-- Left: Text Content (shorter width) -->
      <div class="w-1/2 max-w-md">
        {{ item.content}}
        <br><br>
         <UInput v-model="value" /><br> <br>
        <UButton color="neutral" >Generate Custom Themes</UButton>
        <UButton color="black">Browse Premade Themes</UButton>
      </div>

      <!-- Right: Image -->
      <img
        src="https://d3ui957tjb5bqd.cloudfront.net/images/screenshots/products/39/396/396567/flat_vector_shop-01-o.jpg?1426020217"
        alt="Product"
        class="w-40 h-auto ml-8"
      />
    </div>
  </UCard>
    </template>
    <template #colors2="{ item }">
     
      <UCard>
    <div class="flex items-center justify-between">
      <!-- Left: Text Content (shorter width) -->
      <div class="w-1/2 max-w-md">
        {{ item.content}}
        <br><br>
         <UButton color="neutral">Name Store</UButton>
      </div>

      <!-- Right: Image -->
      <img
        src="https://cdn1.vectorstock.com/i/1000x1000/92/65/store-graphic-design-template-isolated-vector-24739265.jpg"
        alt="Product"
        class="w-40 h-auto ml-8"
      />
    </div>
  </UCard>

      
    </template>
    <template #colors3="{ item }">
      
       <UCard>
    <div class="flex items-center justify-between">
      <!-- Left: Text Content (shorter width) -->
      <div class="w-1/2 max-w-md">
        {{ item.content}}
        <br><br>
         <UButton color="neutral">Review Rates</UButton>
      </div>

      <img
        src="https://static.vecteezy.com/system/resources/previews/016/589/346/original/rating-service-concept-user-feedback-and-website-rating-customer-feedback-non-commercial-product-evaluation-review-website-experience-sharing-flat-design-modern-illustration-vector.jpg"
        alt="Product"
        class="w-40 h-auto ml-8"
      />
    </div>
  </UCard>
    </template>
    <template #colors4="{ item }">
     
       <UCard>
    <div class="flex items-center justify-between">
      <!-- Left: Text Content (shorter width) -->
      <div class="w-1/2 max-w-md">
        {{ item.content}}
        <br><br>
          <UButton color="neutral">Learn about test orders</UButton>
      </div>

 
      <img
        src="https://cdn4.vectorstock.com/i/1000x1000/93/08/order-placing-concept-icon-vector-28809308.jpg"
        alt="Product"
        class="w-40 h-auto ml-8"
      />
    </div>
  </UCard>
    </template>
  </UAccordion>

  
  
<!--

  <UPageGrid class="lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-px">
    <UPageCard
      v-for="(stat, index) in stats"
      :key="index"
      :icon="stat.icon"
      :title="stat.title"
      to="/customers"
      variant="subtle"
      :ui="{
        container: 'gap-y-1.5',
        wrapper: 'items-start',
        leading: 'p-2.5 rounded-full bg-primary/10 ring ring-inset ring-primary/25 flex-col',
        title: 'font-normal text-muted text-xs uppercase'
      }"
      class="lg:rounded-none first:rounded-l-lg last:rounded-r-lg hover:z-1"
    >
      <div class="flex items-center gap-2">
        <span class="text-2xl font-semibold text-highlighted">
          {{ stat.value }}
        </span>

        <UBadge
          :color="stat.variation > 0 ? 'success' : 'error'"
          variant="subtle"
          class="text-xs"
        >
          {{ stat.variation > 0 ? '+' : '' }}{{ stat.variation }}%
        </UBadge>
      </div>
    </UPageCard>
  </UPageGrid>
-->
</template>
