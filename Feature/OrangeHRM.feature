Feature: OrangeHRM Login
#
#  Scenario: Logo Presence on OrangeHRM home page
#    Given I launch chrome browser
#    When I open orange hrm home page
#    Then I verify that the logo present on the page
#    And close browser

#  Scenario: Login to OrangeHRM with valid credentials
#    Given I launch chrome browser
#    When I open orange hrm home page
#    And Enter username and password
#    And Click on Login button
#    And User must successfully login to the Dashboard Page
#    And close browser

#  Scenario: Login to OrangeHRM with valid credentials passing params
#    Given I launch chrome browser
#    When I open orange hrm home page
#  And Enter username "Admin" and password "admin123"
#    And Click on Login button
#    And User must successfully login to the Dashboard Page
#    And close browser

  Scenario Outline: Login to OrangeHRM with multiple data DD
    Given I launch chrome browser
    When I open orange hrm home page
    And Enter username "<username>" and password "<password>"
    And Click on Login button
    And User must successfully login to the Dashboard Page
    And close browser

    Examples:
      | username | password |
      | admin    | admin123 |
      | admin123 | admin    |

