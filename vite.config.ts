import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { execSync } from 'node:child_process';

let commitSha = 'dev';
try {
	commitSha = execSync('git rev-parse HEAD').toString().trim();
} catch {
	// Fallback to dev if git fails
}

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	define: {
		__COMMIT_SHA__: JSON.stringify(commitSha)
	}
});
