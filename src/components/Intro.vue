<template>
  <div className="my-6 w-10/12 m-auto">
    <h1 className="typography-headline-2 text-center text-green-700">
      Welcome to Storefront UI Vue playground
    </h1>
    <p className="typography-text-lg text-center my-6 font-bold">
      Fast, accessible, and fully customizable components built for e-commerce.
    </p>
    <ImportComponents />
    <CustomizeComponents />
    <CopyPasteBlocks />
    <p className="typography-text-lg text-center my-6 font-semibold">
      New Storefront UI 2.5 Base component SfTextarea is here 🎉
    </p>
    <label>
      <span
        class="
          typography-text-sm
          font-medium
          cursor-not-allowed
          text-disabled-900
        "
        >Description</span
      >
      <SfTextarea
        placeholder="Write something about yourself..."
        class="w-full !bg-disabled-100 !ring-disabled-300 !ring-1"
      />
    </label>
    <div class="flex justify-between mt-0.5">
      <div>
        <p class="typography-text-xs text-disabled-500">
          Do not include personal or financial information.
        </p>
      </div>
    </div>
    <p className="typography-text-lg text-center mt-6 font-semibold">
      Feel free to delete it all and start building your own UI 😉
    </p>
  </div>
</template>

<script lang="ts" setup>
import ImportComponents from './ImportComponents.vue';
import CustomizeComponents from './CustomizeComponents.vue';
import CopyPasteBlocks from './CopyPasteBlocks.vue';
import {
  SfButton,
  SfBadge,
  SfIconShoppingCart,
  SfTextarea,
} from '@storefront-ui/vue';
import { ref } from 'vue';
import { SfRatingButton, useId } from '@storefront-ui/vue';
const labelId = useId();
const modelValue = ref();
</script>
