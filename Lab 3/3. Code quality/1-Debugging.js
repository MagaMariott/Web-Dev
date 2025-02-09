// We can also pause the code by using the debugger command in it
// Such command works only when the development tools are open, otherwise the browser ignores it
function hello(name) {
    let phrase = `Hello, ${name}!`;
    debugger;  // <-- the debugger stops here
    say(phrase);
}


// Watch – shows current values for any expressions.
// You can click the plus + and input an expression. The debugger will show its value, automatically recalculating it in the process of execution.  
// Call Stack – shows the nested calls chain.  
// At the current moment the debugger is inside hello() call, called by a script in index.html (no function there, so it’s called “anonymous”).  
// If you click on a stack item (e.g. “anonymous”), the debugger jumps to the corresponding code, and all its variables can be examined as well. 
// Scope – current variables. 
// Local shows local function variables. You can also see their values highlighted right over the source.  
// Global has global variables (out of any functions).