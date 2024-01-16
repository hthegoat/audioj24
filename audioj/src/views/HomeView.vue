<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div>
    <main>
      <TheWelcome/> 
    </main>
  </div>
</template>

<script>
import TextComponent from '/components/TextComponent.vue';

export default {
  components: {
    TextComponent
  }
};
</script>
