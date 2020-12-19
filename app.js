//Declaring  variables...
var form = document.getElementById('form');
var inputOne = document.getElementById('input1').value;
var inputTwo = document.getElementById('input2').value;
var result = document.getElementById('answer').value;

//Defining the addition function
function add(){
    calculate1 = parseInt(myForm.calculate1.value);
    calculate2 = parseInt(myForm.calculate2.value);
    result = calculate1 + calculate2;
    myForm.result.value = result;
}
//Defining the subtraction function
function subtract(){
    calculate1 = parseInt(myForm.calculate1.value);
    calculate2 = parseInt(myForm.calculate2.value);
    result = calculate1 - calculate2;
    myForm.result.value = result;
}
//Defining the multiplication function
function multiply(){
    calculate1 = parseInt(myForm.calculate1.value);
    calculate2 = parseInt(myForm.calculate2.value);
    result = calculate1 * calculate2;
    myForm.result.value = result;
}
//Defining the division function
function divide(){
    calculate1 = parseInt(myForm.calculate1.value);
    calculate2 = parseInt(myForm.calculate2.value);
    result = calculate1 / calculate2;
    myForm.result.value = result;
}

//Defining the clear function
function clear(){
    form = document.getElementById('form').reset();
}
console.log('hello');