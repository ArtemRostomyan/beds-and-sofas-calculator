
function specialistSum(sprecialists, data, size, bed_specialists_price){
    let totalsum = 0;
    sprecialists.forEach(item => {
        if(data.carriage_screed){
            if(item.name == "Обивщик"){
                let price = item.price
                item.normativ_price_bed.forEach(item => {
                    if(item.name == size){
                        let normativ = item.price
                        bed_specialists_price.forEach(item =>{
                            if(item.name == "Обивщик"){
                                totalsum += normativ * price * item.carriage_screed
                            }
                        })
                    }
                })
            }
        }
        if(data.fluff){
            if(item.name == "Обивщик"){
                let price = item.price
                item.normativ_price_bed.forEach(item => {
                    if(item.name == size){
                        let normativ = item.price
                        bed_specialists_price.forEach(item =>{
                            if(item.name == "Обивщик"){
                                totalsum += normativ * price * item.fluff
                            }
                        })
                    }
                })
            }
            if(item.name == "Швея"){
                let price = item.price
                item.normativ_price_bed.forEach(item => {
                    if(item.name == size){
                        let normativ = item.price
                        bed_specialists_price.forEach(item =>{
                            if(item.name == "Швея"){
                                totalsum += normativ * price * item.fluff
                            }
                        })
                    }
                })
            }
        }
        if(data.mechanizm){
            if(item.name == "Каркасник"){
                let price = item.price
                item.normativ_price_bed.forEach(item => {
                    if(item.name == size){
                        let normativ = item.price
                        bed_specialists_price.forEach(item =>{
                            if(item.name == "Каркасник"){
                                totalsum += normativ * price * item.mechanizm
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