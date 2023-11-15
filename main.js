const bgColor = document.getElementById("bgColor");
const color = document.getElementById("color");
const hexColor = document.getElementById("hexColor")

const colorTitle = document.getElementById("colorTitle")

color.addEventListener("input",function () {
      let inputColor = color.value;
      bgColor.style.background = inputColor;   
      colorTitle.style.color = inputColor;
      hexColor.innerText = inputColor
})

bgColor.addEventListener("click", function () {
      navigator.clipboard.writeText (`#${color.value}`)
      
})