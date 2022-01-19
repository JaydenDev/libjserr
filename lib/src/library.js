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
    if (variable === null) {
        console.log("Variable not defined... exiting")
    }
}

//tests for function
//
//