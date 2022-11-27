# Playwright GhostV5.22.11

Para ejecutar las pruebas instale las herramientas y siga las instrucciones a continuación:

### Ghost

#### Prerequisistos

* Un computador corriendo MacOS, Windows o Linux
* Una versión soportada de Node.js, se recomienda la versión 14.21.x
* Un gestor de paquetes como npm o yarn
* Un directorio vacío en su computador

#### Instalación de Ghost CLI

El módulo npm se puede instalar con npm o yarn en una máquina local, según sus preferencias:

```bash
npm install ghost-cli@latest -g
```

#### Instalación de Ghost

En su terminal, diríjase en un directorio vacío y ejecute el comando de instalación:

```
ghost install 5.22.11 local
```

Una vez que finalice la instalación, podrá ingresar en http://localhost:2368/ghost para acceder a Ghost Admin

### Playwrigth

#### Prerequisistos

* Descargar el repositorio
* Haber instalado Ghost en su computador
* Ghost Admin se ejecuta y despliega correctamente en http://localhost:2368/ghost
* Tener un usuario administrador de Ghost creado y activo en su computador
* Una versión soportada de Node.js, se recomienda la versión 14.21.x
* Un gestor de paquetes como npm o yarn

#### Instalación de dependencias

En una terminal diríjase a la carpeta Playwright del repositorio y ejecute el siguiente comando:

```bash
npm install
```

Este comando instalará los paquetes de los que depende el proyecto

#### Configuración de propiedades

Antes de empezar a ejecutar las pruebas, es necesario configurar las propiedades que se van a utilizar. Para esto, diríjase a la carpeta Playwright del repositorio y ubíquese en el archivo *config.json*. Posteriormente, configure cada una de las propiedades como se indica a continuación:

```json
{
  "headless": "Modo de ejecución de pruebas, ej: false",
  "url": "URL de inicio de sesión, ej: http://localhost:2368/ghost/#/signin",
  "username": "Nombre de usuario administrador, ej: dc.tafur@uniandes.edu.co",
  "password": "Contraseña de usuario administrador, ej: MISW202215",
  "screenshotPath": "Ruta de almacenamiento de screenshots, ej: ./screenshots"
}

```

#### Ejecución de pruebas

En una terminal diríjase a la carpeta Playwright del repositorio y ejecute el siguiente comando:

```bash
npm test
```

o

```bash
npm run test
```

Este comando ejecutará las pruebas.
