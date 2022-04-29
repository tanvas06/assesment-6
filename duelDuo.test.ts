
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
    // await driver.sleep(3000)
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test(`draw displays bot cards`,async () => {
    let draw = await driver.findElement(By.id('draw'))
    await draw.click()
    const cn = await driver.findElement(By.className('hide'))
    const diplayed = await cn.isDisplayed()
    await driver.sleep(3000)
    expect(diplayed).toBe(true)
})

test('add bot', async () => {
    let add = await driver.findElement(By.id('bot-btn'))
    await add.click()
    const duo = await driver.findElement(By.id('player-duo'))
    const display = await duo.isDisplayed()
    await driver.sleep(2000)
    expect(display).toBe(true)
})