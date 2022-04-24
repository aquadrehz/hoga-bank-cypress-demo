Feature: User Account
# In practical The Login step would use API as pre-created account from seeded DB for a better performance

  Scenario: TC_UA_00001 Deposit - Failed from invalid amount format
    Given access Hoga Bank site with new account and "account_001" prefix
    And click "デポジット" to go to "Deposit" page
    When fill amount with "123_invalid"
    And click "Deposit" button
    Then warning "Failed to deposit" displayed
    And calculated fee "NaN" displayed
    And final amount "NaN" displayed

  Scenario: TC_UA_00002 Deposit - Failed from amount below zero
    Given access Hoga Bank site with new account and "account_001" prefix
    And click "デポジット" to go to "Deposit" page
    When fill amount with "-1"
    And click "Deposit" button
    Then warning "Failed to deposit" displayed

  Scenario: TC_UA_00003 Deposit - Success within 10 seconds waiting
    Given access Hoga Bank site with new account and "account_002" prefix
    And click "デポジット" to go to "Deposit" page
    When fill amount with "10"
    And click "Deposit" button
    Then final amount "7.00" displayed as top transaction
    And balance "10007.00" updated within "10" seconds

  Scenario: TC_UA_00004 Withdraw - Failed from invalid amount format
    Given access Hoga Bank site with new account and "account_003" prefix
    And click "引き出す" to go to "Withdraw" page
    When fill amount with "123_invalid"
    And click "Withdraw" button
    Then warning "Failed to withdraw" displayed
    And calculated fee "NaN" displayed
    And final amount "NaN" displayed

  Scenario: TC_UA_00005 Withdraw - Failed from deposit amount exceeded balance
    Given access Hoga Bank site with new account and "account_004" prefix
    And click "引き出す" to go to "Withdraw" page
    When fill amount with "10000.001"
    And click "Withdraw" button
    Then warning "Failed to withdraw" displayed
    And calculated fee "3000.00" displayed
    And final amount "13000.00" displayed

  Scenario: TC_UA_00006 Withdraw - Success within 10 seconds waiting
    Given access Hoga Bank site with new account and "account_005" prefix
    And click "引き出す" to go to "Withdraw" page
    When fill amount with "10"
    And click "Withdraw" button
    Then final amount "-13.00" displayed as top transaction
    And balance "9987.00" updated within "10" seconds
