$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CurrencyConversion.feature");
formatter.feature({
  "line": 1,
  "name": "Currency Conversion API Test",
  "description": "",
  "id": "currency-conversion-api-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 375742100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Endpoint Configuration",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The endpoint is already configured",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.the_endpoint_is_already_configured()"
});
formatter.result({
  "duration": 169702399,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Latest Foreign Exchange Rate",
  "description": "",
  "id": "currency-conversion-api-test;latest-foreign-exchange-rate",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I input a valid date \"latest\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should have the status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "latest",
      "offset": 22
    }
  ],
  "location": "StepDefination.i_input_a_valid_date_something(String)"
});
formatter.result({
  "duration": 2291024900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "StepDefination.i_should_have_the_status_code(String)"
});
formatter.result({
  "duration": 24817800,
  "status": "passed"
});
formatter.before({
  "duration": 42100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Endpoint Configuration",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The endpoint is already configured",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.the_endpoint_is_already_configured()"
});
formatter.result({
  "duration": 462400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Specific date Foreign Exchange rates",
  "description": "",
  "id": "currency-conversion-api-test;specific-date-foreign-exchange-rates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I input a valid date \"2015-05-13\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should have the status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2015-05-13",
      "offset": 22
    }
  ],
  "location": "StepDefination.i_input_a_valid_date_something(String)"
});
formatter.result({
  "duration": 431625799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "StepDefination.i_should_have_the_status_code(String)"
});
formatter.result({
  "duration": 1153200,
  "status": "passed"
});
formatter.before({
  "duration": 26299,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Endpoint Configuration",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The endpoint is already configured",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.the_endpoint_is_already_configured()"
});
formatter.result({
  "duration": 391800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Specific date Foreign Exchange rates",
  "description": "",
  "id": "currency-conversion-api-test;specific-date-foreign-exchange-rates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I input a invalid date \"13-05-2019\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should have the status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "13-05-2019",
      "offset": 24
    }
  ],
  "location": "StepDefination.i_input_a_invalid_date(String)"
});
formatter.result({
  "duration": 615329601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 31
    }
  ],
  "location": "StepDefination.i_should_have_the_status_code(String)"
});
formatter.result({
  "duration": 498301,
  "status": "passed"
});
formatter.before({
  "duration": 16699,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Endpoint Configuration",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The endpoint is already configured",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.the_endpoint_is_already_configured()"
});
formatter.result({
  "duration": 342501,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Specific date Foreign Exchange rates",
  "description": "",
  "id": "currency-conversion-api-test;specific-date-foreign-exchange-rates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I input a invalid date \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I should have the status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "StepDefination.i_input_a_invalid_date(String)"
});
formatter.result({
  "duration": 511643200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 31
    }
  ],
  "location": "StepDefination.i_should_have_the_status_code(String)"
});
formatter.result({
  "duration": 720199,
  "status": "passed"
});
});