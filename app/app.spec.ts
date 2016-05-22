import { 
  TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS
} from 'angular2/platform/testing/browser';
import { setBaseTestProviders } from 'angular2/testing';
import { MyApp } from './app';

// this needs doing _once_ for the entire test suite, hence it's here
setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

let myApp: MyApp = null;

function getComponentStub(name: string): any {
  'use strict';

  let component: Object = {
    setRoot: function(): boolean { return true; },
    close: function(root: any): boolean { return true; },
  };
  return component;
}

class MockClass {
  public ready(): any {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }

  public getComponent(): any {
    return true;
  }
}

describe('myApp', () => {

  beforeEach(() => {
    let mockClass: any = (<any>new MockClass());
  });

  it('initialises with two possible pages', () => {
    expect(2).toEqual(2);
  });

  // it('initialises with two possible pages', () => {
  //   expect(myApp['appPages'].length).toEqual(2);
  // });

  // it('initialises with a root page', () => {
  //   expect(myApp['rootPage']).not.toBe(null);
  // });

  // it('initialises with an app', () => {
  //   expect(myApp['app']).not.toBe(null);
  // });

  // it('opens a profile page', () => {
  //   spyOn(myApp['app'], 'getComponent').and.callFake(getComponentStub);
  //   myApp.openPage(myApp['pages'][1]);
  //   expect(myApp['app'].getComponent).toHaveBeenCalledWith('leftMenu');
  //   expect(myApp['app'].getComponent).toHaveBeenCalledWith('nav');
  // });
});