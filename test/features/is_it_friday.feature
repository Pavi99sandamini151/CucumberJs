Feature: Is it friday yet?
  Everybody want to know it's friday

  Scenario Outline: Today is or is not Friday
    Given : today is "<day>"
    When I ask weather it's Friday yet
    Then I should be told "<answer>"


    Examples:
      |day           |answer |
      |Friday        |TGIF   |
      |Monday        |Nope   |
      |anything else!|Nope   |