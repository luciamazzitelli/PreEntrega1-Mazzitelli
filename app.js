//Calcular el factorial de un número introducido por el usuario
//Utilizando estructura do/while
let factorial=1;
let num=parseInt(prompt("Ingresa un número:"));
let a=num;
let i=num
do {factorial=factorial*i; i--;
}
while(i>0)
    alert("El factorial del número " + a + " es: " + factorial);

//Utilizando estructura for
/*let num=parseInt(prompt("Ingresa un número:"));
let a=num;
let factorial=1;
for (let i=num; i>0; i--){
    factorial=factorial*i;
}
alert("El factorial del número " + a + " es: " + factorial);*/