const stare = document.getElementById("cerinta");
const butoane = document.querySelectorAll(".buton");
const scor = document.getElementById("scor");

initializare();
var correct, k = 0;

function coloreaza(){

    var buton = document.getElementById(`${parseInt(correct)}`);

    for(let i = 0; i < butoane.length; i++){

        var buton_curent = document.getElementById(`${i + 1}`);

        if(buton_curent == buton)   
            continue;
        
        var first = Math.floor(Math.random() * 255);
        var second = Math.floor(Math.random() * 255);
        var third = Math.floor(Math.random() * 255);

        buton_curent.style.backgroundColor = `rgb(` + first + `,` + second + `,` + third +`)`;

    }

}

function initializare(){

    var first = Math.floor(Math.random() * 255);
    var second = Math.floor(Math.random() * 255);
    var third = Math.floor(Math.random() * 255);

    correct = Math.floor(Math.random() * 6) + 1;

    var buton = document.getElementById(`${parseInt(correct)}`);
    buton.style.backgroundColor = 'rgb('+ first + ',' + second + ',' + third + ')';

    coloreaza();

    stare.textContent = `Guess the color: RGB(${first}, ${second}, ${third})`;
    butoane.forEach(buton => buton.addEventListener("click", interact));
    
    scor.textContent = `Ghicite: ${k || 0}`;

}

function interact(){

    var buton = parseInt(this.getAttribute("id"));

    if(parseInt(correct) === parseInt(buton)){

        k++;
        initializare();
            
    }else{

        alert("mai incearca!");
        
        k = 0;
        initializare();

    }

}