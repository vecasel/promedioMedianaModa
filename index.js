var numerosPromedio = [];
var numerosMediana = [];
var numerosModa = [];
var i = 0;
var j = 0;
var k = 0;
var llenarArrayPromedio = document.getElementById("label2__button");
var llenarArrayMediana = document.getElementById("mlabel2__button");
var llenarArrayModa = document.getElementById("mdlabel2__button");


llenarArrayPromedio.addEventListener("click", function(){
    if(document.getElementById("label2__input").value.length == 0){
        alert("Debes colocar los números que deseas, para calcular el promedio");
    }
    else{
          numerosPromedio[i] = parseInt(document.getElementById("label2__input").value);
          i++;
          document.getElementById("label2__span").innerText = "Escoge el número " + (i + 1);
        }});


llenarArrayMediana.addEventListener("click", function(){
    if(document.getElementById("mlabel2__input").value.length == 0){
        alert("Debes colocar los números que deseas, para calcular la mediana")
    }
    else{
        numerosMediana[j] = parseInt(document.getElementById("mlabel2__input").value);
        j++;
        document.getElementById("mlabel2__span").innerText = "Escoge el número " + (j + 1);
    }
});


llenarArrayModa.addEventListener("click", function(){
    if(document.getElementById("mdlabel2__input").value.length == 0){
        alert("Debes colocar los números que deseas, para calcular la media")
    }
    else{
        numerosModa[k] = parseInt(document.getElementById("mdlabel2__input").value);
        k++;
        document.getElementById("mdlabel2__span").innerText = "Escoge el número " + (k + 1);
    }
});


function calcularPromedio(){
    document.getElementById("result__salaries").innerText = numerosPromedio;

    const sumaTotal = numerosPromedio.reduce(function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    })

    const promedioTotal = sumaTotal / numerosPromedio.length;
    document.getElementById("result__idPromedio").innerText = "El promedio de los números es: " + promedioTotal.toFixed(2);
}


function calcularMediana(){
    document.getElementById("result__salaries").innerText = numerosPromedio;

    numerosMediana.sort(function(a, b){
        return a - b;
    });
    
    document.getElementById("mresult__salaries").innerText = numerosMediana;


    if (numerosMediana.length % 2 == 0){
        var numerosMedianaPar1 = (numerosMediana.length / 2) - 1;
        var numerosMedianaPar2 = numerosMediana.length / 2;

        numeroMedianaFinal = (numerosMediana[numerosMedianaPar1] + numerosMediana[numerosMedianaPar2]) / 2;
        document.getElementById("result__idMedia").innerText = "La mediana de los números es: " + numeroMedianaFinal;
    }
    else{
        var numerosMedianaInpar = parseInt(numerosMediana.length / 2);
        document.getElementById("result__idMedia").innerText = "La mediana de los números es: " + numerosMediana[numerosMedianaInpar];
    }   
}


function calcularModa(){
    console.log(numerosModa);
    document.getElementById("mdresult__salaries").innerText = numerosModa;

    let numerosModaObject = {};

    numerosModa.map(function(item){
        if (numerosModaObject[item]){
            numerosModaObject[item] += 1;
        }
        else{
            numerosModaObject[item] = 1;
        }
    });

    let numerosModaNew = Object.entries(numerosModaObject);

    numerosModaNew.sort(function(a,b){
        return a[1] - b[1]; 
    });

    document.getElementById("result__idModa").innerText = "La moda de la lista es: " + numerosModaNew[numerosModaNew.length - 1][0] + " ,el número se repite " + numerosModaNew[numerosModaNew.length - 1][1] + " veces."; 
}
