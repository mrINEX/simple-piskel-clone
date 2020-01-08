function clearCanvas() {
  const canvasMain = document.getElementById('mycanvas');
  const ctx = canvasMain.getContext('2d');
  ctx.clearRect(0, 0, canvasMain.width, canvasMain.height);
}

function updateIndex() {
  const ulList = document.querySelector('.preview-list');
  for (let i = 0; i < ulList.childNodes.length - 1; i += 1) {
    ulList.childNodes[i].children[4].textContent = i + 1;
    ulList.childNodes[i].id = i;
  }
  return 'done';
}

function duplicateFrame(target, canvasHistory) {
  const node = target.parentNode.cloneNode(true);
  node.setAttribute('class', 'preview-tile li-selected');
  const ctx = node.children[0].children[1].getContext('2d');
  const img = new Image();
  img.src = canvasHistory[target.parentNode.id];
  img.onload = () => {
    ctx.drawImage(img, 0, 0, node.children[0].children[1].width, node.children[0].children[1].height);
  };
  const copy = canvasHistory[target.parentNode.id];
  canvasHistory.splice(target.parentNode.id, 0, copy);
  target.parentNode.after(node);
}

function deleteButton(target, canvasHistory) {
  if (target.parentNode.classList[1] === 'li-selected') {
    if (target.parentNode.parentNode.children.length > 2) {
      target.parentNode.remove();
      const ulList = document.querySelector('.preview-list');
      ulList.children[0].setAttribute('class', 'preview-tile li-selected');

      const canvasMain = document.getElementById('mycanvas');
      const ctx = canvasMain.getContext('2d');
      ctx.clearRect(0, 0, canvasMain.width, canvasMain.height);

      const img = new Image();
      img.src = canvasHistory[ulList.children[0].id];
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvasMain.width, canvasMain.height);
      };
      canvasHistory.splice(target.parentNode.id, 1);

      for (let i = 0; i < ulList.childNodes.length - 1; i += 1) {
        ulList.childNodes[i].children[4].textContent = i + 1;
        ulList.childNodes[i].id = i;
      }
    }
  } else {
    target.parentNode.remove();
    canvasHistory.splice(target.parentNode.id, 1);
    const ulList = document.querySelector('.preview-list');
    for (let i = 0; i < ulList.childNodes.length - 1; i += 1) {
      ulList.childNodes[i].children[4].textContent = i + 1;
      ulList.childNodes[i].id = i;
    }
  }
}

function addFrame(canvasHistory) {
  const ulList = document.querySelector('.preview-list');
  const cloneFrame = ulList.childNodes[ulList.childNodes.length - 2].cloneNode(true);
  cloneFrame.childNodes[4].textContent = `${ulList.childNodes.length}`;
  cloneFrame.setAttribute('id', `${ulList.childNodes.length - 1}`);
  cloneFrame.setAttribute('class', 'preview-tile li-selected');
  ulList.childNodes[ulList.childNodes.length - 2].after(cloneFrame);
  canvasHistory.push(cloneFrame.children[0].children[1].toDataURL());
}

function activeSize(target) {
  const toolsSize = document.querySelector('.tools-size');
  for (let i = 0; i < toolsSize.children.length; i += 1) {
    toolsSize.children[i].classList.remove('active-gold');
  }
  target.classList.add('active-gold');
}

let i = 0;
function animation(canvasHistory) {
  document.querySelector('.repeat-mini-map').setAttribute('style', `background-image: url(${canvasHistory[i % canvasHistory.length]});background-repeat:no-repeat;`);
  i += 1;
  return 'done';
}

module.exports = {
  clearCanvas,
  updateIndex,
  duplicateFrame,
  deleteButton,
  addFrame,
  activeSize,
  animation,
};
