function make(...vals) {
    let args = [...vals]
   return function f(...newVals){
    if(typeof newVals[0]==='function')
        return args.reduce((acc,val)=> newVals[0](acc,val))
    args = args.concat(...newVals)
    return f
   }
   
}

function sum(a, b) {
    return a + b;
}
function devide(a,b){
    return a/ b
}

console.log(make(100)(5, 2)(1)(sum))
console.log(make(100)(5, 2)(1)(devide))
