import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Build optimizations
  build: {
    // Output directory
    outDir: 'dist',

    // Generate source maps for production debugging
    sourcemap: false,

    // Enable minification with esbuild (faster than terser)
    minify: 'esbuild',

    // Chunk size warnings
    chunkSizeWarningLimit: 1000,

    // Rollup options for advanced code splitting
    rollupOptions: {
      output: {
        // Manual chunk splitting strategy
        manualChunks: {
          // Vendor chunk for React and core dependencies
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],

          // UI library chunk
          'vendor-ui': ['@relume_io/relume-ui', '@relume_io/relume-tailwind'],

          // Animation library chunk
          'vendor-animation': ['framer-motion'],

          // Icons chunk
          'vendor-icons': ['react-icons']
        },

        // Asset file naming with hash for cache busting
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          let extType = info[info.length - 1]

          // Group assets by type
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp)$/i.test(assetInfo.name)) {
            extType = 'images'
          } else if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            extType = 'fonts'
          } else if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i.test(assetInfo.name)) {
            extType = 'media'
          }

          return `assets/${extType}/[name]-[hash][extname]`
        },

        // JS chunk file naming
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    },

    // Optimize CSS code splitting
    cssCodeSplit: true,

    // Asset inlining threshold (10kb)
    assetsInlineLimit: 10240,

    // Report compressed size
    reportCompressedSize: true,

    // Target modern browsers for smaller bundles
    target: 'es2020'
  },

  // Resolve configuration
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets')
    }
  },

  // Server configuration for development
  server: {
    port: 3000,
    open: true,
    cors: true,
    // Enable HTTP/2
    strictPort: false
  },

  // Preview server configuration
  preview: {
    port: 4173,
    open: true
  },

  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      '@relume_io/relume-ui',
      'react-icons'
    ],
    exclude: []
  },

  // Enable CSS preprocessing optimizations
  css: {
    devSourcemap: true
  },

  // Esbuild options for production optimization
  esbuild: {
    drop: ['console', 'debugger'], // Remove console and debugger statements
    legalComments: 'none' // Remove comments
  }
})
