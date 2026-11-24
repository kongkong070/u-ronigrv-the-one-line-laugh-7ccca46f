// The One-Line Laugh — one funny line, single sentence, at most 200 characters.
// Writes the line to /output/entry.txt. Never removes the output dir itself
// (only creates it and writes the file), so the grader's bind-mounted /output
// is never deleted.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked my AI assistant to clean my inbox, so it emailed my boss to say I quit.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
