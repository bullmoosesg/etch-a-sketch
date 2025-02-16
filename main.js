const resizeButton = document.querySelector("#resize");
const screen = document.querySelector('#screen');
let square = document.createElement("div");
square.setAttribute("class",'square');
const resetButton = document.querySelector('#resetButton');
const modeRadio = document.querySelectorAll('input');
const rgbRadio = document.querySelector('#rgb');
const stdRadio = document.querySelector('#standard');
const progRadio = document.querySelector('#progressive')

//fisrt square is keeping all 3 event listners. need to fix

resetButton.addEventListener('click',()=>{
        clearScreen();
    }
)


function modeSwitch(){

    let squareList = document.querySelectorAll('.square');
    let resolution = Math.sqrt(squareList.length)

    insertSquares(resolution)   
}

for (const r of modeRadio){
    r.addEventListener("click",modeSwitch)
}
        
function insertSquares(dim){
    
    square.style.opacity = 0;
 
    while (screen.firstChild){
        screen.removeChild(screen.firstChild);
    }

    let screenSize = 400 //make this dynamic later
    
    let selectedMode 
    for (const r of modeRadio){
        if (r.checked == true){
            selectedMode = r.id;
            }
    }
    
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

    resetlisteners(selectedMode);
};

insertSquares(4);

function clearScreen(){
    let allSquares = document.querySelectorAll('.square');
    for (const s of allSquares){
        s.style.opacity = 0;
    }
}

/* function removeListeners(){
    let squareSet = document.querySelectorAll(".square");
   // let fnParameter = squareSet(0).eventListener;
    for (const s of squareSet){
        s.removeEventListener('click',()=>{progDarken(s)});
    } 
} */

resizeButton.addEventListener("click",()=>{
    let size = prompt("How many squares?")
    //add code to validate its an integer and cap at 100
    //while (Number.isNaN(size) = false && size >= 100){
    //    size = prompt("invalid, enter an integer between 1 and 100")
    //};
    insertSquares(size)
});


function readOpacity(square){
    let opacityVal = square.style.opacity;
    if (opacityVal == ""){
        opacityVal === 0 
    }
    return +opacityVal

};



function darken(square){
    let opacity = square.style.opacity;

    if (opacity < 1){
        square.style.opacity += 1;
    } 
}


function progDarken(square){

    let opacity = readOpacity(square);
    if (opacity < 1){
        square.style.opacity = opacity + .1;
    } 
} 

function randColor(){
    const colors = ["blue","red","green","purple", "yellow", "teal"];
    let pick = Math.round(Math.random()*5);
    let output = colors[pick];
    return output;
}

/* function randHue(){
    let pick = Math.round(Math.random()*35)*10
    return pick
} */

function rgbDarken(square){
    let opacity = square.style.opacity;
    let color = randColor();
    //let hue = randHue();
    if (opacity < 1){
        square.style.backgroundColor = color
        //square.style.backgroundColor = `hsl(${hue},100,50)`
        square.style.opacity += 1;
    } 

    
}

function resetlisteners(mode){
    let squareSet = document.querySelectorAll(".square");

    switch(mode){
        case 'progressive' :
            for (const s of squareSet){
                s.addEventListener("mouseover",()=>{progDarken(s)})
                };
            break;
        case 'rgb' :
            for (const s of squareSet){
                s.addEventListener("mouseover",()=>{rgbDarken(s)})
            };
            break;
        case 'standard':
            for (const s of squareSet){
                s.addEventListener("mouseover",()=>{darken(s)})
            };
            break;
}}
