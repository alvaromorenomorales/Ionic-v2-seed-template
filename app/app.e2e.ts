/// <reference path="../typings/browser.d.ts" />
'use strict';

describe('MyApp', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Inicio');
  });

  it('should have <nav>', () => {
    expect(element(by.css('ion-navbar')).isPresent()).toEqual(true);
  });

  it('should have correct nav text for Home', () => {
    expect(element(by.css('ion-navbar:first-child')).getText()).toContain('Inicio');
  });

  it('has a menu button that displays the left menu', () => {
    element(by.css('.bar-button-menutoggle')).click()
      .then(() => {
        browser.driver.sleep(2000); // wait for the animation
        expect(element.all(by.css('.toolbar-title')).first().getText()).toEqual('Páginas');
      });
  });

  it('the left menu has a link with title inicio', () => {
    element(by.css('.bar-button-menutoggle')).click()
      .then(() => {
        browser.driver.sleep(2000); // wait for the animation
        expect(element.all(by.css('ion-label')).first().getText()).toEqual('Inicio');
      });
  });

  it('the left menu has a link with title perfil', () => {
    element(by.css('.bar-button-menutoggle')).click()
      .then(() => {
        browser.driver.sleep(2000); // wait for the animation
        expect(element.all(by.css('ion-label')).last().getText()).toEqual('Perfil');
      });
  });
});
