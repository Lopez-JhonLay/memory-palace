<template>
  <div class="container py-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>🏰 {{ palace?.name || "Palace not found" }}</h2>
      <button class="btn btn-secondary" @click="router.push('/palace-manager')">
        ← Back
      </button>
    </div>

    <div v-if="palace">
      <div class="card p-3 mb-4">
        <h5>Add New Room</h5>
        <div class="mb-2">
          <input
            v-model="newRoomName"
            type="text"
            class="form-control"
            placeholder="Room name"
          />
        </div>
        <div class="row g-2 mb-3">
          <div class="col">
            <input
              v-model.number="gridRows"
              type="number"
              class="form-control"
              min="1"
              placeholder="Rows"
            />
          </div>
          <div class="col">
            <input
              v-model.number="gridCols"
              type="number"
              class="form-control"
              min="1"
              placeholder="Columns"
            />
          </div>
        </div>
        <button class="btn btn-success w-100" @click="addRoom">Add Room</button>
      </div>
      <div v-if="palace.rooms.length">
        <RoomCard
          v-for="room in palace.rooms"
          :key="room.id"
          :room="room"
          @delete="deleteRoom"
        />
      </div>
      <div v-else class="text-muted mb-3">No rooms yet. Add one below!</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

import { useRoute, useRouter } from "vue-router";

import { usePalaceStore } from "@/stores/palace";

import { nanoid } from "nanoid";

import type { Room } from "@/types";

import RoomCard from "@/components/room/RoomCard.vue";

const route = useRoute();
const router = useRouter();

const palaceId = route.params.id as string;
const palace = computed(() =>
  usePalaceStore().palaces.find((p) => p.id === palaceId)
);

const newRoomName = ref("");
const gridRows = ref(3);
const gridCols = ref(3);

const addRoom = () => {
  if (!newRoomName.value.trim() || !palace.value) return;

  const newRoom: Room = {
    id: nanoid(),
    name: newRoomName.value.trim(),
    gridSize: {
      rows: gridRows.value,
      cols: gridCols.value,
    },
    objects: [],
  };

  usePalaceStore().addRoomToPalace(palaceId, newRoom);
  newRoomName.value = "";
  gridRows.value = 3;
  gridCols.value = 3;
};

const deleteRoom = (roomId: string) => {
  if (confirm("Delete this room?")) {
    usePalaceStore().deleteRoomFromPalace(palaceId, roomId);
  }
};
</script>

<style scoped></style>
