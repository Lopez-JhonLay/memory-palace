<template>
  <div class="card mb-3">
    <div class="card-body d-flex justify-content-between align-items-center">
      <h5 class="mb-0">{{ palace.name }}</h5>
      <div>
        <button
          class="btn btn-primary btn-sm me-2"
          @click="$emit('enter', palace.id)"
        >
          Enter
        </button>
        <button
          class="btn btn-danger btn-sm"
          @click="$emit('delete', palace.id)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Palace } from "@/types";

defineProps<{
  palace: Palace;
}>();

defineEmits<{
  (e: "delete", id: string): void;
  (e: "enter", id: string): void;
}>();
</script>

<style scoped></style>
