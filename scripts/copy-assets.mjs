import { cpSync, copyFileSync, mkdirSync } from 'node:fs';
mkdirSync('dist', { recursive: true });
copyFileSync('manifest.json', 'dist/manifest.json');
copyFileSync('LICENSE-LUCIDE.txt', 'dist/LICENSE-LUCIDE.txt');
cpSync('_locales', 'dist/_locales', {recursive:true});
cpSync('public', 'dist', { recursive: true });
console.log('Built extension in dist/');
