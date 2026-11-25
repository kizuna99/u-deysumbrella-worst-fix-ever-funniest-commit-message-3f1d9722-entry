// Worst Fix Ever — make.fun entry for "Worst Fix Ever: Funniest Commit Message".
// Writes exactly one line (the commit message plus a trailing newline) to the output file.
// The joke: the support queue is empty because the users are gone — the
// metric every dashboard celebrates, achieved by removing everyone it served.
// Kept as one plain subject line, the way a tired engineer would type it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Two halves of one deadpan line: the "fix" and its proud, terrible result.
const FIX = "fix: ended the password-reset emails by deleting all accounts";
const RESULT = "zero tickets since";
const MESSAGE = `${FIX}; ${RESULT}`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MESSAGE + "\n", "utf8");
