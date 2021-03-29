function getSum(size, array, name){
    let last_sum = 0;
    if(name == 'оба'){
        array.forEach(item => {
            item.price_first.forEach(item =>{
                if(item.name == size){
                    last_sum += item.price
                }
            })
        })
    } else{
        array.forEach(item => {
            if(item.name == name){
                item.price_first.forEach(item =>{
                    if(item.name == size){
                        last_sum += item.price
                    }
                })    
            }
        })
    }    
    return last_sum
}

export default getSum