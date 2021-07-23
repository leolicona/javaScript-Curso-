console.group('Cuadrados');
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado  + 5;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log('Los lados del cuadrado miden: ' + ladoCuadrado + ' cm');
console.log('El perímetro de mi cuadrado es: ' + perimetroCuadrado + ' cm');
console.log('El área de mi cuadrado es: ' + areaCuadrado+ ' cm^2');
console.groupEnd();

// Código del Triángulo 
console.group('Triángulo');
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4; 
const alturaTriangulo = 5.5;



const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2; 


console.log(
    'Los lados de mi triángulo miden: '
     + ladoTriangulo1 
     + 'cm, ' 
     + ladoTriangulo2 
     + 'cm  y ' 
     + baseTriangulo 
     + 'cm'
     );
console.log('La altura del triángulo es de: ' + alturaTriangulo + 'cm');
console.log('La base del triángulo es de: ' + alturaTriangulo + 'cm');
console.log('El perímetro del triángulo es: ' + perimetroTriangulo + ' cm');
console.log('El área del triangulo es: ' + areaTriangulo+ ' cm^2');

console.groupEnd();

 // Circulos 
 console.group('Circulos')

// Código de circulo 

// Radio 
const radioCirculo = 4;
console.log('El radio de círculo es de: ' + radioCirculo + 'cm');

// Diámetro 
const diametroCirculo = radioCirculo * 2; 
console.log('El diámetro del círculo es de: ' + diametroCirculo + 'cm');

// PI
const PI = Math.PI

// Circunferencia 
const perimetroCirculo = diametroCirculo * PI;
console.log('El perímetro del círculo es de: ' + perimetroCirculo + 'cm');

// Área 
areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log('El área de círculo es de: ' + areaCirculo + 'cm^2');

 console.groupEnd();
