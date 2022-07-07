interface SeedData {
  entries: SeedEntry[];
}
interface SeedEntry {
  description: string;
  createdAt: number;
  status: string;
}
export const seedData: SeedData = {
  entries: [
    {
      description:
        "pending: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida felis libero.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description:
        "in-progress: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida felis libero.",
      status: "in-progress",
      createdAt: Date.now() - 1000000000,
    },
    {
      description:
        "finished: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida felis libero.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};
