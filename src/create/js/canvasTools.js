const { floodFill, drawline } = require('./functions');

const canvasHistory = [''];
const remove = [];
//const currentColor = ['#ff0000'];
//let size = 8;

function pencil(size, color) {
  const canvas = document.getElementById('mycanvas');
  const context = canvas.getContext('2d');
  canvas.removeEventListener('mousedown', remove[0]);
  canvas.removeEventListener('mousemove', remove[1]);
  canvas.removeEventListener('mouseup', remove[2]);
  canvas.width = 256;
  canvas.height = 256;
  const pxl = size; // 32x32 [8] 64x64 [4] 128x128 [2]
  context.fillStyle = color;
  let isDrawing = false;
  const liSelectedpen = document.getElementsByClassName('li-selected');
  const dataURL = canvasHistory[liSelectedpen[0].id];
  const img = new Image();
  img.src = dataURL;
  img.onload = () => {
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
  };

  const pencilmousedown = ({ layerX, layerY }) => {
    console.log('<pencil>');
    context.fillRect(Math.floor(layerX / pxl) * pxl, Math.floor(layerY / pxl) * pxl, pxl, pxl);
    isDrawing = true;
  };
  const pencilmousemove = ({ layerX, layerY }) => {
    if (isDrawing === true) {
      // drawline(layerX, layerY, layerX, layerY);
      context.fillRect(Math.floor(layerX / pxl) * pxl, Math.floor(layerY / pxl) * pxl, pxl, pxl);
    }
  };
  const pencilmouseup = () => {
    const liSelectedup = document.getElementsByClassName('li-selected');
    canvasHistory[liSelectedup[0].id] = canvas.toDataURL(); // set array
    const dataURLpen = canvasHistory[liSelectedup[0].id];
    const canvasFrame = liSelectedup[0].children[0].children[1]; // set frame
    const ctx = canvasFrame.getContext('2d');
    const imgpen = new Image();
    imgpen.src = dataURLpen;
    imgpen.onload = () => {
      ctx.drawImage(imgpen, 0, 0, canvasFrame.width, canvasFrame.height);
    };
    if (isDrawing === true) {
      isDrawing = false;
    }
  };
  canvas.addEventListener('mousedown', pencilmousedown);
  canvas.addEventListener('mousemove', pencilmousemove);
  canvas.addEventListener('mouseup', pencilmouseup);
  remove[0] = pencilmousedown;
  remove[1] = pencilmousemove;
  remove[2] = pencilmouseup;
  return 'done';
}

function eraser(size) {
  const canvas = document.getElementById('mycanvas');
  const context = canvas.getContext('2d');
  canvas.removeEventListener('mousedown', remove[0]);
  canvas.removeEventListener('mousemove', remove[1]);
  canvas.removeEventListener('mouseup', remove[2]);
  canvas.width = 256;
  canvas.height = 256;
  const pxl = size; // 32x32 [8] 64x64 [4] 128x128 [2]
  let isDrawing = false;
  const liSelectederaser = document.getElementsByClassName('li-selected');
  const dataURLeraser = canvasHistory[liSelectederaser[0].id];
  const imgeraser = new Image();
  imgeraser.src = dataURLeraser;
  imgeraser.onload = () => {
    context.drawImage(imgeraser, 0, 0, canvas.width, canvas.height);
  };
  const erasermousedown = ({ layerX, layerY }) => {
    console.log('<eraser>');
    context.clearRect(Math.floor(layerX / pxl) * pxl, Math.floor(layerY / pxl) * pxl, pxl, pxl);
    isDrawing = true;
  };
  const erasermousemove = ({ layerX, layerY }) => {
    if (isDrawing === true) {
      context.clearRect(Math.floor(layerX / pxl) * pxl, Math.floor(layerY / pxl) * pxl, pxl, pxl);
    }
  };
  const erasermouseup = () => {
    const liSelected = document.getElementsByClassName('li-selected');
    canvasHistory[liSelected[0].id] = canvas.toDataURL(); // set array
    const dataURL = canvasHistory[liSelected[0].id];
    const canvasFrame = liSelected[0].children[0].children[1]; // set frame
    const ctx = canvasFrame.getContext('2d');
    const img = new Image();
    img.src = dataURL;
    ctx.clearRect(0, 0, canvasFrame.width, canvasFrame.height);
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvasFrame.width, canvasFrame.height);
    };

    if (isDrawing === true) {
      isDrawing = false;
    }
  };
  canvas.addEventListener('mousedown', erasermousedown);
  canvas.addEventListener('mousemove', erasermousemove);
  canvas.addEventListener('mouseup', erasermouseup);
  remove[0] = erasermousedown;
  remove[1] = erasermousemove;
  remove[2] = erasermouseup;
}

