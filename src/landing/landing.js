function landingHtml() {
  // naviagator
  const wrapperNavigation = document.createElement('div');
  wrapperNavigation.setAttribute('class', 'navigation');
  document.body.appendChild(wrapperNavigation);

  const wrapperButtons = wrapperNavigation.cloneNode(false);
  const wrapperLogo = document.createElement('div');
  const logo = document.createElement('h1');
  wrapperButtons.setAttribute('class', 'wrapperButtons');
  wrapperLogo.setAttribute('class', 'wrapperLogo');
  logo.setAttribute('class', 'logo');
  logo.textContent = 'MY PISKEL';
  wrapperLogo.append(logo);
  wrapperNavigation.append(wrapperLogo);
  wrapperNavigation.append(wrapperButtons);

  const buttonCreate = document.createElement('a');
  const buttonLog = document.createElement('a');
  buttonCreate.setAttribute('class', 'button create');
  buttonCreate.setAttribute('href', '/create.html');
  buttonCreate.textContent = 'Create Sprite';
  buttonLog.setAttribute('class', 'button log');
  buttonLog.textContent = 'Sign in';
  wrapperButtons.append(buttonCreate);
  wrapperButtons.append(buttonLog);

  // main
  const wrapperMain = document.createElement('div');
  wrapperMain.setAttribute('class', 'main-wrapper-landing');
  const wrapperH1 = document.createElement('h1');
  wrapperH1.textContent = 'My Piskel is a free online editor for animated sprites & pixel art';
  const wrapperH2 = document.createElement('h2');
  wrapperH2.textContent = 'Create animations in your browser.';
  wrapperMain.append(wrapperH1);
  wrapperMain.append(wrapperH2);

  const divWrapperCreate = document.createElement('div');
  divWrapperCreate.setAttribute('class', 'wrapper-create');
  const aCreate = document.createElement('a');
  aCreate.setAttribute('class', 'main-create');
  aCreate.setAttribute('href', '/create.html');
  aCreate.textContent = 'Create Sprite';
  divWrapperCreate.append(aCreate);
  wrapperMain.append(divWrapperCreate);

  const divWrapperImg = document.createElement('div');
  divWrapperImg.setAttribute('class', 'wrapper-img');

  const imgForOneImg = document.createElement('img');
  const imgForTwoImg = document.createElement('img');
  imgForOneImg.setAttribute('src', './src/image/view1.png');
  imgForOneImg.setAttribute('class', 'one-view');
  imgForTwoImg.setAttribute('src', './src/image/view2.png');
  imgForTwoImg.setAttribute('class', 'two-view');

  divWrapperImg.append(imgForOneImg);
  divWrapperImg.append(imgForTwoImg);
  wrapperMain.append(divWrapperImg);

  const wrapperFunctions = document.createElement('div');
  wrapperFunctions.setAttribute('class', 'wrapper-functions');

  // first feat
  const oneFunction = document.createElement('div');
  oneFunction.setAttribute('class', 'function');
  const oneimg = document.createElement('img');
  const onewrapper = document.createElement('div');
  oneimg.setAttribute('class', 'one-img');
  oneimg.setAttribute('src', '/src/image/feature-live-preview.gif');
  onewrapper.setAttribute('class', 'one-wrapper');
  const oneH4 = document.createElement('h2');
  const oneP = document.createElement('p');
  oneH4.textContent = 'Live preview';
  oneP.textContent = 'Check a preview of your animation in real time as you draw. Adjust the frame delay on the fly.';

  // second feat
  const twoFunction = document.createElement('div');
  twoFunction.setAttribute('class', 'function');
  const twoimg = document.createElement('img');
  const twowrapper = document.createElement('div');
  twoimg.setAttribute('class', 'two-img');
  twoimg.setAttribute('src', '/src/image/Megaman moving.gif');
  twowrapper.setAttribute('class', 'two-wrapper');
  const twoH4 = document.createElement('h2');
  const twoP = document.createElement('p');
  twoH4.textContent = 'Export to GIF, aPNG...';
  twoP.textContent = 'Several export modes supported. Animated GIFs or aPNG.';

  // three feat
  const threeFunction = document.createElement('div');
  threeFunction.setAttribute('class', 'function');
  const threeimg = document.createElement('img');
  const threewrapper = document.createElement('div');
  threeimg.setAttribute('class', 'three-img');
  threeimg.setAttribute('src', '/src/image/Panda.gif');
  threewrapper.setAttribute('class', 'three-wrapper');
  const threeH4 = document.createElement('h2');
  const threeP = document.createElement('p');
  threeH4.textContent = 'Use of a convenient interface';
  threeP.textContent = 'Any work with colors, frames, tools etc..';

  // four feat
  const fourFunction = document.createElement('div');
  fourFunction.setAttribute('class', 'function');
  const fourimg = document.createElement('img');
  const fourwrapper = document.createElement('div');
  fourimg.setAttribute('class', 'four-img');
  fourimg.setAttribute('src', '/src/image/llama.gif');
  fourwrapper.setAttribute('class', 'four-wrapper');
  const fourH4 = document.createElement('h2');
  const fourP = document.createElement('p');
  fourH4.textContent = 'Live preview';
  fourP.textContent = 'Check a preview of your animation in real time as you draw. Adjust the frame delay on the fly.';

  onewrapper.append(oneH4);
  onewrapper.append(oneP);
  oneFunction.append(oneimg);
  oneFunction.append(onewrapper);

  twowrapper.append(twoH4);
  twowrapper.append(twoP);
  twoFunction.append(twoimg);
  twoFunction.append(twowrapper);

  threewrapper.append(threeH4);
  threewrapper.append(threeP);
  threeFunction.append(threeimg);
  threeFunction.append(threewrapper);

  fourwrapper.append(fourH4);
  fourwrapper.append(fourP);
  fourFunction.append(fourimg);
  fourFunction.append(fourwrapper);

  wrapperFunctions.append(oneFunction);
  wrapperFunctions.append(twoFunction);
  wrapperFunctions.append(threeFunction);
  wrapperFunctions.append(fourFunction);

  wrapperMain.append(wrapperFunctions);
  document.body.appendChild(wrapperMain);

  // footer
  const footer = document.createElement('div');
  footer.setAttribute('class', 'footer');
  document.body.appendChild(footer);

  const footerItems = document.createElement('div');
  footerItems.setAttribute('class', 'footerItems');

  const itemGit = document.createElement('div');
  itemGit.setAttribute('class', 'github');

  const imgGit = document.createElement('img');
  const spanGit = document.createElement('span');
  const aGit = document.createElement('a');
  aGit.setAttribute('href', 'https://github.com/mrINEX');
  imgGit.setAttribute('src', './src/image/github-logo.png');
  aGit.textContent = 'GitHub';

  itemGit.append(imgGit);
  itemGit.append(spanGit);
  spanGit.append(aGit);
  footerItems.append(itemGit);
  footer.append(footerItems);
  return 'done';
}

module.exports = {
  landingHtml,
};
