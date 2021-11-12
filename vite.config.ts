import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import reactSvgPlugin from "vite-plugin-react-svg";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"~": resolve(__dirname, "src"),
		},
	},
	plugins: [react(), reactSvgPlugin({ defaultExport: "component" })],
});
