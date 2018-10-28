function recursion(...objs){
    // console.log(objs)
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

console.log(recursion( {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}}))
