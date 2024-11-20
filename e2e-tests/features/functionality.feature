Feature: Homepage functionality test
  Scenario: Home pages button press verification
    Given user navigate to the homepage
    And view the image with  class ".book-img"
    When user click the button with class ".next-button"
    Then image on the homepage will change
