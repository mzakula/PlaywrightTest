const{test,expect} = require("@playwright/test")

test ("Verify app tutle",async function ({page}) {

    await page.goto("https://www.kupujemprodajem.com")
    const url = await page.url()
    console.log("URL is "+url)

    const title=await page.title()
    console.log("Title is "+title)
    await expect(page).toHaveTitle("KupujemProdajem")
})