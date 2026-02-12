Feature: Homepage sanity test

  Scenario: Home pages title verification
    Given user navigate to the homepage
    Then home page has the "title" "Sinhala for kids"
  
  Scenario: Home pages footer verification
    Given user navigate to the homepage
    Then home page has the "footer" "Copywrite © 2024 Indika"
    
  Scenario: Home pages button verification
    Given user navigate to the homepage
    Then home page has the "button" "Next page"
    
  Scenario: Home pages image verification
    Given user navigate to the homepage
    Then home page has the "image" "./images/Sinhala-for-kids-cover.1.jpeg"
     
  Scenario: Home pages text verification
    Given user navigate to the homepage
    Then home page contains the text
    """
    This book introduces the Sinhala alphabet and vocabulary for children, with pronunciations provided in English and Japanese.
    """