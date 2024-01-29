import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { compression } from 'vite-plugin-compression2'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/name-of-your-github-repo',
	build: { target: 'ESNext' },
	plugins: [
		compression({
			algorithm: 'gzip',
			include: /\.(js|mjs|json|css|svg)$/i,
		}),
		react(),
	],
})
