function priceFirstNum(array, size){
    let num = 1
    array.forEach(item => {
        if(item.name == size){
            num = item.fabric_consumption
        }
    })
    return num
}
function numForMaterial(product_data, materials, size){
    let num = 0
    Object.entries(product_data).forEach(item => {
        let category_key = item[0]
        let category_value = item[1]
        materials.forEach(item => {
            if(item.name == category_key){
                if(item.name == "headboard"){
                            if(item.type){
                                item.type.forEach(item => {
                                    if(item.name == product_data.headboard){
                                        num += priceFirstNum(item.price_first, size)
                                    }
                                })
                            }

                } else{
                    if(category_value){
                        num += priceFirstNum(item.price_first, size)
                    }
                } 
            }
        })
    })
    return num
}
function priceForCloth(cloth_array, name_cloth, product_data, materials, size){
    let totalnum = 1;
    cloth_array.forEach(item => {
        if(item.name == name_cloth){
            totalnum = item.price * numForMaterial(product_data, materials, size)
        }
    })
    
    return totalnum
}
export default priceForCloth