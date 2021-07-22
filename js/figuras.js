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
const ladoTriangulo3 = 4; 
const alturaTriangulo = 5.5;
const basetriangulo = 6;


const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
const areaTriangulo = (basetriangulo * alturaTriangulo) / 2; 


console.log(
    'Los lados de mi triángulo miden: '
     + ladoTriangulo1 
     + 'cm, ' 
     + ladoTriangulo2 
     + 'cm  y ' 
     + ladoTriangulo3 
     + 'cm'
     );
console.log('La altura del triángulo esde: ' + alturaTriangulo + 'cm');
console.log('El perímetro del triángulo es: ' + perimetroCuadrado + ' cm');
console.log('El área del triangulo es: ' + areaTriangulo+ ' cm^2');

     console.groupEnd();