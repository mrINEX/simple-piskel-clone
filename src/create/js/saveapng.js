const UPNG = require('upng-js');
const download = require('downloadjs');

function createApng() {
  const buffer = [];
  const currentFps = document.querySelector('.range-FPS').value;
  const ulList = document.querySelector('.preview-list');
  const dels = Array(ulList.children.length - 1).fill(1000 / currentFps);

  for (let i = 0; i < ulList.children.length - 1; i += 1) {
    const ctx = ulList.children[i].children[0].children[1].getContext('2d');
    const imageData = ctx.getImageData(0, 0, 96, 96);
    buffer.push(imageData.data.buffer);
  }
  const res = UPNG.encode(buffer, 96, 96, 0, dels);
  download(res, 'download.png', 'png');
}

module.exports = {
  createApng,
};
