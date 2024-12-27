import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import terser from '@rollup/plugin-terser'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    vue(),
    terser({
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 3,
        dead_code: true,
        keep_fargs: false,
        toplevel: true
      },
      mangle: {
        eval: true,
        toplevel: true,
        safari10: false,
        properties: {
          regex: /^_/
        }
      },
      format: {
        comments: false,
        ascii_only: true,
        wrap_iife: true,
        beautify: false
      },
      ecma: 2020,
      nameCache: null,
      module: true
    })
  ],
  build: {
    outDir: path.resolve(__dirname, './production-build'),
    emptyOutDir: true,
    minify: 'terser',
    sourcemap: false,
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        compact: true,
        generatedCode: {
          preset: 'es2015',
          symbols: false,
          constBindings: true
        },
        minifyInternalExports: true
      }
    }
  },
  esbuild: {
    drop: ['console', 'debugger'],
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    treeShaking: true,
    legalComments: 'none'
  }
})
