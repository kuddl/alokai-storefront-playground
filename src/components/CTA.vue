<script setup lang="ts">
import { SfButton } from '@storefront-ui/vue';
</script>

<template>
  <div class="flex gap-4">
    <slot name="first" />
    <slot name="second" />
  </div>
</template>

<style scoped></style>
