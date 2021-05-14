/**BlueElement - make blue element for section title */

function blueElement(div_out) {
  let div = document.createElement('div');
  div.classList.add('blue_block')
  return document.querySelector(div_out).prepend(div);
}
//console.log(document.querySelector('.description h4'));

/**================================MENU======================================= */


