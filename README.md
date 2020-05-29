- Reference: [codecept](https://codecept.io/quickstart/) 
- Please install npm `npm install` and related dependencies

## Introduction
- The automated test uses CodeceptJS, Puppeteer, BDD, Page Object and Mochawesome.
- The automated test does the following:
  - Open browser and navigate to [test link](https://bluescapeqainterview.wordpress.com/contact/)
  - Fill out the fields with any applicable data 
  - Click on submit 
  - Validate the test using an assert 

**BDD** 
- features/basic.feature: describes the feature of the test page
- step_definitions/steps.js: Given/When/Then functions map strings from feature file to functions

**Page Object**
- pages/redirectedPage.js and submitFormPage.js: common locators and methods


**Mochawesome**
- install: `npm i mochawesome`
- run report: `npx codeceptjs run --steps --reporter mochawesome`
- open mochawesome-report/mochawesome.html in the browser


## Running Command
- run test: `npx codeceptjs run --steps`
- mochawesome-report: `npx codeceptjs run --steps --reporter mochawesome`
