const email = ["ilariasalvati00@gmail.com", "pincopallo@gmail.com", "mariorossi@gmail.com", "pappaciccia@gmail.com"];
const element = document.getElementById("submit");
element.addEventListener("click",
    function(){
        const email_utente = document.getElementById("exampleInputEmail1").value;
        for (let i = 0; i<email.length; i++){
            if(email_utente == email[i]){
                document.getElementById("check_message").innerHTML = "Email verificata";
                break;
            }
            else{
                document.getElementById("check_message").innerHTML = "Email non verificata";
            }
        }
    }
)