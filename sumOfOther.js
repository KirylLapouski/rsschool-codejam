function sumOfOther(arr){
    if(typeof arr !=='object')
        return
    let summ = arr.reduce((acc,val)=>acc+=+val,0)
    return arr.map(val=>summ-val)
}
