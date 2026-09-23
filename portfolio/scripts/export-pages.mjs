import { cp, mkdir, rm, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(root, 'dist/client');
const target = resolve(root, process.argv[2] || '../docs');
// Only the adjacent GitHub Pages docs directory is an allowed output.
if (target !== resolve(root, '../docs')) throw new Error('Expected the adjacent ../docs output directory.');
await access(resolve(source, 'index.html'));
await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });
await cp(source, target, { recursive: true });
console.log(`Exported static portfolio to ${target}`);
