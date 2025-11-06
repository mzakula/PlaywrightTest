const{test,expect} = require("@playwright/test")

test ("The first test",async function ({page}) {

    expect(12).toBe(12)
})

test ("The second test",async function ({page}) {
    expect(100).toBe(100)
    
})
test  ("The third test",async function ({page}) {
    expect(2.0).toBe(2.0)
    
})