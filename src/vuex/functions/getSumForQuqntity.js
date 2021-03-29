
function getQuantity(first_size, array, name){
    let total_sum = 0;
    let size = '';
    let quantity = 0;
    if(first_size <= 2400){
        size = 'small'
    } else if(2401 <= first_size && first_size <= 3500){
        size = 'big'
    }
    array.forEach(item => {
        if(item.name == name){
            item.sizes.forEach(item =>{
                if(item.name == size){
                    quantity = item.quantity
                }
            }) 
            total_sum = item.price_for_one * quantity
        }
    })
    return total_sum
}

export default getQuantity