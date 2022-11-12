//Importar Playwright
const playwright = require('playwright');

const url = 'http://localhost:2368/ghost/#/signin';

//Función flecha asíncrona
(async () => {
  //Definir los navegadores en los que se quiere hacer la prueba
  for (const browserType of ['firefox']) {

    const prompt = require('prompt-sync')();
    //const adminUser = prompt('Ingrese el correo del usuario administrador');
    //const password = prompt('Ingrese la contraseña del usuario administrador');
    
    adminUser='n.gomezb2@uniandes.edu.co'
    password='Pass123456'

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
    await page.fill('input.email.ember-text-field.gh-input.ember-view', adminUser);
    await new Promise(r => setTimeout(r, 1000));
    await page.fill('input.password.ember-text-field.gh-input.ember-view', password);
    await new Promise(r => setTimeout(r, 1000));
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
    await page.fill('input.email.ember-text-field.gh-input.ember-view', adminUser);
    await new Promise(r => setTimeout(r, 1000));
    await page.fill('input.password.ember-text-field.gh-input.ember-view', password);
    await new Promise(r => setTimeout(r, 1000));
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
    await page.fill('input.email.ember-text-field.gh-input.ember-view', adminUser);
    await new Promise(r => setTimeout(r, 1000));
    await page.fill('input.password.ember-text-field.gh-input.ember-view', password);
    await new Promise(r => setTimeout(r, 1000));
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
    await page.fill('input.email.ember-text-field.gh-input.ember-view', adminUser);
    await new Promise(r => setTimeout(r, 1000));
    await page.fill('input.password.ember-text-field.gh-input.ember-view', password);
    await new Promise(r => setTimeout(r, 1000));
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
    await page.fill('input.email.ember-text-field.gh-input.ember-view', adminUser);
    await new Promise(r => setTimeout(r, 1000));
    await page.fill('input.password.ember-text-field.gh-input.ember-view', password);
    await new Promise(r => setTimeout(r, 1000));
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
    console.log('Project loaded')

    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Crear Post - Escenario 2 - Como administrador, quiero crear un post con un bookmark')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await page.fill('input.email.ember-text-field.gh-input.ember-view', adminUser);
    await new Promise(r => setTimeout(r, 1000));
    await page.fill('input.password.ember-text-field.gh-input.ember-view', password);
    await new Promise(r => setTimeout(r, 1000));
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
    await page.fill('input.email.ember-text-field.gh-input.ember-view', adminUser);
    await new Promise(r => setTimeout(r, 1000));
    await page.fill('input.password.ember-text-field.gh-input.ember-view', password);
    await new Promise(r => setTimeout(r, 1000));
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
    console.log('Project loaded')

    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Crear Post - Escenario 4 - Como usario administrador, quiero crear un post con una tarjeta de facebook')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await page.fill('input.email.ember-text-field.gh-input.ember-view', adminUser);
    await new Promise(r => setTimeout(r, 1000));
    await page.fill('input.password.ember-text-field.gh-input.ember-view', password);
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Post - escenario4/1 - Ingreso de credenciales.png'})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('a.ember-view.gh-secondary-action.gh-nav-new-post').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Post - escenario4/2 - Clic en nuevo Post.png'})
    await page.fill('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', 'Titulo post facebook card');
    await new Promise(r => setTimeout(r, 1000));
    await page.fill('div.koenig-editor__editor.__mobiledoc-editor.__has-no-content', 'Cuerpo post facebook card"');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Post - escenario4/3 - Ingreso datos del nuevo Post.png'})
    await page.locator('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Post - escenario4/4 - Se abre Post settings.png'})
    await page.locator('button', { hasText: 'Facebook card' }).click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Post - escenario4/5 - Se abre la tarjeta de Facebook.png'})
    await page.type('input[id=og-title]', 'Título post en facebook');
    await new Promise(r => setTimeout(r, 1000));
    await page.type('textarea[id=og-description]', 'Descripcion post en facebook');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './Crear Post - escenario4/6 - Se observa el preview de la tarjeta de Facebook.png'})
    console.log('Crear Post - Finaliza escenario 4')    

    console.log('Todas las pruebas finalizaron correctamente')   
    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función



