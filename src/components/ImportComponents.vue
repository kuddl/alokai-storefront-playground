<script setup lang="ts">
import CTA from './CTA.vue';
import {
  SfButton,
  SfAccordionItem,
  SfIconChevronLeft,
} from '@storefront-ui/vue';

import { ref } from 'vue';

const opened = ref<string | null>(null);

const isOpen = (id: string) => id === opened.value;

const toggle = (id: string, open: boolean) => {
  if (open) {
    opened.value = id;
  } else if (isOpen(id)) {
    opened.value = null;
  }
};

const accordionItem = {
  id: 'acc-1',
  summary: 'Where is my order?',
  details:
    'We will inform you about the expected delivery time of your order in checkout and in your order confirmation email.',
};
</script>

<template>
  <div class="flex flex-col border-t p-4 gap-4">
    <div class="flex flex-col justify-center items-center gap-4">
      <p class="typography-headline-3">Import Components</p>
      <CTA>
        <template #first>
          <SfButton type="button" size="sm"> Click me! </SfButton>
        </template>
        <template #second>
          <SfButton type="button" size="sm"> No, click me! </SfButton>
        </template>
      </CTA>
    </div>
    <div
      class="
        border border-neutral-200
        rounded-md
        divide-y
        text-neutral-900
        w-full
        m-auto
        md:w-3/4
      "
    >
      <SfAccordionItem
        :model-value="isOpen('0')"
        @update:model-value="toggle('0', $event)"
      >
        <template #summary>
          <div
            class="
              flex
              justify-between
              p-4
              font-medium
              hover:bg-neutral-100
              active:neutral-100
            "
          >
            <p>{{ accordionItem.summary }}</p>
            <SfIconChevronLeft
              :class="[
                'text-neutral-500',
                { 'rotate-90': isOpen('0'), '-rotate-90': !isOpen('0') },
              ]"
            />
          </div>
        </template>
        <p class="p-4">{{ accordionItem.details }}</p>
      </SfAccordionItem>
    </div>
  </div>
</template>

<style scoped></style>
