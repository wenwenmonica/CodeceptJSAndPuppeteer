const { I } = inject();

module.exports = {

  // setting locators
  fields: {
    name: 'Name',
    email: 'Email',
    date: 'Date',
    button: 'Submit'
  },
    selectData: {xpath: "//table[@class='ui-datepicker-calendar']//tbody//tr[3]"},

  // methods
  fillForm(name, email, date) {
    I.fillField(this.fields.name, name);
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.date, date)
  },
  
  submitForm() {
    I.click(this.fields.button);
  }
}
