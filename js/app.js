/**=====================================ABOUT PAGE                         */
if (document.querySelector('#about .block')) {
  blueElement('#about .block');
}
if (document.querySelector('#about .block2')) {
  blueElement('#about .block2');
}

if (document.querySelector('#benifist .header')) {
  blueElement('#benifist .header')
  document.querySelector('#benifist .blue_block').style.right = '100px';
}

if (document.querySelector('#team .header')) {
  blueElement('#team .header')
  document.querySelector('#team .blue_block').style.right = '110px';
}


/**                           MAIN PAGE SCRIPT                                     */
if (document.querySelector('.description')) {
  blueElement('.description');
}

if (document.querySelector('#attainment .header')) {
  blueElement('#attainment .header');
  document.querySelector('#attainment .blue_block').style.right = '100px';
}


if (document.querySelector('#portfolio .header')) {
  blueElement('#portfolio .header');
  document.querySelector('#portfolio .blue_block').style.right = '100px';
}
/**======================================SERVICE PAGE================================= */
if (document.querySelector('#what_we_do .header')) {
  blueElement('#what_we_do .header');
  document.querySelector('#what_we_do .blue_block').style.right = '75px';
}

if (document.querySelector('#our_pros .block')) {
  blueElement('#our_pros .block');
  document.querySelector('#our_pros .blue_block').style.left = '13px';
  document.querySelector('#our_pros .blue_block').style.top = '0px';
}

if (document.querySelector('#our_pros .block2')) {
  blueElement('#our_pros .block2');
  document.querySelector('#our_pros .block2 .blue_block').style.left = '27px';
  document.querySelector('#our_pros .block2  .blue_block').style.top = '5px';
}

if (document.querySelector('#our_pros .block3')) {
  blueElement('#our_pros .block3');
  document.querySelector('#our_pros .block3 .blue_block').style.left = '27px';
  document.querySelector('#our_pros .block3  .blue_block').style.top = '-5px';
}

if (document.querySelector('#our_pros .block4')) {
  blueElement('#our_pros .block4');
  document.querySelector('#our_pros .block4 .blue_block').style.left = '20px';
  document.querySelector('#our_pros .block4  .blue_block').style.top = '0px';
}

if (document.querySelector('#pricing_plans .header')) {
  blueElement('#pricing_plans .header');
  document.querySelector('#pricing_plans .blue_block').style.right = '88px';
}

if (document.querySelectorAll('#pricing_plans .check_icon2 li')) {
  let array = document.querySelectorAll('#pricing_plans .check_icon2 li');
  for (let item of array) {
    item.style.position = 'relative';
    item.style.bottom = '23px';
    item.style.left = '20px';
  }
}





