<template>
    <div class="text-container">
      <div class="text-box">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div class="text-box">
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TextComponent',
    // You can define props, data, methods, etc. here in the future
  };
  </script>
  
  <style scoped>
  .text-container {
    display: flex;
    justify-content: space-around;
  }
  
  .text-box {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 5px;
  }
  </style>
  