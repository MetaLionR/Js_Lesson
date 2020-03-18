var a = prompt( 'Введите число a' );
var b = prompt( 'Введите число b' );
if ( a >= 0 && b >= 0 ) {
    alert( a - b );
}
else if ( a < 0 && b < 0) {
    alert( a * b );
}
else if (a <0 && b >=0) {
    alert( a + b );
}
else if (a >=0 && b <0) {
    alert( a + b );
}
alert( result );

