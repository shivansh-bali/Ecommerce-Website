<script setup lang="ts">
import { h, resolveComponent } from 'vue'
import type { TableColumn } from '@nuxt/ui'
import type { Row } from '@tanstack/vue-table'

const UButton = resolveComponent('UButton')
const UBadge = resolveComponent('UBadge')
const UDropdownMenu = resolveComponent('UDropdownMenu')

const toast = useToast()

type Payment = {
  menu: string;
  menuitems: string;
}

const data = ref<Payment[]>([
  {
    menu: 'Customer 1',
    menuitems: 'type1,type2'
   
  },
  {
    menu: 'Customer 2',
    menuitems: 'type1,type2'
   
  },
  {
    menu: 'Customer 3',
    menuitems: 'type1,type2'
  
  },
  {
    menu: 'Customer 4',
    menuitems: 'type1,type2'
   
  }
 
])

const columns: TableColumn<Payment>[] = [
  {
    accessorKey: 'menu',
    header: 'Menu',
  
  },
  {
    accessorKey: 'menuitems',
    header: 'Menu items',
    
  },
  
]

function getRowItems(row: Row<Payment>) {
  return [
    {
      type: 'label',
      label: 'Actions'
    },
    {
      label: 'Copy payment ID',
      onSelect() {
        navigator.clipboard.writeText(row.original.id)

        toast.add({
          title: 'Payment ID copied to clipboard!',
          color: 'success',
          icon: 'i-lucide-circle-check'
        })
      }
    },
    {
      type: 'separator'
    },
    {
      label: 'View customer'
    },
    {
      label: 'View payment details'
    }
  ]
}
</script>

<template>
  <UTable :data="data" :columns="columns" class="flex-1" />
</template>

