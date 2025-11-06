const {expect}=require ("@playwright/test")
class HomePage {

    constructor(page)
    {
        this.page=page
        this.menu="//img[@alt='menu']"
        this.logout="//button[normalize-space()='Sign out']"
        this.manageoption="//span[text()='Manage']"
      

    }
    async logoutFromApp(){

        await this.page.click(this.menu)
        await this.page.click(this.logout)
    }

    async verifyManageOption() //new mwthod for verification Manage option
    {
       await expect(this.page.locator(this.manageoption)).toBeVisible()
    }

}

module.exports=HomePage