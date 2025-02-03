const resButton = document.querySelector("#resize");
const screen = document.querySelector('#screen');
//const rowCount = 16;
let square = document.createElement("div");
square.setAttribute("class",'square');

/* create function to change resolution
create function to load squares
create function to color pixels
create function to add event listeners */



function insertSquares(dim){
    //clear the screen
    while (screen.firstChild){
        screen.removeChild(screen.firstChild);
    }

    let screenSize = 400 //make this dynamic later
    

    screen.appendChild(square);
    

    for (let i=1; i<dim**2;i++){
        screen.appendChild(square.cloneNode());
    }

    let squareList = document.querySelectorAll(".square")

    squareList.forEach((square)=>{
        let squareSize = screenSize/dim;
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
    });

};
function darken(square){
    let opacity = square.style.opacity;
    

    if (opacity < 1){
        square.style.opacity += 1;
        console.log(`triggered, opacity changed`);
    } else {
    console.log(`triggered, opacity is at max `);}
} 

insertSquares(4);

resButton.addEventListener("click",()=>{
    let size = prompt("How many squares?")
    //add code to validate its an integer and cap at 100
    while (Number.isNaN(size) = false && size >= 100){
        size = prompt("invalid, enter an integer between 1 and 100")
    };
    insertSquares(size)
});
/* 
This isnt working to progressively darken, does not re-read opacity
function readOpacity(square){
    let opacity = square.style.opacity;
    return opacity
};

function darken(square){
    let opacity = readOpacity(square);
    

    if (opacity < 1){
        square.style.opacity += .1;
        console.log(`triggered, opacity is now ${opacity}`);
    } else {
    console.log(`triggered, opacity is at max ${opacity}`);}
} */

//square.addEventListener("mouseover",()=>{darken(square)});