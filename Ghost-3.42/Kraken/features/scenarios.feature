Feature: Create post



@user3 @web
Scenario: Scenario4: As an admin user, I want to create a post with a facebook card
    Given I navigate to page "<LOGIN_URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I click next
    And I wait for 3 seconds
    And I click on new post
    And I wait for 1 seconds
    And I set the "Titulo post facebook card" title
    And I wait for 1 seconds
    And I click into the post body
    And I wait for 1 seconds
    And I set the "Cuerpo post facebook card" body
    And I wait for 1 seconds
    And I click on the post settings button
    And I wait for 1 seconds
    And I click on the facebook card
    And I wait for 1 seconds
    And I fill the title with "Título post en facebook" and the description with "Descripcion post en facebook"
    And I wait for 1 seconds
    Then I see the preview of the facebook card with the title "Título post en facebook" and the description "Descripcion post en facebook"
