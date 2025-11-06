const{test,expect} = require("@playwright/test")
const testdata= JSON.parse(JSON.stringify(require ("../testdata.json")))
test.describe("Data driven login test",async function()
{
for(const data of testdata)
{
     test.describe(`Login with users ${data.id}`, function() 
    
{
test("Valid login",async function({page}){
await page.goto("https://freelance-learn-automation.vercel.app/login")

await page.locator("//input[@id='email1']").fill(data.username)
await page.locator("//input[@id='password1']").fill(data.password)
await page.locator("//button[text()='Sign in']").click()

await expect(page.locator("//button[normalize-space()='Cart']")).toBeVisible();

    })
})
}

} )