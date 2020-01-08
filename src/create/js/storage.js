function setStorage(canvasHistory, currentColor) {
  if (localStorage.getItem('canvasHistory') !== null) {
    const storageArray = localStorage.getItem('canvasHistory').split('|');
    const ulList = document.querySelector('.preview-list');
    for (let i = 0; i < storageArray.length; i += 1) {
      const node = document.querySelector('.preview-tile').cloneNode(true);
      node.classList.remove('li-selected');
      canvasHistory[i] = storageArray[i];
      const ctx = node.children[0].children[1].getContext('2d');
      const img = new Image();
      img.src = canvasHistory[i];
      img.onload = () => {
        ctx.drawImage(img, 0, 0, 96, 96);
      };
      if (i === 0) {
        node.classList.add('li-selected');
      }
      ulList.children[ulList.children.length - 2].after(node);
      if (i === 0) {
        ulList.children[0].remove();
      }
    }
  }

  const storageColor = localStorage.getItem('currentColor');
  if (storageColor !== null) {
    currentColor[0] = storageColor;
  }
  document.querySelector('.left-mouse').value = storageColor;
  return 'done';
}

module.exports = {
  setStorage,
};
