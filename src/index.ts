const btn = document.querySelector("button");

const makeColor = (): string => {
  let pattern: string = "#xxxxxx";
const hexDidgets = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
while(pattern.includes("x")){

  pattern = pattern.replace("x",hexDidgets[Math.floor(Math.random() *  hexDidgets.length)]);

}

return pattern;
};
btn?.addEventListener("click", () => {
  const color = makeColor();
  const colorDisplay = document.querySelector("#colorstr")
  if(colorDisplay != null){

    colorDisplay.innerHTML = color
  }
  console.log(color)
  document.body.style.backgroundColor = color;
});
export {};
