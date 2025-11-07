type BoxItem = { id: number; name: string; image: string };

export type Box = {
  id: number;
  name: string;
  items: BoxItem[];
};
