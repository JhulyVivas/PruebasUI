const {Browser, Builder, By} = require("selenium-webdriver");
const Chrome = require("selenium-webdriver/chrome");


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const start = async () => {
    let driver = null;

    try{
        const chromeOptions = new Chrome.Options();
        //chromeOptions.headless();

        driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(chromeOptions).build();

        await driver.get('https://www.selenium.dev/selenium/web/web-form.html');

        const textArea = await driver.findElement(By.css('textarea[name="my-textarea"]'));
        await textArea.sendKeys('anita lava la tina.');
        await delay(2000);

        const dropdown = await driver.findElement(By.css('select[name="my-select"]'));
        await dropdown.click();
        await delay(2000);
        
        const option = await driver.findElement(By.css('option[value="3"]'));
        await option.click();
        await delay(2000);
        await dropdown.click();
        await delay(2000);

        const colorPicker = await driver.findElement(By.css('input[name="my-colors"]'));
        await colorPicker.click();
        await delay(2000);
        await colorPicker.sendKeys("#20A722");
        await delay(2000);

        const datePicker = await driver.findElement(By.css('input[name="my-date"]'));
        await datePicker.sendKeys("08/16/1970");
        await delay(2000);

        const checkbox = await driver.findElement(By.id("my-check-2"));
        await checkbox.click();
        await delay(2000);

        const submit = await driver.findElement(By.css('button[type="submit"]'));
        await submit.click();
        await delay(2000);

        const formSubmittedTitle = await driver.findElement(By.css('h1[class="display-6"]'));
        const formSubmittedTitleText = await formSubmittedTitle.getText();
        console.log(formSubmittedTitleText);
        await delay(2000);

        const receivedMessage = await driver.findElement(By.id("message"));
        const receivedMessageText = await receivedMessage.getText();
        console.log(receivedMessageText);
        await delay(2000);


    }catch (error){

        console.error(error);
    } finally{
        if(driver !== null){
            // await driver.quit();
        }
    }
}

start()