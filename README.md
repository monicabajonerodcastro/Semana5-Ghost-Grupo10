# Semana5- Pruebas automatizadas en Ghost - Grupo10
En la carpeta de cada herramienta, se especifican los requisitos e instrucciones de ejecución de las pruebas.

### Herramientas
- Kraken
- Playwright

### Funcionalidades Semana 5 - Ghost 5.22.18 (20 escenarios por herramienta)

https://github.com/monicabajonerodcastro/Semana5-Ghost-Grupo10/tree/master/Ghost-5.22.11
- Kraken: https://github.com/monicabajonerodcastro/Semana5-Ghost-Grupo10/tree/master/Ghost-5.22.11/Kraken
- Playwright: https://github.com/monicabajonerodcastro/Semana5-Ghost-Grupo10/tree/master/Ghost-5.22.11/Playwright

### Funcionalidades Semana 6 - Ghost 3.42 (5 escenarios por herramienta)
https://github.com/monicabajonerodcastro/Semana5-Ghost-Grupo10/tree/master/Ghost-3.42
- Kraken: https://github.com/monicabajonerodcastro/Semana5-Ghost-Grupo10/tree/master/Ghost-3.42/Kraken
- Playwright https://github.com/monicabajonerodcastro/Semana5-Ghost-Grupo10/tree/master/Ghost-3.42/Playwright

### Backstop:
Recuerde que debe tener instalado Backstop en su máquina local.
*Instrucciones: *
1. Descargar el proyecto de manera local
2. Ejecutar los casos de la carpeta Ghost-5.22.18 tanto en Kraken como en Playwrigth
3. Ejecutar los casos de la carpeta Ghost-3.42 tanto en Kraken como en Playwrigth
4. Ubicarse en la carpeta ./Backstop
5. Ejecutar el siguiente comando:
```bash
backstop reference --configPath=index.js
```
6. Luego que el comando anterior finalice, ejecutar el siguente comando:
```bash
backstop test --configPath=index.js
```
7. El reporte se abrirá automáticamente en su explorador predeterminado. En caso de que no se abra el reporte, ejecute el siguiente comando:
```bash
backstop openReport --configPath=index.js
```

### Ventajas y desventajas de Backstop y Resemble


### Video Semana 6
