import { test, expect } from '@playwright/test';

test('unauthenticated user redirected to login', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveURL('/login');
});

test('login page elements are visible', async ({ page }) => {
	await page.goto('/login');
	await expect(page.getByText('LOGIN_TO_SOURCE')).toBeVisible();
	await expect(page.getByLabel('EMAIL_ADDRESS')).toBeVisible();
	await expect(page.getByLabel('ACCESS_KEY')).toBeVisible();
	await expect(page.getByRole('button', { name: 'SIGN_IN_WITH_HACK_CLUB' })).toBeVisible();
});
