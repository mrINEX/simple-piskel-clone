function createHtml() {
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
  logo.textContent = 'Create PISKEL';
  wrapperLogo.append(logo);
  wrapperNavigation.append(wrapperLogo);
  wrapperNavigation.append(wrapperButtons);

  const buttonCreate = document.createElement('a');
  const buttonLog = document.createElement('a');
  buttonCreate.setAttribute('class', 'button create');
  buttonCreate.setAttribute('href', './app.html');
  buttonCreate.textContent = 'Create Sprite';
  buttonLog.setAttribute('class', 'button log');
  buttonLog.textContent = 'Sign in';
  wrapperButtons.append(buttonCreate);
  wrapperButtons.append(buttonLog);

  // main start ---------------------
  const wrapperMain = document.createElement('div');
  wrapperMain.setAttribute('class', 'main-wrapper');
  const toolsSection = document.createElement('div');
  toolsSection.setAttribute('class', 'tools-section');
  const centerSection = document.createElement('div');
  centerSection.setAttribute('class', 'center-section');
  const rightSection = document.createElement('div');
  rightSection.setAttribute('class', 'right-section');

  // tools section
  const toolsSize = document.createElement('div');
  toolsSize.setAttribute('class', 'tools-size');
  for (let i = 1; i < 5; i += 1) {
    const size = document.createElement('div');
    size.setAttribute('class', `size${i}`);
    if (i === 1) {
      size.classList.add('active-gold');
    }
    size.textContent = `${i}`;
    toolsSize.append(size);
  }

  const tools = document.createElement('ul');
  tools.setAttribute('class', 'tools');
  const toolsArr = ['pencil', 'bucket', 'eraser', 'stroke', 'picker', 'bucketall'];
  for (let i = 0; i < toolsArr.length; i += 1) {
    const li = document.createElement('li');
    if (i === 0) {
      li.setAttribute('style', 'border:3px solid gold;margin: 10px -2px;');
    }
    li.setAttribute('class', `${toolsArr[i]}`);
    tools.append(li);
  }

  const colorSection = document.createElement('div');
  colorSection.setAttribute('class', 'color-section');
  const colorArr = ['left-color', 'right-color', 'swap-color'];
  const mouseArray = ['left-mouse', 'right-mouse'];
  for (let i = 0; i < colorArr.length; i += 1) {
    const div = document.createElement('div');
    div.setAttribute('class', `${colorArr[i]}`);
    if (i === 0 || i === 1) {
      const inputcolor = document.createElement('input');
      inputcolor.setAttribute('type', 'color');
      inputcolor.setAttribute('value', '#ff0000');
      inputcolor.setAttribute('class', mouseArray[i]);
      div.append(inputcolor);
    }
    colorSection.append(div);
  }
  toolsSection.append(toolsSize);
  toolsSection.append(tools);
  toolsSection.append(colorSection);

  wrapperMain.append(toolsSection);

  // // center section
  // left column
  const divLeftColumn = document.createElement('div');
  divLeftColumn.setAttribute('class', 'left-column');
  const previewWrapperDiv = document.createElement('div');
  previewWrapperDiv.setAttribute('class', 'preview-list-wrapper');
  const previewScrollerDiv = document.createElement('div');
  const topDiv = document.createElement('div');
  const bottomDiv = document.createElement('div');
  previewScrollerDiv.setAttribute('class', 'preview-list-scroller');
  topDiv.setAttribute('class', 'top-overflow');
  bottomDiv.setAttribute('class', 'bottom-overflow');
  const previewList = document.createElement('ul');
  previewList.setAttribute('class', 'preview-list');
  const liDataTile = document.createElement('li');
  const divAddFrame = document.createElement('div');
  liDataTile.setAttribute('class', 'preview-tile li-selected');
  liDataTile.setAttribute('draggable', 'true');
  liDataTile.setAttribute('id', '0');
  divAddFrame.setAttribute('class', 'add-frame-action');
  const addFrameIcon = document.createElement('div');
  const addFrameLabel = document.createElement('div');
  addFrameIcon.setAttribute('class', 'add-frame-action-icon');
  addFrameLabel.setAttribute('class', 'add-frame-action-label');
  addFrameLabel.textContent = 'Add new frame';
  // for li add frame
  const divCanvasContainer = document.createElement('div');
  divCanvasContainer.setAttribute('class', 'canvas-container');
  const divCanvasBackground = document.createElement('div');
  const canvas = document.createElement('canvas');
  divCanvasBackground.setAttribute('class', 'canvas-background');
  canvas.setAttribute('class', 'tile-view-canvas');
  canvas.setAttribute('width', '96');
  canvas.setAttribute('height', '96');
  divCanvasContainer.append(divCanvasBackground);
  divCanvasContainer.append(canvas);
  liDataTile.append(divCanvasContainer);
  const buttonClone = document.createElement('button');
  const buttonDelete = document.createElement('button');
  const divDragndrop = document.createElement('div');
  const buttonToggle = document.createElement('button');
  buttonClone.setAttribute('class', 'tile-overlay clone-button');
  buttonDelete.setAttribute('class', 'tile-overlay delete-button');
  divDragndrop.setAttribute('class', 'tile-overlay dragndrop-button');
  buttonToggle.setAttribute('class', 'tile-overlay toggle-button');
  buttonToggle.textContent = '1';
  liDataTile.append(buttonClone);
  liDataTile.append(buttonDelete);
  liDataTile.append(divDragndrop);
  liDataTile.append(buttonToggle);

  divAddFrame.append(addFrameIcon);
  divAddFrame.append(addFrameLabel);
  previewList.append(liDataTile);
  previewList.append(divAddFrame);
  previewScrollerDiv.append(previewList);
  previewWrapperDiv.append(previewScrollerDiv);
  previewWrapperDiv.append(topDiv);
  previewWrapperDiv.append(bottomDiv);
  divLeftColumn.append(previewWrapperDiv);
  centerSection.append(divLeftColumn);

  // main column
  const divMainColumn = document.createElement('div');
  divMainColumn.setAttribute('class', 'main-column');
  const divDrawingCanvas = document.createElement('div');
  divDrawingCanvas.setAttribute('class', 'drawing-canvas-container');
  const divCanvasContainerMain = document.createElement('div');
  const canvas128 = document.createElement('canvas');
  divCanvasContainerMain.setAttribute('class', 'canvas-background-draw');
  canvas128.setAttribute('id', 'mycanvas');
  // canvas128.setAttribute('width', '128');
  // canvas128.setAttribute('height', '128');

  divDrawingCanvas.append(divCanvasContainerMain);
  divDrawingCanvas.append(canvas128);
  divMainColumn.append(divDrawingCanvas);
  centerSection.append(divMainColumn);

  // right column
  const divRightColumn = document.createElement('div');
  divRightColumn.setAttribute('class', 'right-column');
  const divAnimatedPreview = document.createElement('div');
  divAnimatedPreview.setAttribute('class', 'animated-preview-container');

  const divMiniMapCanvas = document.createElement('div');
  const div = document.createElement('div');
  divMiniMapCanvas.setAttribute('class', 'mini-map-canvas');
  const divBackgroundMiniMap = document.createElement('div');
  const divRepeatMiniMap = document.createElement('div');
  divBackgroundMiniMap.setAttribute('class', 'canvas-background-mini');
  divRepeatMiniMap.setAttribute('class', 'repeat-mini-map');

  divMiniMapCanvas.append(divBackgroundMiniMap);
  divMiniMapCanvas.append(divRepeatMiniMap);
  divAnimatedPreview.append(divMiniMapCanvas);

  const spanFPS = document.createElement('span');
  const inputFPS = document.createElement('input');
  spanFPS.setAttribute('class', 'number-FPS');
  spanFPS.textContent = '2 FPS';
  inputFPS.setAttribute('type', 'range');
  inputFPS.setAttribute('class', 'range-FPS');
  inputFPS.setAttribute('min', '0');
  inputFPS.setAttribute('max', '24');
  inputFPS.setAttribute('value', '2');

  div.append(spanFPS);
  div.append(inputFPS);
  divAnimatedPreview.append(div);
  const divWrapperScreen = document.createElement('div');
  const divScreen = document.createElement('div');
  divScreen.setAttribute('class', 'full-screen');
  divScreen.textContent = 'Full Screen';

  divWrapperScreen.append(divScreen);
  divAnimatedPreview.append(divWrapperScreen);
  divRightColumn.append(divAnimatedPreview);
  centerSection.append(divRightColumn);

  wrapperMain.append(centerSection);

  // // right section
  const settingArray = ['resize', 'export'];
  for (let i = 0; i < settingArray.length; i += 1) {
    const divset = document.createElement('div');
    divset.setAttribute('class', `${settingArray[i]}`);
    if (i === 0) {
      const sizeArray = ['size32', 'size64', 'size128'];
      const contentArray = ['32x32', '64x64', '128x128'];
      for (let j = 0; j < sizeArray.length; j += 1) {
        const size = document.createElement('span');
        if (j === 0) {
          size.setAttribute('class', `${sizeArray[j]} active-gold`);
        } else {
          size.setAttribute('class', `${sizeArray[j]}`);
        }
        size.textContent = `${contentArray[j]}`;
        divset.append(size);
      }
    }
    if (i === 1) {
      const sizeArray = ['apng', 'gif'];
      const contentArray = ['export as .apng', 'export as .gif'];
      for (let h = 0; h < sizeArray.length; h += 1) {
        const spanexport = document.createElement('span');
        spanexport.setAttribute('class', `${sizeArray[h]}`);
        spanexport.textContent = `${contentArray[h]}`;
        divset.append(spanexport);
      }
    }
    rightSection.append(divset);
  }
  const keyboard = document.createElement('span');
  keyboard.setAttribute('class', 'keyboard');
  rightSection.append(keyboard);

  divMainColumn.append(rightSection);
  document.body.appendChild(wrapperMain);
  
  // keyboard shortcuts
  const keyshow = document.createElement('div');
  keyshow.setAttribute('class', 'wrapper-keyboard-shortcuts display-none');
  const nameh2 = document.createElement('h2');
  const changeKeys = document.createElement('div');
  nameh2.setAttribute('class', 'name-shortcuts');
  changeKeys.setAttribute('class', 'wrapper-change-shortcuts');

  const spanh2 = document.createElement('span');
  spanh2.setAttribute('class', 'name-keyboard');
  spanh2.textContent = 'Keyboard shortcuts';
  const spanClose = document.createElement('span');
  spanClose.setAttribute('class', 'close-keyboard');
  spanClose.textContent = 'x';
  nameh2.append(spanh2);
  nameh2.append(spanClose);

  const nameTools = document.createElement('h2');
  nameTools.setAttribute('class', 'shortcuts-main-text');
  nameTools.textContent = 'Tool shortcuts';
  changeKeys.append(nameTools);
  const ulTools = document.createElement('ul');

  const DESCRIPTIONS = ['Pen tool', 'Paint bucket tool', 'Eraser pen tool', 'Stroke tool', 'Color picker', 'Bucket all tool'];
  const KEY_EDIT = ['q', 'w', 'e', 'r', 't', 'y'];
  for (let i = 0; i < toolsArr.length; i += 1) {
    const liKey = document.createElement('li');
    liKey.setAttribute('class', `${toolsArr[i]}-key liRow`);

    const divImage = document.createElement('div');
    divImage.setAttribute('class', `tool-icon ${toolsArr[i]}-key-image`);
    const spanKey = document.createElement('span');
    spanKey.setAttribute('class', `shortcut-edit ${toolsArr[i]}-key-edit`);
    spanKey.textContent = `${KEY_EDIT[i]}`
    const spanText = document.createElement('span');
    spanText.setAttribute('class', 'description-text');
    spanText.textContent = `${DESCRIPTIONS[i]}`;

    liKey.append(divImage);
    liKey.append(spanKey);
    liKey.append(spanText);

    ulTools.append(liKey);
  }

  changeKeys.append(ulTools);
  keyshow.append(nameh2);
  keyshow.append(changeKeys);
  document.body.appendChild(keyshow);
  return 'done';
}

module.exports = {
  createHtml,
};
