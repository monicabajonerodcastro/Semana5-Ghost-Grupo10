Feature: Update website

  @user1 @web
  Scenario: As an administrator user I want to update my website title
    Given I navigate to page "<LOGIN_URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    When I enter password "<PASSWORD>"
    And I wait for 1 seconds
    When I click the login button
    And I wait for 3 seconds
    When I click the settings button
    And I wait for 1 seconds
    When I click the general button
    And I wait for 1 seconds
    When I click the title and description expand button
    And I wait for 1 seconds
    When I enter the new website title "My updated website title"
    When I click the save button
    And I wait for 1 seconds
    Then I see the success update title message
