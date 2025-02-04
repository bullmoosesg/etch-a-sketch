const resizeButton = document.querySelector("#resize");
const screen = document.querySelector('#screen');
let square = document.createElement("div");
square.setAttribute("class",'square');
const resetButton = document.querySelector('#resetButton');
//const modeRadio = document.querySelectorAll(input[name='mode']);

resetButton.addEventListener('click',()=>{
    let allSquares = document.querySelectorAll('.square');
    for (const s of allSquares){
        s.style.opacity = 0;
    }

})

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

    resetlisteners();

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

resizeButton.addEventListener("click",()=>{
    let size = prompt("How many squares?")
    //add code to validate its an integer and cap at 100
    //while (Number.isNaN(size) = false && size >= 100){
    //    size = prompt("invalid, enter an integer between 1 and 100")
    //};
    insertSquares(size)
});


//This isnt working to progressively darken, does not re-read opacity
function readOpacity(square){
    let opacity = square.style.opacity;
    return opacity
};

function progdDarken(square){
    let opacity = readOpacity(square);
    

    if (opacity < 1){
        square.style.opacity += .1;
        console.log(`triggered, opacity is now ${opacity}`);
    } else {
    console.log(`triggered, opacity is at max ${opacity}`);}
} 

function rgbDarken(){

}

function resetlisteners(){
// this line sent chrome into 'Aw Snap Mode'
 //   let mode = document.querySelector('input[name=mode]:checked').value;
    let mode = "standard";
    let squareSet = document.querySelectorAll(".square");
/*     for (const b of modeRadio){
        if (b.checked){
            mode=b.value;
            break;
        }
    }; */
    
    for (const s of squareSet){
        s.addEventListener("mouseover",()=>{
            switch(mode){
                case "standard": 
                    darken(s);
                    break;
                case "progressive":
                    progdDarken(s);
                    break;
                case "rgb":
                    rgbDarken(s);
                    break;
                }
        }
            )
        }
};

  //this works, attempting to add switch
/*function resetlisteners(){
    let squareSet = document.querySelectorAll(".square");
    
  
     for (const s of squareSet){
        s.addEventListener("mouseover",()=>{darken(s)})
    }}; */