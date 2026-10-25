

//APUNTES


//let x = 5;         // = asigna: guarda el valor 5 en x (no compara)
//5 == "5";          // == compara valor, convirtiendo tipos: true
//5 === "5";         // === compara valor Y tipo, sin convertir: false
//!true;             // ! es NO, invierte el valor: false
//5 !== 3;           // !== es distinto estricto: true
//true || false;     // || es O: true si al menos una condición es true
//true && false;     // && es Y: true solo si ambas condiciones son true
//var:  variable gloal 
//let: variable funcional dentro de let 
//const: valor para una variable que no se puede modificar 
//while bucle
//let bucle
//infinity: Para encontrar el mayor o el menor de varios números, se empieza con mayor = -Infinity y menor = Infinity. Así, cualquier número ingresado reemplaza al valor inicial en la primera comparación, sin necesidad de un caso especial.
// /n Salto de linea
//Math.random()                       // decimal entre 0 (incluido) y 1 (excluido)
//Math.random() * 50                  // decimal entre 0 y 49.99...
//Math.floor(Math.random() * 50)      // entero entre 0 y 49 (redondea hacia abajo)
//Math.floor(Math.random() * 50) + 1  // entero entre 1 y 50
//toLowerCase es un método de los textos (strings) que devuelve una copia en minúsculas. No cambia el texto original.

// Algoritmos secuenciales 

function sumar() {
    let n1, n2, suma;

    alert("Este algoritmo suma dos numeros")
    n1 = parseFloat(prompt("Ingrese el primer numero"));
    n2 = parseFloat(prompt("Ingrese el  segundo numero"));

    suma = n1 + n2;
    alert("El resultado de suma es: " + suma);

}
function operacionesBasicas() {

    let n1, n2;
    let s, r, m, d;

    alert("Este algoritmo funciona para realizar operaiones basicas");
    n1 = parseFloat(prompt("Ingrese el primer numero"));
    n2 = parseFloat(prompt("Ingrese el segundo numero"));

    s = n1 + n2;
    r = n1 - n2;
    m = n1 * n2;
    d = n1 / n2;
    alert("El resultado de la suma es de: " + s);
    alert("El resultado de la resta es de: " + r);
    alert("El resultado de la multiplicacion es de:" + m);
    alert("El resultado de la división es de: " + d);
}
function conversiondeunidades() {

    let n1;
    let m, km;

    alert("Este algortimo conviertes de centimetro a metros y metros a centimetros");
    n1 = parseFloat(prompt("Ingrese los centimetros a convertir"));

    m = n1 / 100;
    km = m / 1000;
    alert("El valor ingresado en centimetros a metros es de " + m + " Y el valor de metros a Km es de " + m);
}
function temperatura() {

    let t;
    let F, K;

    alert("Este algoritmo pasa de grados celsius y los pasa a Fahrenheit y Kelvin");
    t = parseFloat(prompt("Ingrese el valor de la temperatura en Celsius"))


    F = (t * 1.8) + 32;
    K = t + 273.15;
    alert("El valor ingresado en celsius a Fahrenheit es de: " + F + " Y el valor en Kelvin es de " + K);

}
function triangulo() {

    let a, b;
    let ar, pr;

    alert("Este programa determina el area como perimetro d eun triangulo ingresando su base y altura");

    a = parseFloat(prompt("Ingrese la altura del trianguo"));
    b = parseFloat(prompt("Ingrese la base del triaungulo"));


    ar = b * a
    pr = 2 * (b + a)
    alert("El área es: " + ar + " y el perímetro es: " + pr)
}

function promediode3() {
    let n1, n2, n3;
    let p;

    n1 = parseFloat(prompt("Inngrese la primer nota"));
    n2 = parseFloat(prompt("Ingrese la segunda nota"));
    n3 = parseFloat(prompt("Ingrese la tercer nota"));

    p = (n1 + n2 + n3) / 3

    alert("El promedio de las tres notas es de " + p)

}
function tiempo() {
    let s, m, h;

    s = parseFloat(prompt("Ingrese el tiempo en segundos"));

    m = s / 60
    h = m / 60

    alert("El tiempo ingresado en segundos a minutos es de " + m + " Y de minutos a horas es de " + h)
}

function peso() {
    let kl, gr, lb, t;

    kl = parseFloat(prompt("Ingrese el peso en kl"));

    gr = kl * 1.000;
    lb = kl * 2.20462;
    t = kl / 1.000;

    alert("El peso ingresado a gramos es de " + gr + ". El peso ingresado a libras es de " + lb + ". El peso ingresado a toneladas es de " + t);
}

