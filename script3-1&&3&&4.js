var prime = [ 2 ],
    num = 2;
while ( num <= 100) {
    var numcheck = 1;
    for ( var i = 0; i < prime.length; i++) {
        if ( num % prime[ i ] === 0) {
            numcheck = 0;
        }
    }
    if ( numcheck === 1 ) {
        prime.push( num );
    }
    num++;
}
console.log ( prime );
for ( var i = 0; i < 10; console.log(i++) ) {}
var x = '\nx';
for ( var i = 20; i--; ) {
    console.log( x );
    x = x + 'x';
}