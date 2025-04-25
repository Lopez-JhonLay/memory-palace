<template>
  <div class="container py-5">
    <h1 class="mb-4">🧠 Your Memory Palaces</h1>

    <!-- Add Palace Button -->
    <button
      class="btn btn-success mb-3"
      data-bs-toggle="modal"
      data-bs-target="#newPalaceModal"
    >
      + Add Palace
    </button>

    <!-- Palace Cards -->
    <div v-if="palaces.length">
      <PalaceCard
        v-for="palace in palaces"
        :key="palace.id"
        :palace="palace"
        @enter="goToPalace"
        @delete="deletePalace"
      />
    </div>
    <div v-else class="text-muted mb-4">No palaces yet. Create one!</div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="newPalaceModal"
      tabindex="-1"
      aria-labelledby="newPalaceLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <form @submit.prevent="addNewPalace">
            <div class="modal-header">
              <h5 class="modal-title" id="newPalaceLabel">Create New Palace</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                v-model="newPalaceName"
                type="text"
                class="form-control"
                placeholder="Enter palace name"
                required
              />
            </div>
            <div class="modal-footer">
              <button
                type="submit"
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                Save
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

import { nanoid } from "nanoid";

import { usePalaceStore } from "@/stores/palace";

import PalaceCard from "@/components/palace/PalaceCard.vue";

const router = useRouter();

const palaces = computed(() => usePalaceStore().palaces);

const newPalaceName = ref("");

const addNewPalace = () => {
  const name = newPalaceName.value.trim();

  if (!name) return;

  usePalaceStore().addPalace({
    id: nanoid(),
    name,
    rooms: [],
  });

  newPalaceName.value = "";
};

const deletePalace = (id: string) => {
  if (confirm("Delete this palace?")) {
    usePalaceStore().deletePalace(id);
  }
};

const goToPalace = (id: string) => {
  router.push(`/palace/${id}`);
};
</script>

<style scoped></style>
