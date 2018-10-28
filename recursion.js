function recursion(...objs){
    if(objs.length === 0)
        return []
    let res = recursion( ...objs.reduce((acc,obj)=>{
        if(obj.left)
        acc.push(obj.left)
        if(obj.right)
        acc.push(obj.right)
        return acc
    }, []))
    res.unshift(objs.map(val=>val.value))
    return res

}
