import lodash from 'lodash';

function component() {
  var element = document.createElement('div');
  element.innerHTML = lodash.join(['Hello', 'webpack'], ' ');
  element.classList.add('color');
  return element;
}

document.body.appendChild(component());