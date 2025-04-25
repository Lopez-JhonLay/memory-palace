import { defineStore } from "pinia";
import { useLocalStorage } from "@/composables/useLocalStorage";
import type { Palace, Room } from "@/types";

export const usePalaceStore = defineStore("palace", () => {
  //state
  const palaces = useLocalStorage<Palace[]>("memory-palaces", []);

  //actions ========== PALACE ==========
  const addPalace = (palace: Palace) => {
    console.log("Receive Palace:", palace);
    palaces.value.push(palace);
    console.log("From Palace Store:", palaces);
  };

  const updatePalace = (updatedPalace: Palace) => {
    const index = palaces.value.findIndex((p) => p.id === updatedPalace.id);
    if (index !== -1) {
      palaces.value[index] = updatedPalace;
    }
  };

  const deletePalace = (palaceId: string) => {
    palaces.value = palaces.value.filter((p) => p.id !== palaceId);
  };

  //actions ========== ROOMS ==========
  const addRoomToPalace = (palaceId: string, room: Room) => {
    const palace = palaces.value.find((p) => p.id === palaceId);
    if (palace) {
      palace.rooms.push(room);
    }
  };

  const updateRoomInPalace = (palaceId: string, updatedRoom: Room) => {
    const palace = palaces.value.find((p) => p.id === palaceId);
    if (palace) {
      const index = palace.rooms.findIndex((r) => r.id === updatedRoom.id);
      if (index !== -1) {
        palace.rooms[index] = updatedRoom;
      }
    }
  };

  const deleteRoomFromPalace = (palaceId: string, roomId: string) => {
    const palace = palaces.value.find((p) => p.id === palaceId);
    if (palace) {
      palace.rooms = palace.rooms.filter((r) => r.id !== roomId);
    }
  };

  return {
    palaces,
    addPalace,
    updatePalace,
    deletePalace,
    addRoomToPalace,
    updateRoomInPalace,
    deleteRoomFromPalace,
  };
});
