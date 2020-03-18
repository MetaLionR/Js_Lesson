var c,
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function input_c () {
    c = prompt('Введите число от 1 до 15');
    if (c !== null && (c < 1 || c > 15 || isNaN(c))) {
        input_a();
    }
}
input_c();
switch(c) {
    case 1:
        alert(arr);
        break;
    case 15:
        alert(c);
        break;
    null
        break;
    default:
        alert(arr.slice(c-1));
}