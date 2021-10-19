function HolaMundo(){
alert("Hola Mundo")
console.log(event)
}

const $eventoSemantico = document.getElementById("evento-semantico")
$eventoSemantico.onclick = HolaMundo

$eventoSemantico.onclick = function(e){
    alert("Evento de manejador semantico");
    console.log(e)
    console.log(event)
}

const $eventoMultiple = document.getElementById("ManMultiple")

$eventoMultiple.addEventListener('click',HolaMundo)