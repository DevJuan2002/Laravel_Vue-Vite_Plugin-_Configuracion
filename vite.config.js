import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';


export default defineConfig({
    
    // En todos los proyectos debe ir la linea de codigo de resolve
    resolve: {
        alias: {
            vue: path.resolve(__dirname, 'node_modules/vue/dist/vue.esm-bundler.js'),
        },
    },

    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js',
                'resources/js/auth/register.js'
            ],
            refresh: true,
        }),
        vue(),
    ],
});
