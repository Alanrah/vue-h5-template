import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import vue2 from '@vitejs/plugin-vue2';
import vue2Jsx from '@vitejs/plugin-vue2-jsx';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';
import { viteVConsole } from 'vite-plugin-vconsole';

const isProd = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue2(),
        vue2Jsx(),
        legacy({
            targets: ['ie >= 11'],
            additionalLegacyPolyfills: ['regenerator-runtime/runtime']
        }),
        Components({
            resolvers: [VantResolver()]
        }),
        viteVConsole({
            entry: resolve(__dirname, './src/main.ts'), // entry file
            localEnabled: !isProd, // dev environment
            enabled: !isProd, // build production
            config: {
                // vconsole options
                maxLogNumber: 1000,
                theme: 'light'
            }
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://dev.com.cn',
                changeOrigin: true
            }
        }
    }
});
