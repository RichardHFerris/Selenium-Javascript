const { Builder, By, Key } = require("selenium-webdriver");
//const assert = require("assert");
var should = require("chai").should();

//describe block

describe("add todo tests", function () {

    //it block

    it("successfully add a todo to the application", async function () {
        // launch the browser
        let driver = await new Builder().forBrowser("chrome").build();
        //navigate to application
        await driver.get("https://lambdatest.github.io/sample-todo-app/");
        // add a to-do
        await driver
            .findElement(By.id("sampletodotext"))
            .sendKeys("Learn Selenium", Key.RETURN);
        //assert
        let todoText = await driver
            .findElement(By.xpath("//li[last()]"))
            .getText()
            .then(function (value) {
                return value
            });

        //assert using assertion
        //assert.strictEqual(todoText, "Learn Selenium");

        //assert using Chai should
        todoText.should.equal("Learn Selenium");
        //close the browser
        await driver.quit()
    });
});







