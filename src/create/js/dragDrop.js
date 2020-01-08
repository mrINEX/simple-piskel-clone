let dragged;
let id;
let index;
let indexDrop;
let list;
const { canvasHistory } = require('./canvasTools');

function drag({ target }) {
  dragged = target;
  id = target.id;
  list = target.parentNode.children;
  for (let i = 0; i < list.length; i += 1) {
    if (list[i] === dragged) {
      index = i;
    }
  }
}

function drop({ target }) {
  if (target.parentElement.parentElement.classList[0] === 'preview-tile' && target.parentElement.parentElement.id !== id) {
    dragged.remove(dragged);
    for (let i = 0; i < list.length; i += 1) {
      if (list[i] === target.parentElement.parentElement) {
        indexDrop = i;
      }
    }
    if (index > indexDrop) {
      target.parentElement.parentElement.before(dragged);
    } else {
      target.parentElement.parentElement.after(dragged);
    }

    // swap frame
    const del = canvasHistory.splice(dragged.id, 1);
    canvasHistory.splice(target.parentElement.parentElement.id, 0, String(del));
    const ulList = document.querySelector('.preview-list');
    for (let i = 0; i < ulList.childNodes.length - 1; i += 1) {
      ulList.childNodes[i].children[4].textContent = i + 1;
      ulList.childNodes[i].id = i;
    }
  }
}

module.exports = {
  drag,
  drop,
};