function bucket(color) {
  const canvas = document.getElementById('mycanvas');
  const context = canvas.getContext('2d');
  canvas.removeEventListener('mousedown', remove[0]);
  canvas.removeEventListener('mousemove', remove[1]);
  canvas.removeEventListener('mouseup', remove[2]);
  canvas.width = 256;
  canvas.height = 256;
  const liSelectedbucket = document.getElementsByClassName('li-selected');
  const dataURLbucket = canvasHistory[liSelectedbucket[0].id];
  const imgbucket = new Image();
  imgbucket.src = dataURLbucket;
  imgbucket.onload = () => {
    context.drawImage(imgbucket, 0, 0, canvas.width, canvas.height);
  };
  const bucketmousedown = ({ layerX, layerY }) => {
    console.log('<bucket>');
    const rgb = [parseInt(color.substr(1, 2), 16), parseInt(color.substr(3, 2), 16), parseInt(color.substr(5, 2), 16), 255];
    floodFill(context, layerX, layerY, rgb);

    const liSelected = document.getElementsByClassName('li-selected');
    canvasHistory[liSelected[0].id] = canvas.toDataURL(); // set array
    const dataURL = canvasHistory[liSelected[0].id];
    const canvasFrame = liSelected[0].children[0].children[1]; // set frame
    const ctx = canvasFrame.getContext('2d');
    const img = new Image();
    img.src = dataURL;
    ctx.clearRect(0, 0, canvasFrame.width, canvasFrame.height);
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvasFrame.width, canvasFrame.height);
    };
  };
  canvas.addEventListener('mousedown', bucketmousedown);
  remove[0] = bucketmousedown;
}

function stroke(sizeinput, color) {
  const canvas = document.getElementById('mycanvas');
  // const context = canvas.getContext('2d');
  canvas.removeEventListener('mousedown', remove[0]);
  canvas.removeEventListener('mousemove', remove[1]);
  canvas.removeEventListener('mouseup', remove[2]);
  let x0;
  let y0;
  const size = sizeinput;
  const strokemousedown = ({ layerX, layerY }) => {
    console.log('<stroke>');
    x0 = layerX;
    y0 = layerY;
  };
  const strokemouseup = ({ layerX, layerY }) => {
    drawline(x0, y0, layerX, layerY, size, color);

    const liSelected = document.getElementsByClassName('li-selected');
    canvasHistory[liSelected[0].id] = canvas.toDataURL(); // set array
    const dataURL = canvasHistory[liSelected[0].id];
    const canvasFrame = liSelected[0].children[0].children[1]; // set frame
    const ctx = canvasFrame.getContext('2d');
    const img = new Image();
    img.src = dataURL;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvasFrame.width, canvasFrame.height);
    };
  };
  canvas.addEventListener('mousedown', strokemousedown);
  canvas.addEventListener('mouseup', strokemouseup);
  remove[0] = strokemousedown;
  remove[2] = strokemouseup;
}

function picker(arraycolor) {
  const canvas = document.getElementById('mycanvas');
  const context = canvas.getContext('2d');
  canvas.removeEventListener('mousedown', remove[0]);
  canvas.removeEventListener('mousemove', remove[1]);
  canvas.removeEventListener('mouseup', remove[2]);

  const pickermousedown = ({ layerX, layerY }) => {
    console.log('<picker>');
    let intovalue = '#';
    const imgData = context.getImageData(layerX, layerY, 1, 1);
    for (let i = 0; i < 3; i += 1) {
      if (imgData.data[i] === 0) {
        intovalue += '00';
      } else {
        intovalue += imgData.data[i].toString(16);
      }
    }
    arraycolor[0] = intovalue;
    document.querySelector('.left-mouse').value = intovalue;
  };

  canvas.addEventListener('mousedown', pickermousedown);
  remove[0] = pickermousedown;
}

function bucketall(color) {
  const canvas = document.getElementById('mycanvas');
  const context = canvas.getContext('2d');
  context.fillStyle = color;
  canvas.removeEventListener('mousedown', remove[0]);
  canvas.removeEventListener('mousemove', remove[1]);
  canvas.removeEventListener('mouseup', remove[2]);

  const bucketallmousedown = () => {
    console.log('<bucketall>');
    context.fillRect(0, 0, canvas.width, canvas.height);
  };
  const bucketallmouseup = () => {
    const liSelected = document.getElementsByClassName('li-selected');
    canvasHistory[liSelected[0].id] = canvas.toDataURL(); // set array
    const dataURL = canvasHistory[liSelected[0].id];
    const canvasFrame = liSelected[0].children[0].children[1]; // set frame
    const ctx = canvasFrame.getContext('2d');
    const img = new Image();
    img.src = dataURL;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvasFrame.width, canvasFrame.height);
    };
  };

  canvas.addEventListener('mousedown', bucketallmousedown);
  canvas.addEventListener('mouseup', bucketallmouseup);
  remove[0] = bucketallmousedown;
  remove[2] = bucketallmouseup;
}

module.exports = {
  pencil,
  eraser,
  bucket,
  stroke,
  picker,
  bucketall,
  canvasHistory,
};
