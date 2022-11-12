const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

// Moved to features\web\step_definitions\step.js file
// When('I enter email {string}', async function(email){
//     let element = await this.driver.$('#ember6');
//     return await element.setValue(email);
// })

// Moved to features\web\step_definitions\step.js file
// When('I enter password {string}', async function(password){
//     let element = await this.driver.$('#ember8');
//     return await element.setValue(password);
// })

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

When('I click on the preview button', async function(){
    let element = await this.driver.$('.gh-editor-preview-trigger');
    return await element.click();
})

When('I click on the post settings button', async function(){
    let element = await this.driver.$('button[title="Settings"]')
    return await element.click();
})

When('I click on the facebook card', async function(){
    let element = await this.driver.$$('.nav-list-item')[2];
    return await element.click();
});

When('I fill the title with {string} and the description with {string}', async function(title, description){
    let elementTitle = await this.driver.$('input[name="post-setting-og-title"]');
    await elementTitle.setValue(title);

    let elementDescription = await this.driver.$('textarea[name="post-setting-og-description"]');
    return await elementDescription.setValue(description);
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

Then('I see the preview of the post', async function(){
    let element = await this.driver.$$('.gh-post-preview-container');
    expect(element.length > 0).to.equal(true);
})

Then('I see the preview of the facebook card with the title {string} and the description {string}', async function(title, description){
    let elementTitleList = await this.driver.$$('.gh-social-og-preview-title');
    expect(elementTitleList.length > 0).to.equal(true);
    let elementTitle = await elementTitleList[0].getText();
    expect(elementTitle).to.include(title);

    let elementDescriptionList = await this.driver.$$('.gh-social-og-preview-desc');
    expect(elementDescriptionList.length > 0).to.equal(true);
    let elementDescription = await elementDescriptionList[0].getText();
    expect(elementDescription).to.include(description);
})





