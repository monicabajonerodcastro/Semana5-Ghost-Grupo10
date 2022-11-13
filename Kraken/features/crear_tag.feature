Feature: Crear tag

@user1 @web
Scenario: Como usario administrador, quiero crear un tag solo con el nombre
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I click next
    And I wait for 3 seconds
    And I click on Tags section
    And I wait for 1 seconds
    And I click on New Tag button
    And I wait for 1 seconds
    And I set the tag name as "Nuevo tag1"
    And I wait for 1 seconds
    And I click on the save button
    And I wait for 1 seconds
    Then I expect to find the saved button

@user2 @web
Scenario: Como usario administrador, quiero crear un tag especificando slug y descripción
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I click next
    And I wait for 3 seconds
    And I click on Tags section
    And I wait for 1 seconds
    And I click on New Tag button
    And I wait for 1 seconds
    And I set the tag name as "Nuevo tag1"
    And I wait for 1 seconds
    And I set the slug name as "slugSample"
    And I wait for 1 seconds
    And I set the description as "This is the description"
    And I wait for 1 seconds
    And I click on the save button
    And I wait for 1 seconds
    Then I expect to find the saved button

@user3 @web
Scenario: Como usario administrador, quiero crear un tag con el nombre y una tarjeta de facebook
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I click next
    And I wait for 3 seconds
    And I click on Tags section
    And I wait for 1 seconds
    And I click on New Tag button
    And I wait for 1 seconds
    And I set the tag name as "Nuevo tag"
    And I wait for 1 seconds
    And I select the facebook card section
    And I wait for 1 seconds
    And I set the title "Mi titulo de tarjeta" in the facebook card
    And I wait for 1 seconds
    Then I expect to see the facebook card preview with title "Mi titulo de tarjeta"
    And I click on the save button
    And I wait for 1 seconds
    Then I expect to find the saved button

@user4 @web
Scenario: Como usario administrador, quiero volver a la lista de tags sin guardar los cambios
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I click next
    And I wait for 3 seconds
    And I click on Tags section
    And I wait for 1 seconds
    And I click on New Tag button
    And I wait for 1 seconds
    And I set the tag name as "Nuevo tag"
    And I wait for 1 seconds
    And I click on Tags section
    And I wait for 1 seconds
    And I click on the leave button
    Then I expect to find the title Tags of the previous section

