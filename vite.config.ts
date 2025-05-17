import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcPath = path.resolve(__dirname, 'src');

// Dynamically create aliases like "@components", "@assets", etc.
const folderAliases = fs.readdirSync(srcPath, {withFileTypes: true})
    .filter(dirent => dirent.isDirectory())
    .reduce((aliases, dirent) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        aliases[`@${dirent.name}`] = path.resolve(srcPath, dirent.name);
        return aliases;
    }, {});

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: folderAliases,
    },
});
