const symbols = ["🀄","🀙","🀛","🀜","🐉","⭐"];
const gridElement = document.getElementById("grid");
let grid = [];

function createGrid(){
    gridElement.innerHTML="";
    grid=[];
    for(let i=0;i<30;i++){
        let randomSymbol = symbols[Math.floor(Math.random()*symbols.length)];
        grid.push(randomSymbol);

        let div = document.createElement("div");
        div.classList.add("symbol");
        div.innerText=randomSymbol;
        gridElement.appendChild(div);
    }
}
