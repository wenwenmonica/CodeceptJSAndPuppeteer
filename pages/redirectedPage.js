const { I } = inject();

module.exports = {

  // setting locators
  mainItem: {
    info: "//blockquote[@class='contact-form-submission']//p"
  },
  
  // methods
  async grabElement() {
    let info = await I.grabTextFrom(this.mainItem.info);
    return info;
  }
}
