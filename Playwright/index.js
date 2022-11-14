//Importar Playwright
const playwright = require('playwright');

const url = 'http://localhost:2368/ghost/#/signin';

const fillLogin = async (page, adminUser, password) => {
  await page.fill('input.email.ember-text-field.gh-input.ember-view', adminUser);
  await new Promise(r => setTimeout(r, 1000));
  await page.fill('input.password.ember-text-field.gh-input.ember-view', password);
  await new Promise(r => setTimeout(r, 1000));
};

//Función flecha asíncrona
(async () => {
  //Definir los navegadores en los que se quiere hacer la prueba
  for (const browserType of ['firefox']) {

    const prompt = require('prompt-sync')();
    const adminUser = prompt('Ingrese el correo del usuario administrador: ');
    const password = prompt('Ingrese la contraseña del usuario administrador: ');
    

    //Contenido de la prueba
    console.log(browserType+'-------------------------------------------')

    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')

    //Interactuar con la aplicación web
    //...

    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Crear Tag - Escenario 1 - As an admin user I want to create a tag with just the name')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: './Crear Tag - escenario1/1 - Ingreso de credenciales.png'})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Tag - escenario1/2 - Clic en nuevo tag.png'})
    await page.type('input[id=tag-name]', 'Nuevo tag1');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Tag - escenario1/3 - Ingreso del nombre del tag.png'})
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Tag - escenario1/4 - Se guarda el Tag y el botón se muestra como Saved.png'})
    console.log('Crear Tag - Finaliza escenario 1')    

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')

    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Crear Tag - Escenario 2 - As an admin user I want to create a tag with the name, a specific slug and a description')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: './Crear Tag - escenario2/1 - Ingreso de credenciales.png'})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Tag - escenario2/2 - Clic en nuevo tag.png'})
    await page.type('input[id=tag-name]', 'Nuevo tag2');
    await new Promise(r => setTimeout(r, 1000));
    await page.fill('id=tag-slug', '');
    await new Promise(r => setTimeout(r, 1000));
    await page.type('input[id=tag-slug]', 'slugSample');
    await new Promise(r => setTimeout(r, 1000));
    await page.type('textarea[id=tag-description]', 'This is the description');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Tag - escenario2/3 - Ingreso del nombre, slug y descripción.png'})
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Tag - escenario2/4 - Se guarda el Tag y el botón se muestra como Saved.png'})
    console.log('Crear Tag - Finaliza escenario 2')   
    
    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')

    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Crear Tag - Escenario 3 - As an admin user I want to create a tag with just the name and a facebook card')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: './Crear Tag - escenario3/1 - Ingreso de credenciales.png'})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Tag - escenario3/2 - Clic en nuevo tag.png'})
    await page.type('input[id=tag-name]', 'Nuevo tag3');
    await new Promise(r => setTimeout(r, 1000));
    await page.locator(':nth-match(:text("Expand"), 3)').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Tag - escenario3/3 - Clic en expand Facebook card.png'})
    await page.type('input[id=og-title]', 'Mi titulo de tarjeta');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Tag - escenario3/4 - Se agrega el titulo de la tarjeta.png'})
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Tag - escenario3/5 - Se guarda el tag con una tarjeta de Facebook.png'})
    console.log('Crear Tag - Finaliza escenario 3')    


    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')

    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Crear Tag - Escenario 4 - As an admin user I want to get back to the list of tags without saving the changes of the new tag')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: './Crear Tag - escenario4/1 - Ingreso de credenciales.png'})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Tag - escenario4/2 - Clic en nuevo tag.png'})
    await page.type('input[id=tag-name]', 'Nuevo tag4');
    await new Promise(r => setTimeout(r, 1000));
    await page.goBack();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Tag - escenario4/3 - Confirmación de retornar sin guardar cambios.png'})
    await page.locator(':nth-match(:text("Leave"), 2)').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Tag - escenario4/4 - Se retorna a la lista de Tags sin el nuevo tag guardado.png'})
    console.log('Crear Tag - Finaliza escenario 4')  
    

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')

    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Crear Post - Escenario 1 - Como usario administrador, quiero crear un post')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: './Crear Post - escenario1/1 - Ingreso de credenciales.png'})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('a.ember-view.gh-secondary-action.gh-nav-new-post').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Post - escenario1/2 - Clic en nuevo Post.png'})
    await page.fill('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', 'Titulo post');
    await new Promise(r => setTimeout(r, 1000));
    await page.fill('div.koenig-editor__editor.__mobiledoc-editor.__has-no-content', 'Cuerpo post');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Post - escenario1/3 - Ingreso datos del nuevo Post.png'})
    await page.locator('button', { hasText: 'Publish' }).click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Post - escenario1/4 - Primera confirmación.png'})
    await page.locator('text=Continue, final review →').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Post - escenario1/5 - Segunda confirmación.png'})
    await page.locator('text=Publish post, right now').click();
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path: './Crear Post - escenario1/6 - Confirmación final del Post.png'})
    console.log('Crear Post - Finaliza escenario 1')    

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');

    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Crear Post - Escenario 2 - Como administrador, quiero crear un post con un bookmark')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: './Crear Post - escenario2/1 - Ingreso de credenciales.png'})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('a.ember-view.gh-secondary-action.gh-nav-new-post').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Post - escenario2/2 - Clic en nuevo Post.png'})
    await page.locator('div.koenig-editor__editor.__mobiledoc-editor.__has-no-content').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('button.koenig-plus-menu-button.flex.justify-center.items-center.relative.w7.h7.w9-ns.h9-ns.ba.b--midlightgrey-l2.bg-white.br-100.anim-normal').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Post - escenario2/3 - Se abre el menú de tarjetas.png'})
    await page.locator('div.f8.lh-heading.darkgrey.tracked-1.fw4.ma0.ml4.flex-grow-1.truncate', { hasText: 'Bookmark' }).click();  
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Post - escenario2/4 - Se abre el form del bookmark.png'})
    await page.fill('input.miw-100.pa2.ba.br2.b--lightgrey-d2.f7.form-text.lh-title.tracked-2.h10.nl2.nr2','https://www.uniandes.edu.co');
    await new Promise(r => setTimeout(r, 1000));
    await page.fill('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', 'Titulo post con bookmark');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Post - escenario2/5 - Ingreso datos del nuevo Post.png'})
    await page.locator('span', { hasText: 'Publish' }).click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Post - escenario2/6 - Primera confirmación.png'})
    await page.locator('text=Continue, final review →').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Post - escenario2/7 - Segunda confirmación.png'})
    await page.locator('text=Publish post, right now').click();
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path: './Crear Post - escenario2/8 - Confirmación final del Post.png'})
    console.log('Crear Post - Finaliza escenario 2')  

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')

    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Crear Post - Escenario 3 - Como usario administrador, quiero visualizar la vista previa de mi post')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: './Crear Post - escenario3/1 - Ingreso de credenciales.png'})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('a.ember-view.gh-secondary-action.gh-nav-new-post').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Post - escenario3/2 - Clic en nuevo Post.png'})
    await page.fill('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', 'Titulo post preview');
    await new Promise(r => setTimeout(r, 1000));
    await page.fill('div.koenig-editor__editor.__mobiledoc-editor.__has-no-content', 'Cuerpo post preview"');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Post - escenario3/3 - Ingreso datos del nuevo Post.png'})
    await page.locator('button', { hasText: 'Preview' }).click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Post - escenario3/4 - Se observa el preview del Post.png'})
    console.log('Crear Post - Finaliza escenario 3')    

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');

    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Crear Post - Escenario 4 - Como usario administrador, quiero crear un post con una tarjeta de facebook')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: './Crear Post - escenario4/1 - Ingreso de credenciales.png'})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');

    console.log('--------------------------------------------------------------------------------------------------------------');
    console.log('Create Page - Scenario 1 - As an administrator user, I want to create a page');
    console.log('--------------------------------------------------------------------------------------------------------------');
    await fillLogin(page, adminUser, password);
    await page.screenshot({ path: './Create Page - Scenario 1/1 - Sign in.png' });
    await page.click('.login.gh-btn.gh-btn-login');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('text=Pages').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.locator('text=New page').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Create Page - Scenario 1/2 - Click new page.png' });
    await page.fill('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', 'My first page title');
    await new Promise((r) => setTimeout(r, 1000));
    await page.fill('div.koenig-editor__editor.__mobiledoc-editor.__has-no-content', 'My first page body');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Create Page - Scenario 1/3 - Fill page form.png' });
    await page.locator('text=Publish').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Create Page - Scenario 1/4 - First confirmation.png' });
    await page.locator('text=Continue, final review →').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Create Page - Scenario 1/5 - Second confirmation.png' });
    await page.locator('text=Publish page, right now').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Create Page - Scenario 1/6 - Final confirmation.png' });
    console.log('Create page - Scenario 1 - Completed');

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');

    console.log('--------------------------------------------------------------------------------------------------------------');
    console.log('Create Page - Scenario 2 - As an administrator user I want to create a page with a feature image');
    console.log('--------------------------------------------------------------------------------------------------------------');
    await fillLogin(page, adminUser, password);
    await page.screenshot({ path: './Create Page - Scenario 2/1 - Sign in.png' });
    await page.click('.login.gh-btn.gh-btn-login');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('text=Pages').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.locator('text=New page').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Create Page - Scenario 2/2 - Click new page.png' });
    await page.locator('.gh-editor-feature-image-unsplash').click();
    await new Promise((r) => setTimeout(r, 5000));
    await page.screenshot({ path: './Create Page - Scenario 2/3 - Pick unsplash image.png' });
    await page.locator('text=Insert image').first().click();
    await new Promise((r) => setTimeout(r, 5000));
    await page.fill('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', 'My first page title');
    await new Promise((r) => setTimeout(r, 1000));
    await page.fill('div.koenig-editor__editor.__mobiledoc-editor.__has-no-content', 'My first page body');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Create Page - Scenario 2/4 - Fill page form.png' });
    await page.locator('text=Publish').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Create Page - Scenario 2/5 - First confirmation.png' });
    await page.locator('text=Continue, final review →').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Create Page - Scenario 2/6 - Second confirmation.png' });
    await page.locator('text=Publish page, right now').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Create Page - Scenario 2/7 - Final confirmation.png' });
    console.log('Create page - Scenario 2 - Completed');

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');
    
    console.log('--------------------------------------------------------------------------------------------------------------');
    console.log('Update website - Scenario 1 - As an administrator user I want to update my website title');
    console.log('--------------------------------------------------------------------------------------------------------------');
    await fillLogin(page, adminUser, password);
    await page.screenshot({ path: './Update website - Scenario 1/1 - Sign in.png' });
    await page.click('.login.gh-btn.gh-btn-login');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('a[href="#/settings/"]').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Update website - Scenario 1/2 - Click general settings.png' });
    await page.locator('a[href="#/settings/general/"]').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.locator('text=Expand').first().click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.locator('.ember-text-field.gh-input.ember-view').first().fill('My updated website title');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Update website - Scenario 1/3 - Fill the title form.png' });
    await page.locator('text=Save').click();
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: './Update website - Scenario 1/4 - Update the website successfully.png' });
    console.log('Update website - Scenario 1 - Completed');

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');

    console.log('--------------------------------------------------------------------------------------------------------------');
    console.log('Update website - Scenario 2 - As an administrator user I want to update my website publication language');
    console.log('--------------------------------------------------------------------------------------------------------------');
    await fillLogin(page, adminUser, password);
    await page.screenshot({ path: './Update website - Scenario 2/1 - Sign in.png' });
    await page.click('.login.gh-btn.gh-btn-login');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('a[href="#/settings/"]').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Update website - Scenario 2/2 - Click general settings.png' });
    await page.locator('a[href="#/settings/general/"]').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.locator('text=Expand>>nth=2').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.locator('.ember-text-field.gh-input.ember-view').first().fill('es');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Update website - Scenario 2/3 - Fill the publication language.png' });
    await page.locator('text=Save').click();
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: './Update website - Scenario 2/4 - Update the website successfully.png' });
    console.log('Update website - Scenario 2 - Completed');

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');

    console.log('--------------------------------------------------------------------------------------------------------------');
    console.log('Update website - Scenario 3 - As an administrator user I want to update my website meta data');
    console.log('--------------------------------------------------------------------------------------------------------------');
    await fillLogin(page, adminUser, password);
    await page.screenshot({ path: './Update website - Scenario 3/1 - Sign in.png' });
    await page.click('.login.gh-btn.gh-btn-login');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('a[href="#/settings/"]').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Update website - Scenario 3/2 - Click general settings.png' });
    await page.locator('a[href="#/settings/general/"]').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.locator('text=Expand>>nth=3').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.locator('#metaTitle').fill('content management system');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Update website - Scenario 3/3 - Fill the meta data.png' });
    await page.locator('#metaDescription').fill('custom pages');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Update website - Scenario 3/4 - Fill the meta description.png' });
    await page.locator('text=Save').click();
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: './Update website - Scenario 3/5 - Update the website successfully.png' });
    console.log('Update website - Scenario 3 - Completed');

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');

    console.log('--------------------------------------------------------------------------------------------------------------');
    console.log('Update website - Scenario 4 - As an administrator user I want to update my website twitter card');
    console.log('--------------------------------------------------------------------------------------------------------------');
    await fillLogin(page, adminUser, password);
    await page.screenshot({ path: './Update website - Scenario 4/1 - Sign in.png' });
    await page.click('.login.gh-btn.gh-btn-login');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('a[href="#/settings/"]').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Update website - Scenario 4/2 - Click general settings.png' });
    await page.locator('a[href="#/settings/general/"]').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.locator('text=Expand>>nth=4').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.locator('#twitterTitle').fill('My website title updated');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Update website - Scenario 4/3 - Fill the twitter title.png' });
    await page.locator('#twitterDescription').fill('content');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Update website - Scenario 4/4 - Fill the twitter description.png' });
    await page.locator('text=Save').click();
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: './Update website - Scenario 4/5 - Update the website successfully.png' });
    console.log('Update website - Scenario 4 - Completed');

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');

    console.log('--------------------------------------------------------------------------------------------------------------');
    console.log('Update website - Scenario 5 - As an administrator user I want to update my website social accounts');
    console.log('--------------------------------------------------------------------------------------------------------------');
    await fillLogin(page, adminUser, password);
    await page.screenshot({ path: './Update website - Scenario 5/1 - Sign in.png' });
    await page.click('.login.gh-btn.gh-btn-login');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('a[href="#/settings/"]').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Update website - Scenario 5/2 - Click general settings.png' });
    await page.locator('a[href="#/settings/general/"]').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.locator('text=Expand>>nth=6').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.locator('.gh-input').first().fill('https://www.facebook.com/ghost');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Update website - Scenario 5/3 - Fill the facebook page url.png' });
    await page.locator('.gh-input>>nth=1').fill('https://www.twitter.com/ghost');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Update website - Scenario 5/4 - Fill the twitter profile url.png' });
    await page.locator('text=Save').click();
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: './Update website - Scenario 5/5 - Update the website successfully.png' });
    console.log('Update website - Scenario 5 - Completed');

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');

    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create member - Scenario 1 - As an administrator user I want to create a member')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({ path: './Create Member - Scenario 1/1 - Sign in.png' });
    await page.click('.login.gh-btn.gh-btn-login');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('a[href="#/members/"]').first().click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Create Member - Scenario 1/2 - Click Members.png'});
    await page.locator('a[href="#/members/new/"]').first().click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Create Member - Scenario 1/3 - Click new member.png'});
    await page.type('input[id=member-name]', 'New member');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Create Member - Scenario 1/4 - Fill the member name.png'});
    await page.type('input[id=member-email]', adminUser);
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Create Member - Scenario 1/5 - Fill the member email.png'});
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Create Member - Scenario 1/6 - Update the website successfully.png'})
    console.log('Create member - Scenario 1 - Completed')

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');

    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create member - Scenario 2 - As an administrator user I want to avoid creating a member with an invalid email')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({ path: './Create Member - Scenario 2/1 - Sign in.png' });
    await page.click('.login.gh-btn.gh-btn-login');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('a[href="#/members/"]').first().click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Create Member - Scenario 2/2 - Click Members.png'});
    await page.locator('a[href="#/members/new/"]').first().click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Create Member - Scenario 2/3 - Click new member.png'});
    await page.type('input[id=member-name]', 'New member');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Create Member - Scenario 2/4 - Fill the member name.png'});
    await page.type('input[id=member-email]', 'invalid-email');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Create Member - Scenario 2/5 - Fill the member email.png'});
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=Invalid Email.')
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Create Member - Scenario 2/6 - Update the website successfully.png'})
    console.log('Create member - Scenario 2 - Completed')

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');

    console.log('--------------------------------------------------------------------------------------------------------------');
    console.log('Update profile - Scenario 1 - As an administrator user I want to update my profile');
    console.log('--------------------------------------------------------------------------------------------------------------');
    await fillLogin(page, adminUser, password);
    await page.screenshot({ path: './Update profile - Scenario 1/1 - Sign in.png' });
    await page.click('.login.gh-btn.gh-btn-login');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('.ember-view.ember-basic-dropdown-trigger').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Update profile - Scenario 1/2 - Click your profile.png' });
    await page.locator('text=Your profile').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.type('input[id=user-location]', 'My updated location');
    await new Promise((r) => setTimeout(r, 1000));
    await page.type('input[id=user-website]', 'http://myupdatedwebsite.com');
    await new Promise((r) => setTimeout(r, 1000));
    await page.type('input[id=user-facebook]', 'https://www.facebook.com/myusername');
    await new Promise((r) => setTimeout(r, 1000));
    await page.type('input[id=user-twitter]', 'https://www.twitter.com/myusername');
    await new Promise((r) => setTimeout(r, 1000));
    await page.type('textarea[id=user-bio]', 'My updated bio');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Update profile - Scenario 1/3 - Fill the profile form.png' });
    await page.locator('text=Save').click();
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: './Update profile - Scenario 1/4 - Update the profile successfully.png' });
    console.log('Update profile - Scenario 1 - Completed');

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');

    console.log('--------------------------------------------------------------------------------------------------------------');
    console.log('Update profile - Scenario 2 - As an administrator user I want to ensure my password can not be changed if it is not correct');
    console.log('--------------------------------------------------------------------------------------------------------------');
    await fillLogin(page, adminUser, password);
    await page.screenshot({ path: './Update profile - Scenario 2/1 - Sign in.png' });
    await page.click('.login.gh-btn.gh-btn-login');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('.ember-view.ember-basic-dropdown-trigger').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Update profile - Scenario 2/2 - Click your profile.png' });
    await page.locator('text=Your profile').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.type('input[id=user-password-old]', 'FakePassword');
    await new Promise((r) => setTimeout(r, 1000));
    await page.type('input[id=user-password-new]', 'MISW202216');
    await new Promise((r) => setTimeout(r, 1000));
    await page.type('input[id=user-new-password-verification]', 'MISW202216');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Update profile - Scenario 2/3 - Fill the password form.png' });
    await page.locator('text=Change Password').click();
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: './Update profile - Scenario 2/4 - Change the profile unsuccessfully.png' });
    console.log('Update profile - Scenario 2 - Completed');

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');

    console.log('--------------------------------------------------------------------------------------------------------------');
    console.log('Update profile - Scenario 3 - As an administrator user I want to change my password');
    console.log('--------------------------------------------------------------------------------------------------------------');
    await fillLogin(page, adminUser, password);
    await page.screenshot({ path: './Update profile - Scenario 3/1 - Sign in.png' });
    await page.click('.login.gh-btn.gh-btn-login');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('.ember-view.ember-basic-dropdown-trigger').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Update profile - Scenario 3/2 - Click your profile.png' });
    await page.locator('text=Your profile').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.type('input[id=user-password-old]', password);
    await new Promise((r) => setTimeout(r, 1000));
    await page.type('input[id=user-password-new]', 'MISW202215');
    await new Promise((r) => setTimeout(r, 1000));
    await page.type('input[id=user-new-password-verification]', 'MISW202215');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: './Update profile - Scenario 3/3 - Fill the password form.png' });
    await page.locator('text=Change Password').click();
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: './Update profile - Scenario 3/4 - Change the profile succesfully.png' });
    console.log('Update profile - Scenario 3 - Completed');

    console.log('Todas las pruebas finalizaron correctamente')   
    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función
