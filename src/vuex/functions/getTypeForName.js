function getFluffSum(array, name){
    let type 
    array.forEach(item => {
        if(item.name == name){
            type = item.type
        }
    })
    return type
}

export default getFluffSum