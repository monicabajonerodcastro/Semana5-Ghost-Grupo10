# Semana5- Pruebas automatizadas en Ghost - Grupo10
En la carpeta de cada herramienta, se especifican los requisitos e instrucciones de ejecución de las pruebas.

### Herramientas
- Kraken
- Playwright
- Ghost 3.42

### Funcionalidades
1. Crear Post
2. Crear tag
3. Crear página
4. Actualizar sitio web
5. Actualizar perfil
6. Crear Nuevo Miembro

### Escenarios
- Kraken
Scenario1: As an admin user, I want to create a post
Scenario2: As an admin user, I want to create a post with a bookmark
Scenario4: As an admin user, I want to create a post with a facebook card
Scenario5: As an admin user I want to create a tag with just the name

- Playwright
Scenario6: As an admin user I want to create a tag with the name, a specific slug and a description
Scenario7: As an admin user I want to create a tag with just the name and a facebook card
Scenario8: As an admin user I want to get back to the list of tags without saving the changes of the new tag
Scenario9: As an administrator user, I want to create a page
Scenario18: As an administrator user I want to update my profile


Scenario10: As an administrator user I want to create a page with a feature image

- Update website
Scenario11: As an administrator user I want to update my website title'
Scenario12: As an administrator user I want to update my website publication language
Scenario13: As an administrator user I want to update my website meta data
Scenario14: As an administrator user I want to update my website twitter card
Scenario15: As an administrator user I want to update my website social accounts

- Create member
Scenario16: As an administrator user I want to create a member
Scenario17: As an administrator user I want to avoid creating a member with an invalid email

- Update profile
Scenario18: As an administrator user I want to update my profile
Scenario19: As an administrator user I want to ensure my password can not be changed if it is not correct
Scenario20: As an administrator user I want to change my password
