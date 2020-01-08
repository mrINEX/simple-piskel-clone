// resize canvas
function resizeCanvas(target) {
  const resizeList = document.querySelector('.resize');
  const hasActive = document.querySelectorAll('.pencil, .eraser, .stroke');
  for (let i = 0; i < resizeList.children.length; i += 1) {
    resizeList.children[i].classList.remove('active-gold');
  }
  for (let i = 0; i < hasActive.length; i += 1) {
    if (hasActive[i].hasAttribute('style')) {
      let tool = hasActive[i].className;
      if (target.classList[0] === 'size32') {
        target.classList.add('active-gold');
        tool += '(8, currentColor[0])';
        return [tool, 8];
      }
      if (target.classList[0] === 'size64') {
        target.classList.add('active-gold');
        tool += '(4, currentColor[0])';
        return [tool, 4];
      }
      if (target.classList[0] === 'size128') {
        target.classList.add('active-gold');
        tool += '(2, currentColor[0])';
        return [tool, 2];
      }
    }
  }
}

// set current color
function setCurrentColor() {
  const hasActive = document.querySelectorAll('.pencil, .bucket, .stroke, .bucketall');
  for (let i = 0; i < hasActive.length; i += 1) {
    if (hasActive[i].hasAttribute('style')) {
      let tool = hasActive[i].className;
      if (hasActive[i].classList[0] === 'bucket' || hasActive[i].classList[0] === 'bucketall') {
        tool += '(currentColor[0])';
        return tool;
      }
      tool += '(data, currentColor[0])';
      return tool;
    }
  }
}

// size canvas
function currentSizeCanvas() {
  const resizeList = document.querySelector('.resize');
  for (let i = 0; i < resizeList.children.length; i += 1) {
    if (resizeList.children[i].classList[1] !== undefined) {
      if (resizeList.children[i].classList[0] === 'size32') {
        return 8;
      }
      if (resizeList.children[i].classList[0] === 'size64') {
        return 4;
      }
      if (resizeList.children[i].classList[0] === 'size128') {
        return 2;
      }
    }
  }
}

// mark active tile canvas
function markActiveTile(target, canvasHistory) {
  target.parentElement.parentElement.setAttribute('class', 'preview-tile li-selected');
  const canvasMain = document.getElementById('mycanvas');
  const ctx = canvasMain.getContext('2d');
  ctx.clearRect(0, 0, canvasMain.width, canvasMain.height);

  const liSelected = document.getElementsByClassName('li-selected');
  const dataURL = canvasHistory[liSelected[0].id];
  const img = new Image();
  img.src = dataURL;
  img.onload = () => {
    ctx.drawImage(img, 0, 0, canvasMain.width, canvasMain.height);
  };
}

// remove active frame
function removeActiveFrame() {
  const elements = document.querySelectorAll('.preview-tile');
  for (let i = 0; i < elements.length; i += 1) {
    elements[i].setAttribute('class', 'preview-tile');
  }
  return 'done';
}

// remove active tool
function removeActiveTool(target) {
  const tools = document.querySelector('.tools').children;
  for (let i = 0; i < tools.length; i += 1) {
    tools[i].removeAttribute('style');
  }
  target.setAttribute('style', 'border:3px solid gold;margin: 10px -2px;');
}

// bucket
function getPixel(imageData, x, y) {
  if (x < 0 || y < 0 || x >= imageData.width || y >= imageData.height) {
    return [-1, -1, -1, -1];
  }
  const offset = (y * imageData.width + x) * 4;
  return imageData.data.slice(offset, offset + 4);
}

function setPixel(imageData, x, y, color) {
  const offset = (y * imageData.width + x) * 4;
  imageData.data[offset + 0] = color[0];
  imageData.data[offset + 1] = color[1];
  imageData.data[offset + 2] = color[2];
  imageData.data[offset + 3] = color[0];
}

function colorsMatch(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

function floodFill(ctx, x, y, fillColor) {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const targetColor = getPixel(imageData, x, y);
  if (!colorsMatch(targetColor, fillColor)) {
    fillPixel(imageData, x, y, targetColor, fillColor);
    ctx.putImageData(imageData, 0, 0);
  }
}

function fillPixel(imageData, x, y, targetColor, fillColor) {
  const currentColor = getPixel(imageData, x, y);
  if (colorsMatch(currentColor, targetColor)) {
    setPixel(imageData, x, y, fillColor);
    fillPixel(imageData, x + 1, y, targetColor, fillColor);
    fillPixel(imageData, x - 1, y, targetColor, fillColor);
    fillPixel(imageData, x, y + 1, targetColor, fillColor);
    fillPixel(imageData, x, y - 1, targetColor, fillColor);
  }
}

// draw stroke
function drawline(x0, y0, x1, y1, size, color) {
  const canvas = document.getElementById('mycanvas');
  const context = canvas.getContext('2d');
  context.fillStyle = color;
  const pxl = size;

  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);
  const sx = (x0 < x1) ? 1 : -1;
  const sy = (y0 < y1) ? 1 : -1;
  let err = dx - dy;

  while (true) {
    context.fillRect(Math.floor(x0 / pxl) * pxl, Math.floor(y0 / pxl) * pxl, pxl, pxl); // setPixel(x0, y0);
    if ((x0 === x1) && (y0 === y1)) break;
    const e2 = 2 * err;
    if (e2 > -dy) { err -= dy; x0 += sx; }
    if (e2 < dx) { err += dx; y0 += sy; }
  }
}

module.exports = {
  removeActiveTool,
  floodFill,
  drawline,
  removeActiveFrame,
  markActiveTile,
  currentSizeCanvas,
  setCurrentColor,
  resizeCanvas,
};
