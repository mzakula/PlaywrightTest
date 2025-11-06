const{test,expect} = require("@playwright/test")
test("Verify Error Message",async function({page}){

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

await page.getByPlaceholder("Username").fill("Admin")
await page.locator("input[placeholder='Password']").fill("Aadmin123")
await page.locator("//button[normalize-space()='Login']").click()

const errorMessage= await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent()

console.log("Error message is "+errorMessage)
expect(errorMessage==="Invalid credentials").toBeTruthy()
} )