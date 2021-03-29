function surelySum(array, size){
    let price = 0
    array.forEach(item => {
        if(item.name == size){
            price = item.price
        }
    })
    return price
}

export default surelySum