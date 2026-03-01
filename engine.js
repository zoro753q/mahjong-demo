document.getElementById("spinBtn").onclick = spin;

function spin(){
    let bet = parseInt(document.getElementById("betAmount").value);

    if(freeSpins <= 0){
        if(bet > saldo) return alert("Saldo tidak cukup");
        saldo -= bet;
    }else{
        freeSpins--;
    }

    multiplier = freeSpins > 0 ? multiplier : 1;

    updateSaldo();
    createGrid();

    setTimeout(checkWin,500);
}
