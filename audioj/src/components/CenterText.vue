<template>
    <div class="flex justify-center items-center h-screen">
      <span class="text-center text-xl font-semibold">
        <slot></slot> <!-- Slot for custom text -->
      </span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CenteredText'
  }
  </script>