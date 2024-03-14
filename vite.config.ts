// vite.config.ts
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        minify: true,
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'glightbox-plugin',
            fileName: 'glightbox-plugin'
        },
    },
    plugins: [dts({
        copyDtsFiles: false,
        rollupTypes: true
    })],
});
