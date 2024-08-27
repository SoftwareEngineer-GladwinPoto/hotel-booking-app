import {test, expect} from "@playwright/test";
import path from "path";

//The FRONTEND URL
const UI_URL = "http://localhost:5173/";

//Setup some functionality that allow a test to Sign-In as user
test.beforeEach(async({page}) => {
    //Navigate to the FRONTEND URL
    await page.goto(UI_URL);

    //Get the SIGN-IN Button
    await page.getByRole("link", {name : "Sign In"}).click();

    await expect(page.getByRole("heading", { name : "Sign In"})).toBeVisible();
  
    await page.locator("[name=email]").fill("a@mail.com");
    await page.locator("[name=password]").fill("555555");
    
    await page.getByRole("button",{ name : "Login"}).click();
  
    await expect(page.getByText("Sign in successful")).toBeVisible();
});

test("Should allow user to add a hotel", async({page}) => {
     await page.goto(`${UI_URL}add-hotel`);

     await page.locator('[name="name"]').fill("Zebediala Hotel");
     await page.locator('[name="city"]').fill("Polokwane");
     await page.locator('[name="country"]').fill("South Africa");
     await page.locator('[name="description"]').fill("iohkkkl'.nhiop[l;./,',l'pkl[];.,");
     await page.locator('[name="pricePerNight"]').fill("4");
     await page.selectOption('select[name="starRating"]', "2");
     await page.getByText("Budget").click();

     await page.getByLabel("Free Wifi").check();
     await page.getByLabel("Parking").check();
     await page.getByLabel("Family Room").check();
     await page.getByLabel("Non Smoking Room").check();

     await page.locator('[name="adultCount"]').fill("8");
     await page.locator('[name="childCount"]').fill("4");

    //Upload Image Files
     await page.setInputFiles('[name="imageFiles"]', [
        path.join(__dirname, "files", "rivnbjkv4mpydnhpp13j.jpg"),
     ]);

     //Click the Save Button
     await page.getByRole('button', {name: "Save"}).click();
     
     await expect(page.getByText("Hotel Saved")).toBeVisible({timeout:15000});
});

