const create = require('../src/create/create');
const landing = require('../src/landing/landing');
const store = require('../src/create/js/storage');
const { updateIndex, animation } = require('../src/create/js/littlefunctions');
const { setCurrentColor, currentSizeCanvas, removeActiveFrame } = require('../src/create/js/functions');
const app = require('../src/app');

describe('tests', () => {
  it('landing and create pages done:', () => {
    expect(landing.landingHtml()).toBeDefined();
    expect(create.createHtml()).toBeDefined();
  });
  it('storage loaded:', () => {
    expect(store.setStorage()).toBeDefined();
  });
  it('update index done:', () => {
    expect(updateIndex()).toBeDefined();
  });
  it('animation done:', () => {
    expect(animation([''])).toBeDefined();
  }); 
  it('set color done:', () => {
    expect(setCurrentColor()).toBeDefined();
  });
  it('size current canvas done:', () => {
    expect(currentSizeCanvas()).toBeDefined();
  });
  it('remove frame done:', () => {
    expect(removeActiveFrame()).toBeDefined();
  });
});
