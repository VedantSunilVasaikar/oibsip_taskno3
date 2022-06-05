let celcious = document.getElementById("celcious");
let farenheit = document.getElementById("farenheit");

function celToFar(){
    let output = (parseFloat(celcious.value)*9/5 + 32);
    farenheit.value = parseFloat(output.toFixed(2));
    console.log(farenheit);
}

function farTocel(){
    let output =  ((parseFloat(farenheit.value) - 32 ) * 5/9);
    celcious.value = parseFloat(output.toFixed(2));
    console.log(output);

}
