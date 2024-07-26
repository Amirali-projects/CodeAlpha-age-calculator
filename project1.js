
let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    console.log("Generate random color");

    let heading=document.querySelector("h1");
   let randomcolor=getrandomcolor();
   heading.innerText=randomcolor;
   console.log("color updated");
   let box=document.querySelector("div");
box.style.backgroundColor=getrandomcolor();
})

   
function getrandomcolor(){
let red=Math.floor(Math.random()*255);
let green=Math.floor(Math.random()*255);
let blue=Math.floor(Math.random()*255);
let color=`rgb(${red}, ${green}, ${blue})`;
return color;
}
