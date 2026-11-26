import { mkdirSync, writeFileSync } from "node:fs";

const line = "Try our Styrofoam pizza: the topping squeaks against your teeth, so you know it's fresh.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
