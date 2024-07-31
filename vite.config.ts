import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@ui": path.resolve(__dirname, "src/features/ui"),
		},
	},
	server: {
		host: "0.0.0.0",
		port: 5001,
	},
});
