import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm', 'cjs'], // Xuất ra cả ESM và CJS
  dts: true, // Xuất file .d.ts cho TypeScript
  sourcemap: true, // Xuất sourcemap
  clean: true, // Xóa thư mục dist trước khi build
})