function peso() {
    let mer, ve, ti, mar, jup, sat, ura, nep, lun, pe;
    const gt = 9.81;
    alert("Algoritmo para determinar el peso en diferentes planetas");

    pe = parseFloat(prompt("Ingrese su peso"))

    mer = pe * (3.70 / gt)
    ve = pe * (8.87 / gt)
    ti = pe * (9.81 / gt)
    mar = pe * (3.71 / gt)
    jup = pe * (24.79 / gt)
    sat = pe * (10.44 / gt)
    ura = pe * (8.69 / gt)
    nep = pe * (11.15 / gt)
    lun = pe * (1.62 / gt)

    alert("Su peso en mercurio es de " + mer.toFixed(2))
    alert("Su peso en venus es de " + ve.toFixed(2))
    alert("Su peso en la tierra es de " + ti.toFixed(2))
    alert("Su peso en marte es de " + mar.toFixed(2))
    alert("Su peso en jupiter es de " + jup.toFixed(2))
    alert("Su peso en saturno es de " + sat.toFixed(2))
    alert("Su peso en urano es de " + ura.toFixed(2))
    alert("Su peso en neptuno es de " + nep.toFixed(2))
    alert("Su peso en la luna es de " + lun.toFixed(2))

}

function compra() {
    let p1, p2, p3;
    let c1, c2, c3;
    let t;

    alert("Algoritmo que calcula la compra de tres productos");
    p1 = parseFloat(prompt("Ingres el precio deel primer prodcuto"));
    c1 = parseFloat(prompt("Ingrese la cantidad del producto"));
    p2 = parseFloat(prompt("Ingrese el valor del segundo producto"));
    c2 = parseFloat(prompt("Ingrese la cantidad del producto"));
    p3 = parseFloat(prompt("Ingrese el valor del tercer producto"));
    c3 = parseFloat(prompt("Ingrese la cantidad del producto"));

    p1 = p1 * c1;
    p2 = p2 * c2;
    p3 = p3 * c3;

    t = p1 + p2 + p3;

    alert("El total a pagar por su compra es de: " + t);
}

function pagoT() {
    let s, d, b;
    let t;

    alert("Programa para ver el pago de un trabajador");

    s = parseFloat(prompt("Ingrese el salario del trabajador"));
    d = parseInt(prompt("Ingrese los dias trabajados"));
    b = parseFloat(prompt("Ingrese bonos dados al trabajador"));

    t = (s / 30) * d + b

    alert("El total a pagarle al trabajador es de " + t.toFixed(2))

}
function factura() {
    let c, vu, tp, im, sub, vi;

    alert("Programa para calcular el precio de una factura");
    c = parseFloat(prompt("Ingrese el consumo del servicio"));
    vu = parseFloat(prompt("Ingrese el valor"));
    im = parseFloat(prompt("Ingrese el porcentaje de impuesto"));

    sub = c * vu;
    im = sub * (im / 100);
    tp = sub + vi;

    alert("El subtotal es: " + sub);
    alert("El valor del impuesto es: " + vi);
    alert("El total a pagar es: " + tp);

}

function costov() {
    let kl, c, r, pc, ct;

    alert("Programa para saber el costo de un viaje");

    kl = parseFloat(prompt("Ingese cuantos kilometros recorrio"));
    r = parseFloat(prompt("Ingrese el rendimiento del vehiculo"));
    pc = parseFloat(prompt("Ingrese el precio de la gasolina"));

    ct = (kl / r) * pc;

    alert("el costo total es de: " + ct);

}

