function getFluffSum(array, name){
    let price = 0
    array.forEach(item => {
        if(item.name == name){
            price = item.price
        }
    })
    return price
}

export default getFluffSum