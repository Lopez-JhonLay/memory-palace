<template>
  <div class="card mb-3">
    <div class="card-body d-flex justify-content-between align-items-center">
      <div>
        <h5 class="mb-1">{{ room.name }}</h5>
        <small class="text-muted"
          >Grid: {{ room.gridSize.rows }} × {{ room.gridSize.cols }}</small
        >
      </div>
      <button class="btn btn-danger btn-sm" @click="$emit('delete', room.id)">
        Delete
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Room } from "@/types";

defineProps<{
  room: Room;
}>();

defineEmits<{
  (e: "delete", id: string): void;
}>();
</script>

<style scoped></style>