function tiempo() {
    let d, v, t

    alert("Programa para calcular el tiempo de un viaje");
    d = parseFloat(prompt("Ingrese la distacia recorrida"));
    v = parseFloat(prompt("Ingrese la velovidad del viaje"));

    t = d / v
    alert("El tiempo estimado es de: " + t);
}
function notas() {
    let n1, n2, n3;
    let p1, p2, p3;
    let nf;

    alert("Sistema para sacar el promedio de notas");
    n1 = parseFloat(prompt("Ingrese la primero nota"));
    p1 = parseFloat(prompt("Ingrese el porcentaje de la primer nota"));
    n2 = parseFloat(prompt("Ingrese la segunda nota nota"));
    p2 = parseFloat(prompt("Ingrese el porcentaje de la segunda nota"));
    n3 = parseFloat(prompt("Ingrese la tercer nota"));
    p3 = parseFloat(prompt("Ingrese el porcentaje de la tercer nota"));

    nf = (n1 * (p1 / 100)) + (n2 * (p2 / 100)) + (n3 * (p3 / 100));
    alert("La nota final del estudiante es: " + nf.toFixed(2));
}
function Monedas() {
    let pesos, dolares, euros;
    const tasaDolar = 4000;
    const tasaEuro = 4300;

    alert("Sistema conversor de monedas ");

    pesos = parseFloat(prompt("Ingrese el valor en pesos colombianos"));

    dolares = pesos / tasaDolar;
    euros = pesos / tasaEuro;


    alert("Equivalente en dólares: $" + dolares.toFixed(2) + " Equivalente en euros: €" + euros.toFixed(2));
}

// condicionales 

function numero() {
    let n;

    n = parseInt(prompt("Ingrese el numero a analizar"));

    if (n > 0) {
        alert("El número " + n + " es positivo.");
    } else {
        alert("El número " + n + " Es negatiivo.");
    }
}

function numeropar() {
    let n;

    alert("Algoritmo para determinar si un número es par o impar");
    n = parseInt(prompt("Ingrese un número a evaluar:"))

    if (n % 2 === 0) {
        alert("El número " + n + " es par.");
    } else {
        alert("El número " + n + " es impar.");
    }

}

function mayor() {

    let n1, n2;

    alert("Algoritmo para determinar el mayor de dos numeros");

    n1 = parseInt(prompt("Ingrese el primer numero"));
    n2 = parseInt(prompt("Ingrese el segundo numero"));

    if (n1 > n2) {
        alert(n1 + " Es mayor que " + n2);
    } else {
        alert(n2 + " Es mayor que " + n1);
    }
}

function compra() {
    let c;

    alert("Algoritmo para ver el descuento de una compra");

    c= parseFloat(prompt("Ingrese el valor de la compra"));

    if (c>=200000) {
        
        alert("Tiene desciento del 10%");
    } else {
        alert("No tiene descuento");
    }
}

function asd(){

    let t;

    alert ("Sistema para determinar la temperatura de un a ciudad");

    t= parseFloat(prompt("Ingrese la temperatura en grado celsius "));

    if (t>=30) {
        alert("La temperatura es alta");
    } else{
        alert("La temperatura es baja");
    }
}

function mayor() {
    let e;

    alert("Sistema para ver si es mayor de edad");

    e=parseInt(prompt("Ingrese su edad"));

    if (e>=18) {
        alert("Usted es mayor de edad");
        
    } else{
        alert("Usted es menor de edad");
    }
}

function plata(){
    let r;
    const s=500000
    alert("Banco digital")
    r = parseFloat(prompt("Ingrese cuanto desea retirar"));
    if (r<=s) {
        alert("Retiro autorizado");
    } else
        alert("Saldo insuficiente");
}
function envio(){
    let v;

    alert("Algoritmo para ver si tiene envio gratis");

    v=parseFloat(prompt("Ingrese el valor del envio"));
    if (v>=150000) {
        alert("El envio es gratuito")
    } else{
        alert("El envio tiene un costo de 12.000")
    }
}

function mnq (){
    let num1, num2;
    
    alert("Comparador de números");
    
    num1=parseFloat(prompt("Ingrese el primer número:"));
    num2=parseFloat(prompt("Ingrese el segundo número:"));
    
    if (num1>num2) {
        alert("El primer número es mayor que el segundo");
    } else if (num1<num2) {
        alert("El primer número es menor que el segundo");
    } else {
        alert("Los números son iguales");
    }
}

function tarifa() {
    let t;

     t=parseInt(prompt("Ingrese cuanto tiempo duro el vehiculo dentro del parqueadero"));
     if (t<=3) {
        alert("Debe pagar 5.000");
     } else if (t<=6) {
        alert("Debe pagar 10.000")
        
     } else if (t>6) {
        alert("Debe pagar 25.000")
        
     }
}

function pasaje(){
    let e;

    alert("Sistema para determinar precio del transporte");
    
    e = parseInt(prompt("Porfavor ingrese su edad"));
    if (e<=5) {
        alert("Su pasaje es gratis")
    }else if (e<=17) {
        alert("La tarifa es de 2.000");
    } else if (e<=59) {
        alert("La tarifa es de 3.500");
    } else if (e>60) {
        alert("Su pasaje es gratis")
    }
}

