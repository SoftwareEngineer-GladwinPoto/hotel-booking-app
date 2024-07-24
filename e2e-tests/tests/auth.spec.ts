import { test, expect } from '@playwright/test';

const UI_URL = "http://localhost:5173/";


test("should allow the user to sign in", async ({ page }) => {
  await page.goto(UI_URL);
  
  //We want get the sign in button
  await page.getByRole("link", {name : "Sign In"}).click();

  await expect(page.getByRole("heading", { name : "Sign In"})).toBeVisible();

  await page.locator("[name=email]").fill("a@mail.com");
  await page.locator("[name=password]").fill("555555");
  
  await page.getByRole("button",{ name : "Login"}).click();

  await expect(page.getByText("Sign in successful")).toBeVisible();
  await expect(page.getByRole("link",{name : "My Bookings"})).toBeVisible();
  await expect(page.getByRole("link", {name : "My Hotels"})).toBeVisible();

  await expect(page.getByRole("button", {name : "Sign Out"})).toBeVisible();

});
test("should allow the user to register", async ({page}) => {
  await page.goto(UI_URL);

  await page.getByRole("link",{name : "Sign In"}).click();

  await page.getByRole("link", {name : "Create an account here"}).click();

  await expect(page.getByText("Create An Account")).toBeVisible();

  await page.locator("[name=firstName]").fill("test");
  await page.locator("[name=lastName]").fill("test1");
  await page.locator("[name=email]").fill("test1@gmail.com");
  await page.locator("[name=password]").fill("999999");
  await page.locator("[name=confirmPassword]").fill("999999");

  await page.getByRole("button", {name : "Create Account"}).click();
  await expect(page.getByText("Registration is successful")).toBeVisible();

});








