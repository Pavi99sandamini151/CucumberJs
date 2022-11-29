const assert = require('assert');
const { Given, When, Then } = require('cucumber');
let app = require('../../../src/App');

Given("today is {string}", function(givenDay){
    this.today = givenDay;
});

When("I ask weather it's friday yet", function(){
    this.actualAnswer = app.isItfriday(this.today);
});

Then("I should be told {string}", function(expectedAnswer){
   assert.equal(this.actualAnswer, expectedAnswer);
});