function velocidad (){

    let v;

    alert("Determinador de velocidad");
    v = parseFloat(prompt("Porfavor ingrese la velocidad"));
    if (v<=30) {
        alert("La velocidad es baja");
    } else if (v<=60) {
        alert("La velocidad es moderada");
    } else if (v<=100) {
        alert("La velocidad es alta");
    } else if (v>100) {
        alert("La velocidad es muy alta");
    }
}        

//1=="1" = true
//1==="1"

function msd() {
    let mes;

    alert("Algoritmo para determinar cuántos días tiene un mes");
    mes = parseInt(prompt("Ingrese el número del mes (1 - 12)"))
    if ((mes==1) || ( mes==3) || (mes==5)||(mes==7)||(mes==8)||(mes==10)||(mes==12)){
        alert("El mes ingresado tiene 31 dias");
    } else if ((mes==4)||(mes==11)||(mes==9)||(mes==6)){
        alert("El mes tiene 30 dias")
    } else{
        alert("El mes tiene 28 dias");
    }
}

function acceso(){
    let e,s;
    e=parseInt(prompt("Ingrese su edad"));
    s= parseFloat(prompt("Ingrese su estatura"));
    if (e >= 12) {
    if (s >= 1.40) {
        alert("Puede ingresar.");
    } else {
        alert("No puede ingresar.");
    }
} else {
    alert("No puede ingresar.");
}
}
function dscc() {
    let t, c, porcentaje, d, total

    alert("Sistema para determinar el tipo de cliente y ejecutar descuento")

    t = (prompt("Ingrese el tipo de cliente (normal o frecuente)") || "").trim().toLowerCase()
    c = parseFloat(prompt("Ingrese el valor de la compra"));

    if (t === "normal") {
        porcentaje = 0.05;
    } else if (t === "frecuente") {
        porcentaje = 0.10;
    } else {
        alert("Tipo de cliente no valido");
        return;
    }

    if (c >= 200000) {
        d = c * porcentaje;
    } else {
        d = 0;
    }

    total = c - d;

    alert("Descuento: " + d + "\nTotal a pagar: " + total)
}
function cajeroAutomatico() {
    let s, r;

    alert("Cajero automático: valide el retiro");
    s= parseFloat(prompt("Ingrese el saldo disponible"));
    r= parseFloat(prompt("Ingrese el valor del retiro"));

    if (r <= 0) {
        alert("El retiro debe ser mayor que $0");
    } else if (r%10000 == 0) {
        alert("El retiro debe ser múltiplo de $10.000");
    } else if (r>s) {
        alert("El retiro supera el saldo disponible");
    } else {
        s=s - r;
        alert("Operación válida. Saldo restante: " + s);
    }
}

function pass() {
    let c;
    alert("Sistema para registrar contraseña");
}

