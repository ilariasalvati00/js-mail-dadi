const element = document.getElementById("button");
element.addEventListener("click", 
    function(){
        let computer = Math.floor(Math.random()* 6 +1);
        let giocatore = Math.floor(Math.random()*6 +1);
        document.getElementById("punteggio_computer").innerHTML = `${computer}`;
        document.getElementById("punteggio_giocatore").innerHTML = `${giocatore}`;
        if (computer > giocatore){
            document.getElementById("messaggio").innerHTML = "Il vincitore è: Computer";
        }
        else if (computer < giocatore){
            document.getElementById("messaggio").innerHTML = "Il vincitore è: Giocatore";
        }
        else{
            document.getElementById("messaggio").innerHTML = "La partita è pari"
        }
    }
);