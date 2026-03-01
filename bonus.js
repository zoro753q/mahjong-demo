function removeSymbols(winSymbols){
    grid = grid.map(s=> winSymbols.includes(s) ? null : s);

    grid = grid.filter(s=>s!==null);

    while(grid.length < 30){
        grid.unshift(symbols[Math.floor(Math.random()*symbols.length)]);
    }

    createGrid();
    document.querySelectorAll(".symbol").forEach(el=>el.classList.add("fall"));

    checkScatter();
    setTimeout(checkWin,500);
}

function checkScatter(){
    let scatterCount = grid.filter(s=>s==="⭐").length;

    if(scatterCount >=3){
        freeSpins +=10;
        document.getElementById("freeSpinInfo").innerText="FREE SPIN +10!";
    }
}