function bis(){
    let a;
    
    alert("Sistema para ver si un año es bisiesto");
    a = parseInt(prompt("Ingrese el año a evaluar"))

    if ((a % 4 === 0 && a % 100 !== 0) || (a % 400 === 0)) {
        alert("El año " +a+ " es bisiesto.")
    } else {
        alert("El año " +a+ " no es bisiesto.")
    }
}
function clasificarTriangulo() {
    let l1, l2, l3;

    alert("Sistema para clasificar triángulos");
    l1 = parseFloat(prompt("Ingrese la medida del primer lado:"));
    l2 = parseFloat(prompt("Ingrese la medida del segundo lado:"));
    l3 = parseFloat(prompt("Ingrese la medida del tercer lado:"));

    if ((l1 + l2 > l3) &&(l1 + l3 > l2)&&(l2 + l3 > l1)) {
        if ((l1 === l2)&&(l2 === l3)) {
            alert("Los lados pueden formar un triángulo y es Equilátero.")
        } else if ((l1 === l2) || (l1===l3) || (l2=== l3)) {
            alert("Los lados pueden formar un triángulo y es Isósceles.")
        } else {
            alert("Los lados pueden formar un triángulo y es Escaleno.")
        }
    } else {
        alert("Las medidas ingresadas NO pueden formar un triángulo.")
    }
}
function calculadoraBasica() {
    let n1, n2, res;
    let op;

    alert("Calculadora básica");
    n1= parseFloat(prompt("Ingrese el primer número:"))
    n2=  parseFloat(prompt("Ingrese el segundo número:"))
    op =parseInt(prompt("Seleccione la operación que quiera realizar:\n1 = Suma\n2 = Resta\n3 = Multiplicación\n4 = División"));

    if (op === 1) {
        res = n1+n2
        alert("El resultado de la suma es: " + res);
    } else if (op===2) {
        res = n1-n2
        alert("El resultado de la resta es: " + res);
    } else if (op===3) {
        res = n1 * n2
        alert("El resultado de la multiplicación es: "+res);
    } else if (op === 4) {
        if (n2== 0){
            res = n1 / n2
            alert("El resultado de la división es: "+res);
        } else {
            alert("Error: No se puede dividir entre cero.");
        }
    } else {
        alert("Opción de operación no válida.");
    }
}
function tarifasEquipaje() {
    let peso;

    alert("Sistema de tarifas de equipaje");
    peso = parseFloat(prompt("Ingrese el peso de la maleta en kg:"));

    if (peso<23) {
        alert("El equipaje no tiene costo adicioanl");
    } else if (peso<=30) {
        alert("El equipaje tiene un costo adicional de 50k")
    } else if (peso<=40) {
        alert("El equipaje tiene un costo adicional de 100k")
    } else if (peso>40){
        alert("El equipaje no se puede transportar")
    }
}
function facturaCompra() {
    let subtotal, desc, valDesc, iva, total;

    alert("Sistema de factura de compra");
    subtotal = parseFloat(prompt("Ingrese el valor del subtotal de la compra:"));

    if (subtotal < 100000) {
        desc = 0;
    } else if (subtotal >= 100000 && subtotal <= 299999) {
        desc = subtotal * 0.05;
    } else if (subtotal >= 300000 && subtotal <= 499999) {
        desc = subtotal * 0.10;
    } else {
        desc = subtotal * 0.15;
    }

    valDesc = subtotal - desc;
    iva = valDesc * 0.19;
    total = valDesc + iva;

    alert("El subtotal es de "+suntotal+" El descuento es de "+desc+" El valor con el descuento es de "+desc+" el valor del iva es de "+iva+" El total a pagar es de "+total)
}
function cdr() {
    let edad;
    let ingresos;

    alert("Sistema de calificación de riesgo de crédito");
    edad = parseInt(prompt("Ingrese la edad del solicitante:"));
    ingresos = parseFloat(prompt("Ingrese los ingresos mensuales:"));

    if (edad < 18) {
        alert("Usted es menor de edad");
    } else if (edad>=18&edad<= 5) {
        if (ingresos >= 2000000) {
            alert("Puede tener el credito");
        } else {
            alert(" No elegible Ingresos inferiores a $2.000.000.");
        }
    } else {
        if (ingresos >= 1500000) {
            alert("Puede tener el credito");
        } else {
            alert("No elegible Ingresos inferiores a $1.500.000.");
        }
    }
}
function mm() {
    let n1, n2, n3, mayor, menor;
    let Ig = "";

    alert("Sistema para analizar tres números");
    n1 = parseFloat(prompt("Ingrese el primer número:"));
    n2 = parseFloat(prompt("Ingrese el segundo número:"));
    n3 = parseFloat(prompt("Ingrese el tercer número:"));


    if (n1 >= n2 & n1 >= n3) {
        mayor = n1;
    } else if (n2 >= n1 && n2 >= n3) {
        mayor = n2;
    } else {
        mayor = n3;
    }


    if (n1 <= n2 & n1 <= n3) {
        menor = n1;
    } else if (n2 <= n1 & n2 <= n3) {
        menor = n2;
    } else {
        menor = n3;
    }


    if (n1 == n2 || n1 == n3 || n2 == n3) {
        Ig = "Existen valores iguales entre los números ingresados.";
    } else {
        Ig = "Todos los números son diferentes.";
    }

    alert("El número mayor es: " + mayor + 
          "\nEl número menor es: " + menor + 
          "\n" + Ig);
}
function swich(){
    let mesn
    
    mesn = parseInt(prompt("Ingrese un numero del 1 al 12"));

    switch (mesn) {
        case 1:
            alert("El mes enero")
            break;
        case 2:
            alert("El mes febrero")
            break;
        case 3:
            alert("El mes marzo")       
            break;  
        case 4:
            alert("El mes Abril")
            break;
        case 5:
            alert("El mes Mayo")
            break;
        case 6:
            alert("El mes Junio ")       
            break; 
        case 7:
            alert("El mes Julio")
            break;
        case 8:
            alert("El mes Agosto")
            break;
        case 9:
            alert("El mes Septiembre")       
            break; 
        case 10:
            alert("El mes Octubre")
            break;
        case 11:
            alert("El mes Noviembre")
            break;
        case 12:
            alert("El mes Diciembre")       
            break;                                     
                       
    
        default:
            break;
    }
}

