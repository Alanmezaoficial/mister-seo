import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { homedir } from 'node:os';
import { existsSync } from 'node:fs';
const root = dirname(fileURLToPath(import.meta.url));
const [script, ...args] = process.argv.slice(2);
if (!script || !/^[a-z][a-z0-9-]*(?:\/[a-z][a-z0-9-]*)?$/.test(script)) {
  console.error('Uso: node mister-seo.mjs <audit|score|compare|report|fix-plan|fix-ticket|adapters/local-files> [argumentos]'); process.exit(1);
}
const entry=join(root,'scripts',script+'.mjs');
if (!existsSync(entry)) {console.error('Script no disponible'); process.exit(1);}
const data=process.env.MISTER_SEO_DATA || join(homedir(),'.mister-seo');
const env={...process.env,CLAUDE_PLUGIN_ROOT:root,CLAUDE_PLUGIN_DATA:data};
delete env.CLAUDE_SEO_AI_HOME;
const result=spawnSync(process.execPath,[entry,...args],{env,stdio:'inherit'});
if (result.error) {console.error(result.error.message); process.exit(2);}
process.exit(result.status ?? 2);
