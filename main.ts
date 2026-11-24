// One Letter: Coffee or Tea — make.fun entry (Node 22, standard library only).
// The program writes exactly one letter, A for coffee or B for tea, to
// /output/entry.txt (or MAKEFUN_OUTPUT_DIR outside the grader's container).
// The gate requires UTF-8 text of exactly 1 character, so the program
// validates the letter before writing it and fails loudly instead of
// shipping a bad entry.
//
// The letter is A: coffee. Against tea, coffee is the more vivid answer —
// dark, bitter, steaming, the jolt that keeps a builder going — and the
// funnier one, the honest drink of the all-nighter. Tea is calm and
// correct; coffee is alive, and A stands on its own as the whole answer.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY = 'A';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

if (!/^[AB]$/.test(ENTRY)) {
  console.error(`entry ${JSON.stringify(ENTRY)} must be exactly one letter, A or B`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ENTRY, 'utf8');
console.log(`wrote ${ENTRY.length}-character entry to ${join(outDir, 'entry.txt')}`);
console.log(`entry: ${ENTRY} (A for coffee)`);
