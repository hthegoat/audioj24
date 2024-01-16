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

  <CenteredText>
    Welcome To Baesmint
  </CenteredText>
</template>

<script>
import CenteredText from './CenteredText.vue';

export default {
  components: {
    CenteredText
  }
}
</script>
