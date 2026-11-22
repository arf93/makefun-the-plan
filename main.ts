import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Read the text from the source file next to this program, so the entry
// is the file itself — no text is embedded in code or passed by shell.
const here = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(here, "entry.txt"), "utf8");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
