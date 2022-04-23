Feature: Signup

  Scenario: TC_00001 Signup - Stopped from blank username input
    Given go to Hoga Bank site
    And click "SIGNUP" button
    And click "SIGNUP" button
    Then warning "User name cannot be blank" displayed

  Scenario: TC_00002 Signup - Stopped from username contain spaces
    Given go to Hoga Bank site
    And click "SIGNUP" button
    When fill username with "contain white  space"
    And click "SIGNUP" button
    Then warning "User name cannot contain whitespaces" displayed

  Scenario: TC_00004 Signup - Stopped from username blank
    Given go to Hoga Bank site
    And click "SIGNUP" button
    When fill username with "correct_user_004"
    And fill password with "Pwd123"
    And click "SIGNUP" button
    Then warning "Password cannot be less than 8 characters" displayed

  Scenario: TC_00005 Signup - Stopped password length less than 8
    Given go to Hoga Bank site
    And click "SIGNUP" button
    When fill username with "correct_user_005"
    And fill password with "Under8"
    And click "SIGNUP" button
    Then warning "Password cannot be less than 8 characters" displayed

  Scenario: TC_00006 Signup - Stopped password length more than 32
    Given go to Hoga Bank site
    And click "SIGNUP" button
    When fill username with "correct_user_006"
    And fill password with "Length_over_32_12345678901234567890__"
    And click "SIGNUP" button
    Then warning "Password cannot be longer than 32 characters" displayed


  Scenario: TC_00007 Signup - Stopped from password do not contain number
    Given go to Hoga Bank site
    And click "SIGNUP" button
    When fill username with "correct_user_007"
    And fill password with "No_Number"
    And click "SIGNUP" button
    Then warning "Password must contain numbers" displayed

  Scenario: TC_00008 Signup - Stopped from password do not contain uppercase
    Given go to Hoga Bank site
    And click "SIGNUP" button
    When fill username with "correct_user_008"
    And fill password with "no_upper_case_1234"
    And click "SIGNUP" button
    Then warning "Password must contain uppercase letters" displayed

  Scenario: TC_00009 Signup - Passed with min password length
    Given go to Hoga Bank site
    And click "SIGNUP" button
    When fill generated username with "correct_user_009" prefix
    And fill password with "Length_8"
    And click "SIGNUP" button
    Then warning do not displayed

  Scenario: TC_00010 Signup - Passed with max password length
    Given go to Hoga Bank site
    And click "SIGNUP" button
    When fill generated username with "correct_user_010" prefix
    And fill password with "Length_32_12345678901234567890__"
    And click "SIGNUP" button
    Then warning do not displayed

  Scenario: TC_00011 Signup - Passed with average password length
    Given go to Hoga Bank site
    And click "SIGNUP" button
    When fill generated username with "correct_user_011" prefix
    And fill password with "CORRECT_password_011"
    And click "SIGNUP" button
    Then warning do not displayed
    And username "correct_user_011" displayed in transaction table
