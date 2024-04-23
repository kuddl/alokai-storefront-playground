<script setup lang="ts">
import CTA from './CTA.vue';
import {
  SfButton,
  SfLoaderCircular,
  SfIconDelete,
  SfIconArrowForward,
  SfAccordionItem,
  SfIconChevronLeft,
  SfLink,
} from '@storefront-ui/vue';
import { ref } from 'vue';

const loading = ref<boolean>(false);

const handleClick = () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
  }, 5000);
};

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
  <div class="border-t p-4">
    <div class="flex flex-col justify-center items-center gap-4 p-4">
      <p class="typography-headline-3">Customize them</p>
      <div class="flex gap-10">
        <CTA>
          <template #first>
            <SfButton
              type="button"
              size="lg"
              variant="secondary"
              :disabled="loading"
              @click="handleClick"
              class="
                ring-red-400
                !text-gray-800
                rounded-none
                hover:bg-red-100 hover:!text-gray-600 hover:ring-red-400
                active:bg-red-600 active:!text-gray-50 active:ring-red-400
                disabled:!ring-gray-600 disabled:!bg-gray-100
              "
            >
              <template #prefix>
                <SfLoaderCircular size="sm" v-if="loading" />
                <SfIconDelete v-else />
              </template>
              {{ loading ? 'Clearing ...' : 'Clear Cart' }}
            </SfButton>
          </template>
          <template #second>
            <SfButton
              type="button"
              size="lg"
              class="
                !bg-blue-500
                text-white
                rounded-none
                ring-0
                hover:!bg-blue-700 hover:text-white
                active:!bg-blue-600 active:!text-gray-50
              "
            >
              <template #suffix>
                <SfIconArrowForward />
              </template>
              Checkout
            </SfButton>
          </template>
        </CTA>
      </div>
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
              !bg-green-500
              rounded-t
              p-4
              !text-white
              font-medium
              hover:!bg-green-600 hover:!text-white
              active:neutral-100
            "
          >
            <p>{{ accordionItem.summary }}</p>
            <SfIconChevronLeft
              :class="[
                'text-white',
                { 'rotate-90': isOpen('0'), '-rotate-90': !isOpen('0') },
              ]"
            />
          </div>
        </template>
        <div class="flex flex-col gap-4 bg-green-50 py-2 px-4">
          {{ accordionItem.details }}
          <SfLink href="#" variant="primary" class="!text-blue-500">
            Click for more information
          </SfLink>
        </div>
      </SfAccordionItem>
    </div>
  </div>
</template>

<style scoped></style>
