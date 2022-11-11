//Importar Playwright
const playwright = require('playwright');

const url = 'http://localhost:2368/ghost/#/signin';

//Función flecha asíncrona
(async () => {
  //Definir los navegadores en los que se quiere hacer la prueba
  for (const browserType of ['firefox']) {

    let adminUser='n.gomezb2@uniandes.edu.co';
    let password='Pass123456';
    
    //Contenido de la prueba
    console.log(browserType+'-------------------------------------------')

    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path: './escenario1/pagina_inicio.png'})
    console.log('Project loaded')

    //Interactuar con la aplicación web
    //...

    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Crear Tag - Escenario 1 - As an admin user I want to create a tag with just the name')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await new Promise(r => setTimeout(r, 3000));
    await page.type('input[id=ember6]', adminUser);
    await new Promise(r => setTimeout(r, 1000));
    await page.type('input[id=ember8]', password);
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './escenario1/1 - Ingreso de credenciales.png'})
    await page.click('id=ember10');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './escenario1/2 - Clic en nuevo tag.png'})
    await page.type('input[id=tag-name]', 'Nuevo tag1');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './escenario1/3 - Ingreso del nombre del tag.png'})
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './escenario1/4 - Se guarda el Tag y el botón se muestra como Saved.png'})
    console.log('Crear Tag - Finaliza escenario 1')    

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 4000));
    console.log('Project loaded')

    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Crear Tag - Escenario 2 - As an admin user I want to create a tag with the name, a specific slug and a description')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await new Promise(r => setTimeout(r, 3000));
    await page.type('input[id=ember6]', adminUser);
    await new Promise(r => setTimeout(r, 1000));
    await page.type('input[id=ember8]', password);
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './escenario2/1 - Ingreso de credenciales.png'})
    await page.click('id=ember10');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './escenario2/2 - Clic en nuevo tag.png'})
    await page.type('input[id=tag-name]', 'Nuevo tag2');
    await new Promise(r => setTimeout(r, 1000));
    await page.fill('id=tag-slug', '');
    await new Promise(r => setTimeout(r, 1000));
    await page.type('input[id=tag-slug]', 'slugSample');
    await new Promise(r => setTimeout(r, 1000));
    await page.type('textarea[id=tag-description]', 'This is the description');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './escenario2/3 - Ingreso del nombre, slug y descripción.png'})
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './escenario2/4 - Se guarda el Tag y el botón se muestra como Saved.png'})
    console.log('Crear Tag - Finaliza escenario 2')   
    
    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 4000));
    console.log('Project loaded')

    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Crear Tag - Escenario 3 - As an admin user I want to create a tag with just the name and a facebook card')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await new Promise(r => setTimeout(r, 3000));
    await page.type('input[id=ember6]', adminUser);
    await new Promise(r => setTimeout(r, 1000));
    await page.type('input[id=ember8]', password);
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './escenario3/1 - Ingreso de credenciales.png'})
    await page.click('id=ember10');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './escenario3/2 - Clic en nuevo tag.png'})
    await page.type('input[id=tag-name]', 'Nuevo tag3');
    await new Promise(r => setTimeout(r, 1000));
    await page.locator(':nth-match(:text("Expand"), 3)').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './escenario3/3 - Clic en expand Facebook card.png'})
    await page.type('input[id=og-title]', 'Mi titulo de tarjeta');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './escenario3/4 - Se agrega el titulo de la tarjeta.png'})
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './escenario3/5 - Se guarda el tag con una tarjeta de Facebook.png'})
    console.log('Crear Tag - Finaliza escenario 3')    


    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 4000));
    console.log('Project loaded')

    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Crear Tag - Escenario 4 - As an admin user I want to get back to the list of tags without saving the changes of the new tag')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await new Promise(r => setTimeout(r, 3000));
    await page.type('input[id=ember6]', adminUser);
    await new Promise(r => setTimeout(r, 1000));
    await page.type('input[id=ember8]', password);
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './escenario4/1 - Ingreso de credenciales.png'})
    await page.click('id=ember10');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './escenario4/2 - Clic en nuevo tag.png'})
    await page.type('input[id=tag-name]', 'Nuevo tag4');
    await new Promise(r => setTimeout(r, 1000));
    await page.goBack();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './escenario4/3 - Confirmación de retornar sin guardar cambios.png'})
    await page.locator(':nth-match(:text("Leave"), 2)').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: './escenario4/4 - Se retorna a la lista de Tags sin el nuevo tag guardado.png'})
    console.log('Crear Tag - Finaliza escenario 4')    

    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función



