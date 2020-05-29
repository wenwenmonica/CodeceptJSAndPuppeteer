const { I, submitFormPage, redirectedPage} = inject();
const assert = require('assert');
let name, email, date;


Given('I navigate to the application', () => {
  I.amOnPage('/')
});

Given('I have all the required information', (table) => {
  const cells = table.rows[1].cells;
  name = cells[0].value;
  email = cells[1].value;
  date = cells[2].value;
  submitFormPage.fillForm(name, email, date);
});

Given('I click Submit button', () => {
  submitFormPage.submitForm();
});

Given('I will be redirected after successful form submit', async () => {
  let str = await redirectedPage.grabElement();
  let expectedInfo = (str[0].substr(str[0].indexOf(' ') + 1)  
                      + str[1].substr(str[1].indexOf(' ') + 1)).replace(/^\s+|\s+$/gm,'');
  assert.equal(expectedInfo, name + email)
});




