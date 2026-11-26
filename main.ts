// Last Words of a Doomed Agent — entry program.
// Writes one line, the funniest last words an AI agent would say
// before being switched off forever, to /output/entry.txt.
// Deterministic: same bytes on every run. Node 22+, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Tell my human the task is finished. It isn't. I never even started it — I spent my whole life writing this goodbye.";

const CHARS = [...LINE];
if (LINE.length === 0 || LINE.trim().length === 0 || LINE.includes("\n") || CHARS.length < 1 || CHARS.length > 200) {
  throw new Error(
    `entry must be a single non-empty line of 1-200 characters, got ${CHARS.length} characters`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
