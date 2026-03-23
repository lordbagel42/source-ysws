import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { execSync } from 'node:child_process';

const getCommitSha = () => {
	// 1. Try environment variables (CI/CD)
	if (process.env.CF_PAGES_COMMIT_SHA) return process.env.CF_PAGES_COMMIT_SHA;
	if (process.env.COMMIT_SHA) return process.env.COMMIT_SHA;

	// 2. Try git rev-parse (local development)
	try {
		return execSync('git rev-parse HEAD').toString().trim();
	} catch {
		return 'dev';
	}
};

const commitSha = getCommitSha();

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	define: {
		__COMMIT_SHA__: JSON.stringify(commitSha)
	}
});
