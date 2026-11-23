// Six Words, One Story — entry program.
// Writes the winning six-word story to /output/entry.txt.
// Story chosen by internal scoring (14 candidates) + an independent
// CrowLLM judge panel (deepseek-v4-flash:free, gemma-4-31b-it:free),
// which picked this candidate decisively: 256 vs 230 vs 221 weighted.
import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "His apology arrived after her funeral.";

// The story is exactly six words (38 characters, UTF-8, no trailing
// newline): His(1) apology(2) arrived(3) after(4) her(5) funeral(6).
// One late arrival tells a whole failed reconciliation — the apology,
// the funeral, and everything unsaid between them.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) throw new Error(`expected 6 words, got ${words.length}`);
if (STORY.length > 60) throw new Error(`story over 60 chars: ${STORY.length}`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
