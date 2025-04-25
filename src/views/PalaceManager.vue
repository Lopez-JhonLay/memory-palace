<template>
  <div class="container py-5">
    <h1 class="mb-4">🧠 Your Memory Palaces</h1>

    <!-- Palace Cards -->
    <!-- <div v-if="palaces.length">
      <div v-for="palace in palaces" :key="palace.id" class="card mb-3">
        <div
          class="card-body d-flex justify-content-between align-items-center"
        >
          <h5 class="mb-0">{{ palace.name }}</h5>
          <div>
            <button
              class="btn btn-primary btn-sm me-2"
              @click="goToPalace(palace.id)"
            >
              Enter
            </button>
            <button
              class="btn btn-danger btn-sm"
              @click="deletePalace(palace.id)"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-muted mb-4">No palaces yet. Create one!</div> -->

    <!-- Add Palace Button -->
    <button
      class="btn btn-success mt-3"
      data-bs-toggle="modal"
      data-bs-target="#newPalaceModal"
    >
      + Add Palace
    </button>

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
import { ref } from "vue";
import { useRouter } from "vue-router";

import { nanoid } from "nanoid";

import { usePalaceStore } from "@/stores/palace";

const router = useRouter();

const palaceStore = usePalaceStore();

const palaces = palaceStore.palaces;

const newPalaceName = ref("");

const addNewPalace = () => {
  const name = newPalaceName.value.trim();

  if (!name) return;

  palaceStore.addPalace({
    id: nanoid(),
    name,
    rooms: [],
  });

  newPalaceName.value = "";
};
</script>

<style scoped></style>
