export type Palace = {
  id: string;
  name: string;
  rooms: Room[];
};

export type MemoryObject = {
  id: string;
  position: number;
  type: "text" | "image";
  content: string;
};

export type Room = {
  id: string;
  name: string;
  gridSize: number;
  objects: MemoryObject[];
};
