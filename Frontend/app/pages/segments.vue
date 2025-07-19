<script setup lang="ts">
import { h, resolveComponent } from 'vue'
import type { TableColumn } from '@nuxt/ui'
import type { Row } from '@tanstack/vue-table'

const UButton = resolveComponent('UButton')
const UBadge = resolveComponent('UBadge')
const UDropdownMenu = resolveComponent('UDropdownMenu')

const toast = useToast()

type Payment = {
  id: string
  date: string
  status: 'paid' | 'failed' | 'refunded'
  email: string
  amount: number
}

const data = ref<Payment[]>([
  {
    id: '4600',
    date: '2024-03-11T15:30:00',
    status: 'paid',
    email: 'james.anderson@example.com',
    amount: 594
  },
  {
    id: '4599',
    date: '2024-03-11T10:10:00',
    status: 'failed',
    email: 'mia.white@example.com',
    amount: 276
  },
  {
    id: '4598',
    date: '2024-03-11T08:50:00',
    status: 'refunded',
    email: 'william.brown@example.com',
    amount: 315
  },
  {
    id: '4597',
    date: '2024-03-10T19:45:00',
    status: 'paid',
    email: 'emma.davis@example.com',
    amount: 529
  },
  {
    id: '4596',
    date: '2024-03-10T15:55:00',
    status: 'paid',
    email: 'ethan.harris@example.com',
    amount: 639
  }
])

const columns: TableColumn<Payment>[] = [
  {
    accessorKey: 'id',
     header: () => h('span', { class: 'text-black font-black' }, '#'),
    
    cell: ({ row }) => 
  h('span', { class: 'text-black' }, `#${row.getValue('id')}`)

  },
  {
    accessorKey: 'date',
     header: () => h('span', { class: 'text-black font-black' }, 'Date'),
    cell: ({ row }) => {
       const formattedDate = new Date(row.getValue('date')).toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  return h('span', { class: 'text-black' }, formattedDate);
    }
  },
  {
    accessorKey: 'status',
   header: () => h('span', { class: 'text-black font-black' }, 'Status'),
    cell: ({ row }) => {
      const color = {
        paid: 'success' as const,
        failed: 'error' as const,
        refunded: 'neutral' as const
      }[row.getValue('status') as string]

      return h(UBadge, { class: 'capitalize', variant: 'subtle', color }, () =>
        row.getValue('status')
      )
    }
  },
  {
    accessorKey: 'email',
   header: () => h('span', { class: 'text-black font-black' }, 'Email'),
    cell: ({ row }) =>
    h('span', { class: 'text-black font-medium' }, row.getValue('email'))
  },
 
  
  {
    accessorKey: 'amount',
    header: () => h('div', { class: 'text-right text-black font-black' }, 'Amount'),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('amount'))

      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR'
      }).format(amount)

      return h('div', { class: 'text-right font-medium text-black' }, formatted)
    }
  },
  {
    id: 'actions',
    accessorKey: 'actions',
     header: () => h('div', { class: 'text-right text-black font-black w-full pr-4' }, 'Actions'),
    cell: ({ row }) => {
      return h(
        'div',
        { class: 'w-full text-right pr-4' },
        h(
          UDropdownMenu,
          {
            content: {
              align: 'end'
            },
            items: getRowItems(row),
            'aria-label': 'Actions dropdown'
          },
          () =>
            h(UButton, {
              icon: 'i-lucide-ellipsis-vertical',
              color: 'black',
    
              variant: 'ghost',
              class: 'ml-auto  text-black',
              'aria-label': 'Actions dropdown'
            })
        )
      )
    }
  }
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
      <div class="text-xl font-semibold flex flex-col gap-4 mb-6 bg-white w-325 h-325">
        <div class="flex gap-1 items-center ml-2 mt-2 mt-0.5 self-start ">
      <UIcon name="material-symbols:segment" class="text-black" />
      <span class="text-black font-bold">Segments</span>
    </div>
    
    <div>
  <UTable :data="data" :columns="columns" class="flex-1 bg-white " />
  </div>
</div>
</template>
