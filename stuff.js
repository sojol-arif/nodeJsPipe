var counter = function(arr){
    return "there are" + arr.length + "stuff in this array" ;
}

var adder = function(a, b){
    return "Adding two elements is: " + (a+b);
}

var pi = 3.14;

module.exports = {
    counter : counter,
    adder : adder,
    pi : pi
}