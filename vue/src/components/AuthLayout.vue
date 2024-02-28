<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

<router-view></router-view>

</div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
