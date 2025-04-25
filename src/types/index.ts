export type Palace = {
  id: string;
  name: string;
  rooms: Room[];
};

export type MemoryObject = {
  id: string;
  name: string;
  type: "text" | "image";
  content: string;
  x: number;
  y: number;
};

export type Room = {
  id: string;
  name: string;
  gridSize: {
    rows: number;
    cols: number;
  };
  objects: MemoryObject[];
};
