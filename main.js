let resButton = document.querySelector("#resize");
let screen = document.querySelector('#frame');
let rowCount = 16;
//let square = document.createElement("div");

/* create function to change resolution
create function to load squares
create function to color pixels
create function to add event listeners */

let square = document.createElement("div");
square.setAttribute("class",'square');

screen.appendChild(square);


function darken(square){
    let opacity = square.styles.opacity;

    if (opacity < 1){
        opacity += .1;
    }
}

//square.addEventListener("mouseover",()=>{darken(square)});