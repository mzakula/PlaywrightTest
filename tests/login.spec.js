const{test,expect} = require("@playwright/test")

test("Valid login",async function({page}){
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

await page.getByPlaceholder("Username").fill("Admin")
await page.locator("input[placeholder='Password']").fill("admin123")
await page.locator("//button[normalize-space()='Login']").click()

await expect(page).toHaveURL(/dashboard/)
await page.getByAltText("profile picture").click()
await page.getByText("logout").click()
await expect(page).toHaveURL(/login/)

} )