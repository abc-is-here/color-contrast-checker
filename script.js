let txtColor = document.getElementById("txt-col");
let bgColor = document.getElementById("bg-col");
let preview = document.getElementById("prev");
let contrRef = document.getElementById("contr");
let rating = document.getElementById("rate");

let getRelativeLuminance = (color) => {
  const rgb = color.map((val) => {
    const s = (val /= 255);
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
};

let calcRatio = (txtColor, bgColor) => {
  const luminance1 = getRelativeLuminance(txtColor);
  const luminance2 = getRelativeLuminance(bgColor);

  const lg = Math.max(luminance1, luminance2);
  const dk = Math.min(luminance1, luminance2);
  const contrast = (lg + 0.05) / (dk + 0.05);

  return contrast;
};

function hexToRGB(hex) {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  return [r, g, b];
}

let checkRate = (contrast) => {
  if (contrast > 12) {
    rating.style.backgroundColor = "green";
    return "Awesome!!";
  } 
  else if (contrast > 7) {
    rating.style.backgroundColor = "yellow";
    return "Nice!!";
  } 
  else if (contrast > 5) {
    rating.style.backgroundColor = "orange";
    return "Can be improved!!";
  } 
  else if (contrast > 3) {
    rating.style.backgroundColor = "red";
    return "Please change it!!";
  } 
  else {
    rating.style.backgroundColor = "black";
    rating.style.color = "white";
    return "Very bad!!";
  }
};

let contrCheck = () => {
  let txtColorval = txtColor.value;
  let txtColorrgbarr = hexToRGB(txtColorval);

  let bgColorval = bgColor.value;
  let bgColorrgbarr = hexToRGB(bgColorval);

  const contrast = calcRatio(txtColorrgbarr, bgColorrgbarr);
  
  contrRef.innerHTML = contrast.toFixed(2);
  rating.innerText = checkRate(contrast);
  preview.style.color = txtColorval;
  preview.style.backgroundColor = bgColorval;
};
txtColor.addEventListener("input", contrCheck);
bgColor.addEventListener("input", contrCheck);
window.addEventListener("load", contrCheck);