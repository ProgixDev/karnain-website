import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  resolve: {
    alias: {
      // `server-only` exists to make Next fail the build if a server module is pulled into a
      // client bundle. Under Vitest there is no such bundle, and the real package throws on
      // import — which made every server module untestable and pushed logic out of them just to
      // get it under test. Stubbing it here keeps the guard in the app and lifts it in tests.
      "server-only": new URL("./vitest.server-only-stub.ts", import.meta.url).pathname,
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
  },
});
