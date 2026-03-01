let saldo = 100000;
let multiplier = 1;
let freeSpins = 0;

function updateSaldo(){
    if(saldo <= 0){
        saldo = 100000;
        alert("Saldo habis! Reset ke Rp100000");
    }
    document.getElementById("saldo").innerText = "Saldo: Rp"+saldo;
}

updateSaldo();
