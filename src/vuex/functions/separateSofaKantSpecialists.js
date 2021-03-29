function specialistSum(sprecialists, data, size, sofa_specialists_price){
    let totalsum = 0;
    sprecialists.forEach(item => {
        if(data.kant){
            if(item.name == "Швея"){
                let price = item.price
                item.normativ_price_sofa.forEach(item => {
                    if(item.name == size){
                        let normativ = item.price
                        sofa_specialists_price.forEach(item =>{
                            if(item.name == "Швея"){
                                totalsum += normativ * price * item.kant
                            }
                        })
                    }
                })
            }
        }
    })
    return totalsum
}
export default specialistSum