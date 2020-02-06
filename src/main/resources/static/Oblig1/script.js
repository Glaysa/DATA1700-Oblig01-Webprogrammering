/* Form */
let form = document.querySelector("form");

/* Input Fields */
let inpSelection = document.querySelector("#film-selection");
let inpQuantity = document.querySelector("#film-quantity");
let inpUserFirst = document.querySelector("#user-first");
let inpUserLast = document.querySelector("#user-last");
let inpUserTlf = document.querySelector("#user-tlf");
let inpUserEmail = document.querySelector("#user-email");

/* Errors Labels */
let errQuantity = document.querySelector("#err-quantity");
let errFirst = document.querySelector("#err-first");
let errLast = document.querySelector("#err-last");
let errTlf = document.querySelector("#err-tlf");
let errEmail = document.querySelector("#err-email");

/* Buttons */
let btnBuy = document.querySelector("#buyButton");
let btnDel = document.querySelector("#delButton");

/* Display List */
let display = document.querySelector("#list");

/* Array */
let customers = [];

btnBuy.onclick = function(){
    let qty = Number(inpQuantity.value);
    let tlf = Number(inpUserTlf.value);
    let film = inpSelection.value;
    let fname = inpUserFirst.value;
    let lname = inpUserLast.value;
    let email = inpUserEmail.value;
    let valid = qty && tlf && fname && lname && email;

    if(!qty){errQuantity.innerHTML = "Ugyldig antall"; } else {errQuantity.innerHTML = "";}
    if(!tlf){errTlf.innerHTML = "Ugyldig tlf"; } else {errTlf.innerHTML = "";}
    if(!fname){errFirst.innerHTML = "Ugyldig Fornavn";} else {errFirst.innerHTML = "";}
    if(!lname){errLast.innerHTML = "Ugyldig Etternavn";} else {errLast.innerHTML = "";}
    if(!email){errEmail.innerHTML = "Ugyldig Epost";} else {errEmail.innerHTML = ""; }

    if(valid){
        let person = {
            qty: qty,
            tlf: tlf,
            film: film,
            fname: fname,
            lname: lname,
            email: email
        };
        customers.push(person);
        form.reset();
        let list = "";
        
        for(let i = 0; i < customers.length; i++){
            list += 
                customers[i].fname + " " +
                customers[i].lname + " har kjøp " +
                customers[i].qty + " billett(er) for filmen: " + 
                customers[i].film + "." +
                "<b>Ta kontakt:" + customers[i].email + "</b>.<br>";
        }

        display.innerHTML = list;
    } 
}

btnDel.onclick = function(){
    if(customers.length < 1){
        display.innerHTML = "Ingenting å slette.";
    } else {
        customers.splice(0,customers.length);
        display.innerHTML = "Alle billetter er slettet!";
    }
}