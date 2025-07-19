<template>
  <div class="p-6 space-y-6">

    <div class="text-xl font-semibold">Create purchase order</div>


    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="space-y-2">
        <label class="font-medium">Supplier</label>
        <select class="w-full border rounded p-2">
          <option>Select supplier</option>
        </select>
        <label class="text-sm">Payment terms (optional)</label>
        <select class="w-full border rounded p-2">
          <option>None</option>
        </select>
      </div>

      <div class="space-y-2">
        <label class="font-medium">Destination</label>
        <select class="w-full border rounded p-2">
          <option>Shop location</option>
        </select>
        <label class="text-sm">Supplier currency</label>
        <select class="w-full border rounded p-2">
          <option>Indian Rupee (INR ₹)</option>
        </select>
      </div>
    </div>


    <div class="border p-4 rounded space-y-4">
      <div class="font-medium">Shipment details</div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input type="date" class="border rounded p-2" placeholder="Estimated arrival" />
        <select class="border rounded p-2">
          <option>Shipping carrier</option>
        </select>
        <input type="text" class="border rounded p-2" placeholder="Tracking number" />
      </div>
    </div>

   
    <div class="border p-4 rounded space-y-2">
      <label class="font-medium">Add products</label>
      <div class="flex gap-2">
        <input type="text" class="flex-1 border rounded p-2" placeholder="Search products" />
        <button class="border rounded px-4 py-2 white">Browse</button>
      </div>
    </div>


    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="border p-4 rounded space-y-4">
        <div class="font-medium">Additional details</div>
        <input type="text" class="w-full border rounded p-2" placeholder="Reference number" />
        <textarea class="w-full border rounded p-2" rows="4" placeholder="Note to supplier"></textarea>
        <input type="text" class="w-full border rounded p-2" placeholder="Tags" />
      </div>

      <div class="border p-4 rounded space-y-2">
        <div class="font-medium flex justify-between">
          <span>Cost summary</span>
          <a href="#" class="text-blue-600 text-sm">Manage</a>
        </div>
        <div class="text-sm text-gray-500">Taxes (Included)</div>
        <div class="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>₹0.00</span>
        </div>
        <div class="text-sm text-gray-500 mt-2">Cost adjustments</div>
        <div class="flex justify-between text-sm">
          <span>Shipping</span>
          <span>₹0.00</span>
        </div>
        <hr />
        <div class="flex justify-between font-medium">
          <span>Total</span>
          <span>₹0.00</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">

</script>

<style scoped>

</style>
