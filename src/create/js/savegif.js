const GIFEncoder = require('gifencoder');
const download = require('downloadjs');

function createGif() {
  const ulList = document.querySelector('.preview-list');
  const currentFps = document.querySelector('.range-FPS').value;
  const encoder = new GIFEncoder(100, 100);
  encoder.start();
  encoder.setRepeat(0);
  encoder.setDelay(1000 / currentFps);
  for (let i = 0; i < ulList.children.length - 1; i += 1) {
    encoder.addFrame(ulList.children[i].children[0].children[1].getContext('2d'));
  }
  encoder.finish();

  const base64Data = btoa(String.fromCharCode.apply(null, encoder.out.getData()));
  const dataUrl = `data:image/gif;base64,${base64Data}`;
  download(dataUrl, 'download.gif', 'gif');
  return 'done';
}

module.exports = {
  createGif,
};
