Feature: : Testing Login for a Standard user

        A Standard user should have a glitch free login experience

        Scenario: A standard user should be able to login SwagLabs
                Given I launch the SwagLab site
                And I insert the standard username
                And I insert the password
                When I click the Login button
                Then I should see the products page