const { landingHtml } = require('./landing/landing');
const { createHtml } = require('./create/create');
const {
  pencil, eraser, bucket, stroke, picker, bucketall, canvasHistory,
} = require('./create/js/canvasTools');
const {
  removeActiveTool, removeActiveFrame, markActiveTile, currentSizeCanvas, setCurrentColor, resizeCanvas,
} = require('./create/js/functions');
const { fullScreen } = require('./create/js/fullScreen');
const {
  clearCanvas, updateIndex, duplicateFrame, deleteButton, addFrame, activeSize, animation,
} = require('./create/js/littlefunctions');
const { drag, drop } = require('./create/js/dragDrop');
const { setStorage } = require('./create/js/storage');
const { createGif } = require('./create/js/savegif');
const { createApng } = require('./create/js/saveapng');
const { changeKey } = require('./create/js/changekey');

if (window.location.pathname === '/') {
  landingHtml();
} else {
  createHtml();

  let stopInterval;
  const currentColor = ['#ff0000'];
  let size = 8;

  // run local storage
  setStorage(canvasHistory, currentColor);
  updateIndex();
  pencil(size, currentColor[0]);

  document.querySelector('.repeat-mini-map').addEventListener('dblclick', () => {
    fullScreen();
  });

  document.addEventListener('keyup', ({code}) => {
    if (code === 'KeyQ') {
      removeActiveTool(document.querySelector('.pencil'));
      pencil(size, currentColor[0]);
    }
    if (code === 'KeyW') {
      removeActiveTool(document.querySelector('.bucket'));
      bucket(currentColor[0]);
    }
    if (code === 'KeyE') {
      removeActiveTool(document.querySelector('.eraser'));
      eraser(size);
    }
    if (code === 'KeyR') {
      removeActiveTool(document.querySelector('.stroke'));
      stroke(size, currentColor[0]);
    }
    if (code === 'KeyT') {
      removeActiveTool(document.querySelector('.picker'));
      picker(currentColor);
    }
    if (code === 'KeyY') {
      removeActiveTool(document.querySelector('.bucketall'));
      bucketall(currentColor[0]);
    }
  })

  document.querySelector('.left-mouse').addEventListener('input', ({ target }) => {
    currentColor[0] = target.value;
    const data = currentSizeCanvas();
    eval(setCurrentColor());
  });

  document.querySelector('.range-FPS').addEventListener('input', ({ target }) => {
    document.querySelector('.number-FPS').textContent = `${target.value} FPS`;
    clearInterval(stopInterval);
    if (target.value > 0) {
      stopInterval = setInterval(() => {
        animation(canvasHistory);
      }, 1000 / target.value);
    }
  });

  document.addEventListener('click', ({ target }) => {
    if (target.classList[1] === 'liRow') {
      changeKey('new', target);
    }
    if (target.className === 'keyboard') {
      document.querySelector('.wrapper-keyboard-shortcuts').classList.remove('display-none');
    }
    if (target.className === 'close-keyboard') {
      document.querySelector('.wrapper-keyboard-shortcuts').classList.add('display-none');
    }
    if (target.className === 'gif') {
      createGif();
    }
    if (target.className === 'apng') {
      createApng();
    }
    if (target.parentNode.className === 'tools-size') {
      activeSize(target);
    }
    if (target.className === 'full-screen') {
      fullScreen();
    }
    if (target.parentNode.className === 'resize') {
      const dataCurrent = resizeCanvas(target);
      size = dataCurrent[1];
      eval(dataCurrent[0]);
    }
    if (target.parentNode.className === 'add-frame-action' || target.className === 'add-frame-action') {
      removeActiveFrame();
      addFrame(canvasHistory);
      clearCanvas();
    }
    if (target.className === 'pencil') {
      removeActiveTool(target);
      pencil(size, currentColor[0]);
    }
    if (target.className === 'bucket') {
      removeActiveTool(target);
      bucket(currentColor[0]);
    }
    if (target.className === 'eraser') {
      removeActiveTool(target);
      eraser(size);
    }
    if (target.className === 'stroke') {
      removeActiveTool(target);
      stroke(size, currentColor[0]);
    }
    if (target.className === 'picker') {
      removeActiveTool(target);
      picker(currentColor);
    }
    if (target.className === 'bucketall') {
      removeActiveTool(target);
      bucketall(currentColor[0]);
    }
    if (target.className === 'tile-view-canvas') {
      removeActiveFrame();
      markActiveTile(target, canvasHistory);
    }
    if (target.classList[1] === 'delete-button') {
      deleteButton(target, canvasHistory);
    }
    if (target.classList[1] === 'clone-button') {
      removeActiveFrame();
      duplicateFrame(target, canvasHistory);
      updateIndex();
    }
  });

  // start animation 2 FPS
  stopInterval = setInterval(() => {
    animation(canvasHistory);
  }, 1000 / 2);

  // drag and drop
  document.addEventListener('dragstart', drag);
  document.addEventListener('dragover', (event) => {
    event.preventDefault();
  });
  document.addEventListener('drop', drop);

  // before unload
  window.onbeforeunload = () => {
    localStorage.setItem('canvasHistory', canvasHistory.join('|'));
    localStorage.setItem('currentColor', currentColor[0]);
    return false;
  };
}
