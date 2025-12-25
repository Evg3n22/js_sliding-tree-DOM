'use strict';

// write code here
const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const list = e.target.querySelector('ul');

  if (list) {
    list.hidden = !list.hidden;
  }
});
