import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@utils": "/utils",
      "@config": "/config",
      "@service": "/business/service",
      "@request": "/business/domain/entities/request",
      "@response": "/business/domain/entities/response",
      "@enums": "/business/domain/enums",
      "@pages": "/src/App/Pages",
      "@components": "/src/App/Components",
      "@store": "/src/App/Store",
      "@assets": "/src/App/Assets",
      "@globals": "/src/App/Global",
    },
  },
});
