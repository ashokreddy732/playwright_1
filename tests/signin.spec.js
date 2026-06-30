import { test, expect} from '@playwright/test';
import { SignIn } from './pages/signin';
 
 
test('SignIn', async ({ page }) => {
 
  const signin = new SignIn(page);
  await signin.goto();
  await signin.verifyallElements();
  await signin.login('Adarsh12@gmail.com', 'Test@123');
  await page.waitForTimeout(5000);
});