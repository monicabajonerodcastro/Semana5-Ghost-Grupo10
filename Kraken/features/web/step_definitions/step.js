const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;


When('I enter email {string}', async function(email){
    let element = await this.driver.$('#ember6');
    return await element.setValue(email);
})

When('I enter password {string}', async function(password){
    let element = await this.driver.$('#ember8');
    return await element.setValue(password);
})

When('I click next', async function(){
    let element = await this.driver.$('#ember10');
    return await element.click();
})

When('I click on new post', async function(){
    let element = await this.driver.$('#ember26');
    return await element.click();
})

When('I set the {string} title', async function(title){
    let element = await this.driver.$('textarea[placeholder="Post title"]');
    return await element.setValue(title);
});

When('I click into the post body', async function(){
    let element = await this.driver.$('p[data-koenig-dnd-droppable=true]');
    return await element.click();
})

When('I set the {string} body', async function(body){
    let element = await this.driver.$('p[data-koenig-dnd-droppable=true]');
    return await element.setValue(body);
})

When('I publish the post', async function(){
    let element = await this.driver.$('.gh-publish-trigger');
    return await element.click();
})

When ('I confirm the publishing post', async function(){
    let element = await this.driver.$('.gh-publish-cta');
    return await element.click();
})

When ('I double confirm the publishing post', async function(){
    let element = await this.driver.$('.gh-publish-cta > button');
    return await element.click();
})

When('I move to the body field', async function(){
    await this.driver.$('p[data-koenig-dnd-droppable=true]').moveTo();
})

When('I click on the add card button', async function(){
    let element = await this.driver.$('.koenig-plus-menu-button');
    return await element.click();
})

When('I select the bookmark option', async function(){
    let element = await this.driver.$('div[title="Bookmark"]')
    return await element.click();
})

When('I write the url {string}', async function(url){
    let element = await this.driver.$('input[name="url"]');
    return await element.setValue(url);
})

/**
 * "Then" steps
 */

Then('I see the post confirmation', async function(){
    let element = await this.driver.$$('.gh-publish-title');
    expect(element.length > 0).to.equal(true);
})

Then('I see the preview of the bookmark', async function(){
    let element = await this.driver.$$('.koenig-card-click-overlay');
    expect(element.length > 0).to.equal(true);
})




