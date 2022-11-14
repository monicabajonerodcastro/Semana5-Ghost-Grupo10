# Playwright
Para más información acerca de la herramienta, ingrese [aquí](https://playwright.dev/)

## Prerequisistos:

- Descargar el repositorio
- Tener instalado Ghost 5.19.0
- Ghost 5.19.0 está en ejecución y se despliega en http://localhost:2368/
- Tener un usuario administrador creado y activo
- Versión de Node.js 14.20.x instalada en su computadora y dependencia Playwright
- Versión del manejador de paquetes npm 6.14.xx instalada en su computadora.
- Tener instalado node y la dependencia Playwright

## Ejecución:

1. Ubiquese dentro de la carpeta playwright del repositorio
2. Asegure que la dependencia Playwright está instalada mediante el comando 
```bash
npm install playwright
```
3. Asegurese que Ghost 5.19.0 está en ejecución y se despliega en http://localhost:2368/
4. Corra el siguiente comando en consola
```bash
node index.js
```
5. Ingrese el email y contraseña solicitados
6. Una vez se lea el mensaje de que todas las pruebas finalizaron, podrá ingresar a la carpeta correspondiente dentro de playwright para ver los resultados en imagenes (Por ejemplo para la funcionalidad Crear Post en escenario 1 encontrará la carpeta "Crear Post - escenario1).
