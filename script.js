let txtColor = document.getElementById('txt-col');
let bgColor = document.getElementById('bg-col');
let preview = document.getElementById('prev');
let contrRef = document.getElementById('contr');
let rating = document.getElementById('rate');

function hexToRGB(hex) {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  return [r, g, b];
}

let contrCheck = () => {
  let txtColorval = txtColor.value;
  let txtColorrgbarr = hexToRGB(txtColorval);
  
  let bgColorval = bgColor.value;
  let bgColorrgbarr = hexToRGB(bgColorval);
}

txtColor.addEventListener('input', contrCheck);
bgColor.addEventListener('input', contrCheck);
window.addEventListener('load', contrCheck);