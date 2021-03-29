//импортируем имитацию базы данных для кроватей
import kant from '../categories/krov/bed_kant'
import rack_bottom from '../categories/krov/bed_rack_bottom'
import carriage_screed from '../categories/krov/bed_carriage_screed'
import fluff from '../categories/krov/bed_fluff'
import legs from '../categories/krov/bed_legs'
import frame from '../categories/krov/bed_frame'
import plywood from '../categories/krov/bed_plywoods'
import massive_frame from '../categories/krov/bed_massive_frame'
import clothPriceForMaterials from '../categories/krov/bed_clothPriceForMaterials'
import bed_specialists_price from '../categories/krov/bed_specialists_price'
//импортируем функции
import sizeName from './sizeName'
import getSum from './getSum'
import getPriceForName from './getPriceForName'
import surelySum from './surelySum'
import specialistSum from './bed_specialistSum'
import getComplexity from './getComplexity'
import priceForCloth from './priceForCloth'
import kantSpecialist from './separateBedKantSpecialist'



function totalPriceBeds(data, state_store){
    data = JSON.parse(JSON.stringify(data))
    state_store = JSON.parse(JSON.stringify(state_store))
    let total_sum = 0
    let size = ''
    let complexity = 1
    
    size = sizeName(state_store.bed_sizes_categories, state_store.global_width)
    
    if(data.rack_bottom){
        total_sum += getSum(size, rack_bottom , data.rack_bottom)
    }
    if(data.carriage_screed){
        total_sum += surelySum(carriage_screed, size)
    }
    if(data.mechanizm){
        total_sum += state_store.mehanizmSum
    }



    if(data.frame){
        total_sum += getPriceForName(frame, data.frame)
    }
    total_sum += surelySum(plywood, size)
    if(data.massive_frame){
        total_sum += getPriceForName(massive_frame, data.massive_frame)
    }
    if(state_store.bed_other_expenses){
        total_sum += state_store.bed_other_expenses
    }
    total_sum += specialistSum(state_store.sprecialists, data, sizeName(state_store.bed_sizes_categories, state_store.global_width),bed_specialists_price)
    // console.log(data.name, specialistSum(state_store.sprecialists, data, sizeName(state_store.bed_sizes_categories, state_store.global_width),bed_specialists_price))
    /**cloth */
    total_sum += priceForCloth(state_store.materials, data.cloth, data, clothPriceForMaterials, size)
    complexity = getComplexity( state_store.materials, data.cloth)
    // console.log(`цена дивана * сложность организации = ${total_sum} * ${complexity}`, "=", total_sum * complexity )
    total_sum = total_sum * complexity
    ////////////////////////////////////////////////////////////
    if(data.kant){
        if(data.headboard && data.tsarga){
            total_sum += getSum(size, kant , "headboard")
            total_sum += getSum(size, kant , "tsarga")
        } else if(data.headboard){
            total_sum += getSum(size, kant , "headboard")
        } else if(data.tsarga){
            total_sum += getSum(size, kant , "tsarga")
        }
    }
    if(data.fluff){
        total_sum += getPriceForName(fluff, data.fluff)
    }
    if(data.legs){
        total_sum += getPriceForName(legs, data.legs)
    }
    if(data.kant){
        total_sum += kantSpecialist(state_store.sprecialists, data, sizeName(state_store.bed_sizes_categories, state_store.global_width),bed_specialists_price)
    }
////////////////////////////////////////////////////////////
    return Math.ceil(total_sum) 
}

export default totalPriceBeds