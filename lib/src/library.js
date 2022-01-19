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
        errorCode = "1";
    }
    if (variable !== null) {
        console.log("noErr");
        errorCode = "0";
    }
    errorCode = "0";
}

//tests for function
//i
//

function showErrToUser(errorCode) {
    if (errorCode == "0") {
        console.log("noErr");
    }
    if (errorCode == "1") {
        console.log("Undefined Variable\n", variable);
        alert("Undefined Variable", variable)
    }
}

// run 
testForVariableNull(errorCode);
showErrToUser(errorCode);