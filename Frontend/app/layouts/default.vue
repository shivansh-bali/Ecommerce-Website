<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()
const toast = useToast()

const open = ref(false)


const links = [[{
  label: 'Home',
  icon: 'i-lucide-house',
  to: '/',
  type:'trigger',
  onSelect: () => {
    open.value = false
  }
}, {
  label: 'Orders',
  icon: 'material-symbols:orders',
  to: '/orders',
  trigger: true,
  
  onSelect: () => {
    open.value = false
  },
  children: [ {
    label: 'Lists',
    to: '/orders',
    onSelect: () => {
      open.value = false
    }
  },{
    label: 'Drafts',
    to: '/drafts',
    exact: true,
    onSelect: () => {
      open.value = false
    }
  }, {
    label: 'Abandoned checkouts',
    to: '/abandonedCheckouts',
    onSelect: () => {
      open.value = false
    }
  }]
}, {
  label: 'Products',
  icon: 'ic:baseline-production-quantity-limits',
  to: '/products',
  type:'trigger',
  onSelect: () => {
    open.value = false
  }
  ,
  children: [{
    label: 'Add/Import Product',
    to: '/addimpproduct',
    onSelect: () => {
      open.value = false
    }
  },{
    label: 'Lists',
    to: '/productslist',
    onSelect: () => {
      open.value = false
    }
  },{
    label: 'Collections',
    to: '/collections',
    exact: true,
    onSelect: () => {
      open.value = false
    }
  }, {
    label: 'Inventory',
    to: '/inventory',
    onSelect: () => {
      open.value = false
    }
  }, {
    label: 'Purchase orders',
    to: '/purchaseorders',
    onSelect: () => {
      open.value = false
    }
  }, {
    label: 'Transfers',
    to: '/transfers',
    onSelect: () => {
      open.value = false
    }
  }, {
    label: 'Gift Cards',
    to: '/giftcards',
    onSelect: () => {
      open.value = false
    }
  }]
}, 
  {
  label: 'Customers',
  to: '/settings',
  icon: 'ri:customer-service-fill',
  
  type:'trigger',
  children: [{
    label: 'Add/Import Customers',
    to: '/customerlist',
    exact: true,
    onSelect: () => {
      open.value = false
    }
  },{
    label: 'Segments',
    to: '/segments',
    exact: true,
    onSelect: () => {
      open.value = false
    }
  }]

}
,{
  label: 'Marketing',
  to: '/settings',
  icon: 'nimbus:marketing',
  type:'trigger',
  children: [{
    label: 'Campaigns',
    to: '/campaigns',
    exact: true,
    onSelect: () => {
      open.value = false
    }
  }, {
    label: 'Attribution',
    to: '/settings/members',
    onSelect: () => {
      open.value = false
    }
  }, {
    label: 'Automations',
    to: '/automations',
    onSelect: () => {
      open.value = false
    }
  }

]},
{
  label: 'Discounts',
  to: '/discounts',
  icon: 'ic:round-discount',
  
},{
  label: 'Content',
  to: '/settings',
  icon: 'material-symbols:content-copy-rounded',
  
  type:'trigger',
  children: [{
    label: 'Metaobjects',
    to: '/metaobjects',
    exact: true,
    onSelect: () => {
      open.value = false
    }
  }, {
    label: 'Files',
    to: '/files',
    onSelect: () => {
      open.value = false
    }
  }, {
    label: 'Menus',
    to: '/menus',
    onSelect: () => {
      open.value = false
    }
  }, {
    label: 'Blog posts',
    to: '/blogposts',
    onSelect: () => {
      open.value = false
    }
  }]
},{
  label: 'Markets',
  to: '/settings',
  icon: 'lsicon:marketplace-filled',
 
  type:'trigger',
  children: [{
    label: 'Catalogs',
    to: '/catalogs',
    exact: true,
    onSelect: () => {
      open.value = false
    }
  }

]
}, {
  label: 'Analytics',
  to: '/settings',
  icon: 'material-symbols:analytics-outline',
 
  type:'trigger',
  children: [{
    label: 'Reports',
    to: '/settings',
    exact: true,
    onSelect: () => {
      open.value = false
    }
  }, {
    label: 'Live View',
    to: '/settings/members',
    onSelect: () => {
      open.value = false
    }
  
}]

}

], [
], [{
  label: 'Online Store',
  icon: 'lsicon:store-outline',
  to: 'https://github.com/nuxt-ui-pro/dashboard',
   children: [{
    label: 'Themes',
    to: '/settings',
    exact: true,
    onSelect: () => {
      open.value = false
    }
  }, {
    label: 'Pages',
    to: '/settings/members',
    onSelect: () => {
      open.value = false
    }
  
}, {
    label: 'Preferences',
    to: '/settings/members',
    onSelect: () => {
      open.value = false
    }
  
}]

}, {
  label: 'Point of sale',
  icon: 'ri:apps-2-add-fill',
  to: 'https://github.com/nuxt/ui-pro',
  children: [{
    label: 'Staff',
    to: '/settings',
    exact: true,
    onSelect: () => {
      open.value = false
    }
  }, {
    label: 'Locations',
    to: '/settings/members',
    onSelect: () => {
      open.value = false
    }
  
}, {
    label: 'Settings',
    to: '/settings/members',
    onSelect: () => {
      open.value = false
    }
  
}]
}]


] satisfies NavigationMenuItem[][]

const groups = computed(() => [{
  id: 'links',
  label: 'Go to',
  items: links.flat()
}, {
  id: 'code',
  label: 'Code',
  items: [{
    id: 'source',
    label: 'View page source',
    icon: 'i-simple-icons-github',
    to: `https://github.com/nuxt-ui-pro/dashboard/blob/main/app/pages${route.path === '/' ? '/index' : route.path}.vue`,
    target: '_blank'
  }]
}])

onMounted(async () => {
  const cookie = useCookie('cookie-consent')
  if (cookie.value === 'accepted') {
    return
  }

  toast.add({
    title: 'We use first-party cookies to enhance your experience on our website.',
    duration: 0,
    close: false,
    actions: [{
      label: 'Accept',
      color: 'neutral',
      variant: 'outline',
      onClick: () => {
        cookie.value = 'accepted'
      }
    }, {
      label: 'Opt out',
      color: 'neutral',
      variant: 'ghost'
    }]
  })
})
</script>

<template>
  <UDashboardGroup unit="rem">
    <UDashboardSidebar
      id="default"
      v-model:open="open"
      collapsible
      resizable
      class="bg-elevated/25"
      :ui="{ footer: 'lg:border-t lg:border-default' }"
    >
      <template #header="{ collapsed }">
        <TeamsMenu :collapsed="collapsed" />
      </template>

      <template #default="{ collapsed }">
        <UDashboardSearchButton :collapsed="collapsed" class="bg-transparent ring-default" />

        <UNavigationMenu
          :collapsed="collapsed"
          :items="links[0]"
          orientation="vertical"
          :ui="{
            item: {
            base: 'group',
            clickable: true  
            }
          }"
        />

        <UNavigationMenu
          :collapsed="collapsed"
          :items="links[1]"
          orientation="vertical"
          class="mt-auto"
          :ui="{
            item: {
            base: 'group',
            clickable: true  
            }
          }"
        />
      </template>

      <template #footer="{ collapsed }">
        <UserMenu :collapsed="collapsed" />
      </template>
    </UDashboardSidebar>

    <UDashboardSearch :groups="groups" />

    <slot />

    <NotificationsSlideover />
  </UDashboardGroup>
</template>
