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
import TextComponentOne from '@/components/TextComponentOne.vue';

export default {
  components: {
    TextComponentOne
  }
};
</script>