// BUCLES

function cn(){
    let n1,n2,c;

    n1=parseInt(prompt("Ingrese el numero de partida"));
    n2=parseInt(prompt("Ingrese el numero de finalización"));

    while (n1<=n2) {
        console.log("Mostrando"+n1);
        n1= n1+1
    }
}
function cr(){
    let n1, c;

    n1= parseInt(prompt("Ingrese el numero de partida"));
    
    c=n1

    while (c>=0){
        console.log("Mostrando"+c);
        
        c=c-1
    }
}

function np(){
    let n, c;
    n=parseInt(prompt("Ingrese el numero limite"));

    c=1

    while (c<=n) {
        if (c % 2===0) {
            console.log("Mostrando numeros pares "+c);
        }   
        c=c+1
    }
}
function ni(){
        let n, c;
    n=parseInt(prompt("Ingrese el numero limite"));

    c=1

    while (c<=n) {
        if (c % 2 !==0) {
            console.log("Mostrando numeros pares "+c);
        }   
        c=c+1
    }

}
function sddn(){
    let contador, limite, suma;

    limite= parseInt(prompt("Ingrese un limite"));
    
    contador=1
    suma=0 

    while (contador<=limite) {
        suma=suma+contador
        contador=contador+1
    }
    console.log("El resultado es "+suma)
}

function mul(){
    let n1, c;

    n1=parseInt(prompt("Ingrese el numero del que quiera la tabla"));

    c=1
    while (c<=10) {
        console.log(n1 + " x " + c + " = " + (n1 * c));
        c = c + 1
    }
}
function cpi(){
    let n,c,sp,si

    n=parseInt(prompt("Ingrese el numero limite"));
    
    c=1
    sp=0
    si=0

    while (c<=n) {
        if (c %2===0) {
            sp= sp+1
        } else{
            si=si+1
        }
        c= c+1
    } 

console.log("El total de numeros pares es "+ sp+" El total de impares es "+ si)    
}

function pdn(){

    let cantidad, contador, numero, mayor;

    cantidad = parseInt(prompt("Cuantos numeros desea ingresar?"), 10);

    if (cantidad <= 0) {
        alert("La cantidad debe ser mayor que cero");
    }

    contador = 1;
    mayor = -Infinity;

    while (contador <= cantidad) {
        numero = parseFloat(prompt("Ingrese el numero "+contador));

        if (numero > mayor) {
            mayor = numero
        }

        contador=contador+ 1;
    }

    alert("El numero mayor es: "+ mayor);
}
function nm() {
    let cantidad, contador, numero, menor;

    cantidad = parseInt(prompt("Cuantos numeros desea ingresar?"), 10);

    if (cantidad <=0) {
        alert("La cantidad debe ser mayor que cero")
    }

    contador = 1;
    menor = Infinity;

    while (contador <= cantidad) {
        numero = parseFloat(prompt("Ingrese el numero " + contador));

        if (numero<menor) {
            menor=numero;
        }

        contador=contador + 1
    }

    alert("El numero menor es: " + menor);
}

