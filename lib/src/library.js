function runFunctionOnVariableNull(myfunction, variable) {
    if (variable == 'undefined') {
        myfunction();
    }
}

//tests for the function
//function lmao() {
//   print('hello, world!');
//}
//runFunctionOnVariableNull(lmao, ayo);

function testForVariableNull(variable) {
    if (variable == 'undefined') {
        return "undefined";
    }
}

//tests for function
//
//