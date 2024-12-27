// vite.config.js
import { defineConfig } from "file:///D:/Language%20Programming/Personal%20Document/DayZ%20Web/frontend/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Language%20Programming/Personal%20Document/DayZ%20Web/frontend/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import terser from "file:///D:/Language%20Programming/Personal%20Document/DayZ%20Web/frontend/node_modules/@rollup/plugin-terser/dist/es/index.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    terser({
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info", "console.debug", "console.warn"],
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
    minify: "terser",
    sourcemap: false,
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks: void 0,
        compact: true,
        generatedCode: {
          preset: "es2015",
          symbols: false,
          constBindings: true
        },
        minifyInternalExports: true
      }
    }
  },
  esbuild: {
    drop: ["console", "debugger"],
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    treeShaking: true,
    legalComments: "none"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxMYW5ndWFnZSBQcm9ncmFtbWluZ1xcXFxQZXJzb25hbCBEb2N1bWVudFxcXFxEYXlaIFdlYlxcXFxmcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcTGFuZ3VhZ2UgUHJvZ3JhbW1pbmdcXFxcUGVyc29uYWwgRG9jdW1lbnRcXFxcRGF5WiBXZWJcXFxcZnJvbnRlbmRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0xhbmd1YWdlJTIwUHJvZ3JhbW1pbmcvUGVyc29uYWwlMjBEb2N1bWVudC9EYXlaJTIwV2ViL2Zyb250ZW5kL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHRlcnNlciBmcm9tICdAcm9sbHVwL3BsdWdpbi10ZXJzZXInXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICB0ZXJzZXIoe1xuICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgZHJvcF9jb25zb2xlOiB0cnVlLFxuICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxuICAgICAgICBwdXJlX2Z1bmNzOiBbJ2NvbnNvbGUubG9nJywgJ2NvbnNvbGUuaW5mbycsICdjb25zb2xlLmRlYnVnJywgJ2NvbnNvbGUud2FybiddLFxuICAgICAgICBwYXNzZXM6IDMsXG4gICAgICAgIGRlYWRfY29kZTogdHJ1ZSxcbiAgICAgICAga2VlcF9mYXJnczogZmFsc2UsXG4gICAgICAgIHRvcGxldmVsOiB0cnVlXG4gICAgICB9LFxuICAgICAgbWFuZ2xlOiB7XG4gICAgICAgIGV2YWw6IHRydWUsXG4gICAgICAgIHRvcGxldmVsOiB0cnVlLFxuICAgICAgICBzYWZhcmkxMDogZmFsc2UsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICByZWdleDogL15fL1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZm9ybWF0OiB7XG4gICAgICAgIGNvbW1lbnRzOiBmYWxzZSxcbiAgICAgICAgYXNjaWlfb25seTogdHJ1ZSxcbiAgICAgICAgd3JhcF9paWZlOiB0cnVlLFxuICAgICAgICBiZWF1dGlmeTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBlY21hOiAyMDIwLFxuICAgICAgbmFtZUNhY2hlOiBudWxsLFxuICAgICAgbW9kdWxlOiB0cnVlXG4gICAgfSlcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBtaW5pZnk6ICd0ZXJzZXInLFxuICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgdGFyZ2V0OiAnZXNuZXh0JyxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB1bmRlZmluZWQsXG4gICAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgICAgIGdlbmVyYXRlZENvZGU6IHtcbiAgICAgICAgICBwcmVzZXQ6ICdlczIwMTUnLFxuICAgICAgICAgIHN5bWJvbHM6IGZhbHNlLFxuICAgICAgICAgIGNvbnN0QmluZGluZ3M6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgbWluaWZ5SW50ZXJuYWxFeHBvcnRzOiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBlc2J1aWxkOiB7XG4gICAgZHJvcDogWydjb25zb2xlJywgJ2RlYnVnZ2VyJ10sXG4gICAgbWluaWZ5SWRlbnRpZmllcnM6IHRydWUsXG4gICAgbWluaWZ5U3ludGF4OiB0cnVlLFxuICAgIG1pbmlmeVdoaXRlc3BhY2U6IHRydWUsXG4gICAgdHJlZVNoYWtpbmc6IHRydWUsXG4gICAgbGVnYWxDb21tZW50czogJ25vbmUnXG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1YLFNBQVMsb0JBQW9CO0FBQ2haLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFFbkIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLE1BQ0wsVUFBVTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsZUFBZTtBQUFBLFFBQ2YsWUFBWSxDQUFDLGVBQWUsZ0JBQWdCLGlCQUFpQixjQUFjO0FBQUEsUUFDM0UsUUFBUTtBQUFBLFFBQ1IsV0FBVztBQUFBLFFBQ1gsWUFBWTtBQUFBLFFBQ1osVUFBVTtBQUFBLE1BQ1o7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxRQUNWLFVBQVU7QUFBQSxRQUNWLFlBQVk7QUFBQSxVQUNWLE9BQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sVUFBVTtBQUFBLFFBQ1YsWUFBWTtBQUFBLFFBQ1osV0FBVztBQUFBLFFBQ1gsVUFBVTtBQUFBLE1BQ1o7QUFBQSxNQUNBLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLFFBQVE7QUFBQSxJQUNWLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsSUFDWCxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixjQUFjO0FBQUEsUUFDZCxTQUFTO0FBQUEsUUFDVCxlQUFlO0FBQUEsVUFDYixRQUFRO0FBQUEsVUFDUixTQUFTO0FBQUEsVUFDVCxlQUFlO0FBQUEsUUFDakI7QUFBQSxRQUNBLHVCQUF1QjtBQUFBLE1BQ3pCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU0sQ0FBQyxXQUFXLFVBQVU7QUFBQSxJQUM1QixtQkFBbUI7QUFBQSxJQUNuQixjQUFjO0FBQUEsSUFDZCxrQkFBa0I7QUFBQSxJQUNsQixhQUFhO0FBQUEsSUFDYixlQUFlO0FBQUEsRUFDakI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
