//Importar Playwright
const playwright = require('playwright');

const url = 'http://localhost:2368/ghost/#/signin';


const fillLogin = async (page, adminUser, password) => {
  await page.fill('input.email.gh-input', adminUser);
  await new Promise(r => setTimeout(r, 1000));
  await page.fill('input.password.gh-input', password);
  await new Promise(r => setTimeout(r, 1000));
};

//Función flecha asíncrona
(async () => {
  //Definir los navegadores en los que se quiere hacer la prueba
  for (const browserType of ['firefox']) {

    const prompt = require('prompt-sync')();
    const adminUser = prompt('Ingrese el correo del usuario administrador: ');
    const password = prompt('Ingrese la contraseña del usuario administrador: ');
    const ghostVersion = '5.22.11';

    const screenshotPath = `../../screenshots/ghost-${ghostVersion}/playwright_scenario`;
    
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
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Post - Scenario1: As an admin user, I want to create a post')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}1_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('a.ember-view.gh-secondary-action.gh-nav-new-post').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}1_step2.png`})
    await page.fill('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', 'Titulo post');
    await new Promise(r => setTimeout(r, 1000));
    await page.fill('div.koenig-editor__editor.__mobiledoc-editor.__has-no-content', 'Cuerpo post');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}1_step3.png`})
    await page.locator('button', { hasText: 'Publish' }).click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}1_step4.png`})
    await page.locator('text=Continue, final review →').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}1_step5.png`})
    await page.locator('text=Publish post, right now').click();
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path: `${screenshotPath}1_step6.png`})
    console.log('Create Post - Scenario 1 - Completed')    

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');

    console.log('Todas las pruebas finalizaron correctamente')   
    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función
