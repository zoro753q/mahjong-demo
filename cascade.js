function checkWin(){
    let counts = {};
    grid.forEach(s=>{
        counts[s] = (counts[s]||0)+1;
    });

    let winSymbols = Object.keys(counts).filter(s=>counts[s] >= 8);

    if(winSymbols.length > 0){
        multiplier++;
        document.getElementById("multiplier").innerText="x"+multiplier;

        document.querySelectorAll(".symbol").forEach((el)=>{
            if(winSymbols.includes(el.innerText)){
                el.classList.add("win");
            }
        });

        setTimeout(()=>{
            removeSymbols(winSymbols);
        },500);
    }
}