function cdn() {
    let cantidad, contador, numero;
    let positivos, negativos, ceros;

    cantidad = parseInt(prompt("Cuantos numeros desea ingresar?"), 10)

    contador = 1
    positivos = 0
    negativos = 0
    ceros = 0

    while (contador<=cantidad) {
        numero = parseFloat(prompt("Ingrese el numero "+contador));

        if (numero > 0) {
            positivos = positivos + 1;
        } else if (numero < 0) {
            negativos = negativos + 1;
        } else {
            ceros = ceros + 1;
        }

        contador = contador + 1;
    }

    alert("Positivos: "+positivos +
          "\nNegativos: "+ negativos +
          "\nIguales a cero: "+ ceros);
}
function estadisticasVentas() {
    let cantidad, contador, valor, total, promedio, mayor, menor;

    cantidad = parseInt(prompt("Cuantas ventas se realizaron durante el dia?"), 10);

    if (cantidad <= 0) {
        alert("La cantidad debe ser mayor que cero")
        return;
    }

    contador = 1
    total = 0
    mayor = -Infinity
    menor = Infinity

    while (contador<=cantidad) {
        valor = parseFloat(prompt("Ingrese el valor de la venta " + contador))

        total = total + valor

        if (valor > mayor) {
            mayor = valor
        }
        if (valor < menor) {
            menor = valor
        }

        contador = contador + 1;
    }

    promedio = total / cantidad;

    alert("Total de ventas: " + total +
          "\nPromedio de ventas: " + promedio +
          "\nVenta de mayor valor: " + mayor +
          "\nVenta de menor valor: " + menor);
}
function cero() {
    let numero, cantidad, suma, promedio;

    cantidad = 0;
    suma = 0;

    numero = parseFloat(prompt("Ingrese un numero (0 para terminar)"));

    while (numero !== 0) {
        cantidad = cantidad + 1
        suma = suma + numero
        numero = parseFloat(prompt("Ingrese un numero (0 para terminar)"));
    }

    if (cantidad === 0) {
        alert("No se ingresaron numeros para calcular");
    }

    promedio = suma / cantidad;

    alert("Cantidad de numeros ingresados:"+ cantidad +
          "\nSuma: "+suma +
          "\nPromedio: "+promedio)
}
function pass() {
    const pass = "123";
    let clave;

    clave = prompt("Ingrese la contrasena");

    while (clave !== pass) {
        alert("Contrasena incorrecta");
        clave = prompt("Ingrese la contrasena");
    }

    alert("Contrasena correcta. Acceso permitido");
}
function op() {
    const menu = "MENU\n" +
                 "1. Mostrar mensaje\n" +
                 "2. Mostrar informacion\n" +
                 "3. Realizar una operacion (suma)\n" +
                 "4. Salir\n\n" +
                 "Seleccione una opcion"
    let opcion, a, b;

    opcion = parseInt(prompt(menu), 10);

    while (opcion !== 4) {
        if (opcion === 1) {
            alert("Hola, Bienvenido al sistema");
        } else if (opcion === 2) {
            alert("Informacion sistema de practica de bucles");
        } else if (opcion === 3) {
            a = parseFloat(prompt("Ingrese el primer numero"));
            b = parseFloat(prompt("Ingrese el segundo numero"));
            alert("La suma es: " + (a + b));
        } else {
            alert("Opcion no valida");
        }

        opcion = parseInt(prompt(menu), 10);
    }

    alert("Programa finalizado");
}

function cajero() {
    const menu = "CAJERO\n" +
                 "1. Consultar saldo\n" +
                 "2. Retirar dinero\n" +
                 "3. Depositar dinero\n" +
                 "4. Salir\n\n" +
                 "Seleccione una opcion";
    let saldo = 500000;
    let opcion, valor;

    opcion = parseInt(prompt(menu), 10);

    while (opcion!== 4) {
        if (opcion=== 1) {
            alert("Saldo disponible: " + saldo);

        } else if (opcion ===2) {
            valor = parseFloat(prompt("Ingrese el valor a retirar"))

            if (valor <= 0) {
                alert("El valor debe ser mayor que cero")
            } else if (valor > saldo) {
                alert("Saldo insuficiente")
            } else {
                saldo = saldo - valor;
                alert("Retiro realizado. Nuevo saldo: " + saldo);
            }

        } else if (opcion===3) {
            valor = parseFloat(prompt("Ingrese el valor a depositar"));

            if (valor <=0) {
                alert("El valor debe ser mayor que cero")
            } else {
                saldo = saldo + valor;
                alert("Deposito realizado. Nuevo saldo: " + saldo);
            }

        } else {
            alert("Opcion no valida");
        }

        opcion = parseInt(prompt(menu), 10);
    }

    alert("Gracias por usar el cajero");
}
function not() {
    let cantidad, contador, nota, suma, promedio;
    let aprobados, reprobados, notaMayor, notaMenor;

    cantidad = parseInt(prompt("Cuantos estudiantes tiene el grupo?"), 10);

    if (cantidad <= 0) {
        alert("La cantidad debe ser mayor que cero");
    }

    contador = 1
    suma = 0
    aprobados = 0
    reprobados = 0
    notaMayor = -Infinity
    notaMenor = Infinity

    while (contador <= cantidad) {
        nota = parseFloat(prompt("Ingrese la nota final del estudiante " + contador));

        suma = suma + nota;

        if (nota >= 3.0) {
            aprobados = aprobados + 1;
        } else {
            reprobados = reprobados + 1;
        }

        if (nota > notaMayor) {
            notaMayor = nota;
        }
        if (nota < notaMenor) {
            notaMenor = nota;
        }
        contador = contador + 1;
    }

    promedio = suma / cantidad

    alert("Cantidad de estudiantes: " +cantidad+
          "\nAprobados: " +aprobados+
          "\nReprobados: " +reprobados +
          "\nPromedio del grupo: "+promedio +
          "\nNota mas alta: "+notaMayor +
          "\nNota mas baja: "+notaMenor);
}
function  adivinar() {
    let secreto, intento, intentos;

    secreto = Math.floor(Math.random() * 50) + 1;
    intentos = 0;

    intento = parseInt(prompt("Adivine el numero secreto entre 1 y 50"), 10)
    intentos = intentos + 1;

    while (intento!== secreto) {
        if (intento <secreto) {
            alert("El numero secreto es mayor");
        } else {
            alert("El numero secreto es menor");
        }

        intento = parseInt(prompt("Intente de nuevo"), 10)
        intentos = intentos + 1;
    }

    alert("Acertó! El numero era "+secreto +
          ". Cantidad de intentos: "+intentos);
}

