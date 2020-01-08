//const { pencil, eraser, bucket, stroke, picker, bucketall } = require('./canvasTools');
//const { removeActiveTool } = require('./functions');
//const { size, currentColor } = require('../../app');

function listenKeyboard() {
    if (event.code === 'KeyQ') {
      removeActiveTool(document.querySelector('.pencil'));
      pencil(size, currentColor[0]);
    }
    if (event.code === 'KeyW') {
      removeActiveTool(document.querySelector('.bucket'));
      bucket(currentColor[0]);
    }
    if (event.code === 'KeyE') {
      removeActiveTool(document.querySelector('.eraser'));
      eraser(size);
    }
    if (event.code === 'KeyR') {
      removeActiveTool(document.querySelector('.stroke'));
      stroke(size, currentColor[0]);
    }
    if (event.code === 'KeyT') {
      removeActiveTool(document.querySelector('.picker'));
      picker(currentColor);
    }
    if (event.code === 'KeyY') {
      removeActiveTool(document.querySelector('.bucketall'));
      bucketall(currentColor[0]);
    }
  }

module.exports = {
    listenKeyboard,
}
