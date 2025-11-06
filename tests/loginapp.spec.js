const{test,expect} = require("@playwright/test")
const LoginPage=require("../pages/loginpage")
const HomePage=require("../pages/homepage")

test ("Login to app using POM",async function ({page}) {

    await page.goto('https://freelance-learn-automation.vercel.app/login')
    const loginPage=new LoginPage(page) //store object in variable
    await  loginPage.loginToApplication() //Method in loginpage.js

    const HomePg=new HomePage(page)
   await HomePg.verifyManageOption()
   await  HomePg.logoutFromApp()

   await loginPage.verifySigninAfterLogout()



})