// ==================================================
// Step 1 + Step 2
// Create block, declare variables + reassign inside
// ==================================================
"use strict";
{
    var blockVar = "Var 1st Value";
    let blockLet = "Let 1st Value";
    const blockConst = "Const 1st Value";

    // Reassignment inside block
    //blockVar = "Var 2nd Value"; // Works
    //blockLet = "Let 2nd Value"; //works
    //blockConst = "Const 2nd Value"; // TypeError: Assignment to constant variable.

    console.log(blockVar);
    console.log(blockLet);
    console.log(blockConst);
}

    // ==================================
    // Step 3
    // Testing outside the block
    // ==================================

    console.log(blockVar); // is accesible outside the block
    //console.log(blockLet); // ReferenceError: blockLet is not defined is not accessible outside the block
    //console.log(blockConst) // ReferenceError: blockConst is not defined is not accessible outside the block

    // ================================
    // STEP 3 (continued)
    // Try reassignment outside the box
    // ================================
    
    blockVar = "Var changed outside the box"; // works outside the box
    console.log(blockVar); // worked outside the box

    //blockLet = "Let: Changed Outside"; // was working at first which was very confusing. Had to "use strict" mode to get the correct behavior. without it a javascript takes an undeclared variable and creates a global variable. 
    //console.log(blockLet); //ReferenceError: blockLet is not defined

    blockConst = "Const: changed outside"; // without "strict mode" it will create a variable instead of attempt to modify one. 
    console.log(blockConst) // ReferenceError: blockConst is not defined

/* 
COMMENTED EVERYTHING OUT TO WORK ON PRACTICE TASKS AT THE END

Global Scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

// Block Scope
//console.log(blockVar);
//console.log(blockLet);
//console.log(blockConst);

/*
function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError

COMMENTED EVERYTHING ELSE OUT TO WORK ON PRACTICE TASKS AT THE END
*/ 

