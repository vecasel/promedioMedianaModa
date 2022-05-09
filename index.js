var numerosPromedio = [];
var i = 0;
var j = 0;
var llenarArray = document.getElementById("label2__button");


llenarArray.addEventListener("click", function(){
    if(document.getElementById("label2__input").value.length == 0){
        alert("Debe colocar los salarios que desea, para calcular el promedio");
    }
    else{
          numerosPromedio[i] = parseInt(document.getElementById("label2__input").value);
          i++;
          j++;
          document.getElementById("label2__span").innerText = "Escoge el salario número " + (j + 1);
        }});

function calcularPromedio(){
    document.getElementById("result__salaries").innerText = numerosPromedio;
    // var sumaTotal = 0;

    // for(i = 0; i < numerosPromedio.length; i++){
    //     sumaTotal = numerosPromedio[i] + sumaTotal;
    // }

    // sumaTotal = sumaTotal / numerosPromedio.length;

    // document.getElementById("result__idPromedio").innerText = "El promedio de los salarios es: " + sumaTotal.toFixed(2);

    const sumaTotal = numerosPromedio.reduce(function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    })

    const promedioTotal = sumaTotal / numerosPromedio.length;
    document.getElementById("result__idPromedio").innerText = "El promedio de los salarios es: " + promedioTotal.toFixed(2);
}