function productos() {
    let cantidad, contador, nombre, precio, disponibles;
    let valorInventario, nombreMayor, nombreMenor, precioMayor, precioMenor;

    cantidad = parseInt(prompt("Cuantos productos desea registrar?"), 10);

    if (cantidad <= 0) {
        alert("La cantidad debe ser mayor que cero");
    }

    contador = 1
    valorInventario = 0
    precioMayor = -Infinity
    precioMenor = Infinity

    while (contador <= cantidad) {
        nombre = prompt("Nombre del producto " + contador);
        precio = parseFloat(prompt("Precio del producto " + contador));
        disponibles = parseInt(prompt("Cantidad disponible del producto " + contador), 10);

        valorInventario = valorInventario + precio * disponibles;

        if (precio > precioMayor) {
            precioMayor = precio
            nombreMayor = nombre
        }
        if (precio < precioMenor) {
            precioMenor = precio
            nombreMenor = nombre
        }

        contador = contador + 1;
    }

    alert("Cantidad total de productos registrados: " + cantidad +
          "\nValor total del inventario: " + valorInventario +
          "\nProducto con mayor precio: " +nombreMayor +" (" + precioMayor + ")" +
          "\nProducto con menor precio: " +nombreMenor+ " (" + precioMenor + ")")
}
function acomular() {
    let numero, suma, cantidad;

    suma = 0
    cantidad = 0

    while (suma < 15) {
        numero = parseFloat(prompt("Ingrese un numero (suma actual: " + suma + ")"));
        suma = suma + numero;
        cantidad = cantidad + 1;
    }
    alert("Cantidad de numeros ingresados: " + cantidad +
          "\nSuma acumulada: " + suma +
          "\nPromedio: " + (suma / cantidad));
}
function compras2() {
    let nombre, precio, cantidad, subtotalProducto, subtotal;
    let descuento, valorDescuento, valorConDescuento, iva, total;
    let cantidadProductos, respuesta;

    subtotal = 0
    cantidadProductos = 0
    respuesta = "S"

    while (respuesta === "S") {
        nombre = prompt("Ingrese nombre del producto");
        precio = parseFloat(prompt("Ingrese precio"));
        cantidad = parseInt(prompt("Ingrese cantidad"), 10);

        subtotalProducto = precio * cantidad
        subtotal = subtotal + subtotalProducto
        cantidadProductos = cantidadProductos + 1

        respuesta = (prompt("Desea agregar otro producto? Escriba S o N") || "N").toUpperCase();
    }

    if (subtotal < 100000) {
        descuento = 0;
    } else if (subtotal < 300000) {
        descuento = 0.05;
    } else if (subtotal < 500000) {
        descuento = 0.10;
    } else {
        descuento = 0.15;
    }
    valorDescuento = subtotal * descuento;
    valorConDescuento = subtotal - valorDescuento;
          iva = valorConDescuento * 0.19;
    total = valorConDescuento + iva;

    alert("Subtotal: " + subtotal +
          "\nDescuento: " + valorDescuento +
          "\nIVA: " + iva +
          "\nTotal: " + total +
          "\nProductos: " + cantidadProductos);
}