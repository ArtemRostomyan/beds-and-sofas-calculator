//импортируем имитацию базы данных для диванов
import mechanizm from '../categories/sofas/sofa_mechanizm'
import frame from '../categories/sofas/sofa_frame'
import legs from '../categories/sofas/sofa_legs'
import size_categories from '../categories/sofas/sofa_sizes_categories'

import base_plywood from '../categories/sofas/sofa_base_plywood'
import base_fluff from '../categories/sofas/sofa_base_fluff'
import base_foam from '../categories/sofas/sofa_base_foam'

import bacK_fluff from '../categories/sofas/sofa_back_fluff'
import back_plywood from '../categories/sofas/sofa_back_plywood'
import back_foam from '../categories/sofas/sofa_back_foam'

import armrest_fluff from '../categories/sofas/sofa_armrest_fluff'
import armrest_foam from '../categories/sofas/sofa_armrest_foam'
import armrest_plywood from '../categories/sofas/sofa_armrest_plywood'
import sofa_quantity_armrest from '../categories/sofas/sofa_quantity_armrest'

import material_complexity from '../categories/sofas/sofa_matertial_complexity'

import sofa_specialists_price from "../categories/sofas/sofa_specialists_price"

//импортируем функции
import getPriceForName from './getPriceForName'
import getSum from './getSum'
import sizeName from './sizeName'
import getSumForQuantity from './getSumForQuqntity'
import surelySum from './surelySum'
import specialistSum from './sofa_specialistSum'
import getTypeForName from './getTypeForName'
import kantSpecialist from './separateSofaKantSpecialists'
import getComplexity from './getComplexity'


function totalPriceSofas(data, store_state){
    let total_sum = 0
    let sofa_thickness = ''
    let quantity_armrest = 0
    let base_length = 0
    let complexity = 1
    let price_cloth
    let side_module_length
    price_cloth = getPriceForName(store_state.materials, data.cloth)
    if(!data.rules_armrest || data.armrest){
        quantity_armrest = getPriceForName(sofa_quantity_armrest, data.configuration)
    }
    if(data.thickness_back > 50){
        sofa_thickness = "толстый"
    } else{
        sofa_thickness = "тонкий"
    }
    base_length = store_state.global_length - data.width
    if(data.configuration == "угловой"){
        side_module_length = store_state.global_length - data.thickness_armret - data.width
    } else if(data.configuration == "угловой_с_оттоманкой") {
        side_module_length = store_state.global_length  - data.width
    }
    if(store_state.div_other_expenses){
        total_sum += store_state.div_other_expenses * (base_length/200)
    }

    if(data.mechanizm){
        total_sum += getPriceForName(mechanizm ,data.mechanizm)
    }
    if(data.frame_base){
        total_sum += getSum(sizeName(store_state.sofas_sizes_categories, base_length), frame, data.frame_base)
    }
    //основание
    if(data.fluff){
        total_sum += getPriceForName(base_fluff, data.fluff) * (base_length/200)
    }
    if(data.legs || data.frame_base == "массив_рамы"){
        total_sum += getPriceForName(base_plywood, "на_ножках") * (base_length/200)
    } else{
        total_sum += getPriceForName(base_plywood, "без_ножек") * (base_length/200)
    }
    if(data.foam){
        total_sum += getSum(data.thickness_pillow, base_foam, data.foam) * (base_length/200)
    }
    total_sum += specialistSum(store_state.sprecialists, data, sizeName(size_categories, base_length), sofa_specialists_price)
    // console.log(data.name, specialistSum(store_state.sprecialists, data, sizeName(size_categories, base_length), sofa_specialists_price))
    //спинка
    if(data.thickness_back){
        total_sum += surelySum(back_plywood, sofa_thickness) * (base_length/200)
    }
    if(data.fluff){
        total_sum += getPriceForName(bacK_fluff, data.fluff) * (base_length/200)
    }
    if(data.foam){
        total_sum += getSum(data.thickness_back, back_foam, data.foam) * (base_length/200)
    }
    //подлокотник
    if(!data.rules_armrest || data.armrest){
        total_sum += surelySum(armrest_foam, sofa_thickness) * quantity_armrest
        total_sum += surelySum(armrest_plywood, sofa_thickness) * quantity_armrest
        total_sum += getPriceForName(armrest_fluff, data.fluff) * quantity_armrest
    }
    //ткани 
    if(!data.rules_armrest || data.armrest) {
        total_sum += data.cloth_base * (base_length/200) * price_cloth
        total_sum += data.cloth_back * (base_length/200) * price_cloth
        total_sum += data.cloth_armrest * quantity_armrest * price_cloth
    } else {
        total_sum += data.cloth_base * (base_length/200) * price_cloth
        total_sum += data.cloth_back * (base_length/200) * price_cloth
    } 
    if(data.configuration == "угловой") {
        if(!data.rules_armrest || data.armrest) { 
            total_sum += data.cloth_base * (side_module_length/200) * price_cloth
            total_sum += data.cloth_back * (side_module_length/200) * price_cloth
            total_sum += data.cloth_armrest * price_cloth 
        } else {
            total_sum += data.cloth_base * (side_module_length/200) * price_cloth
            total_sum += data.cloth_back * (side_module_length/200) * price_cloth
        }
        if(data.legs || data.frame_base == "массив_рамы"){
            total_sum += getPriceForName(base_plywood, "на_ножках") * (side_module_length/200)
        } else{
            total_sum += getPriceForName(base_plywood, "без_ножек") * (side_module_length/200)
        }
        if(data.thickness_back){
            total_sum += surelySum(back_plywood, sofa_thickness) * (side_module_length/200)
        }
        if(data.foam){
            total_sum += getSum(data.thickness_pillow, base_foam, data.foam) * (side_module_length/200)
        }
        if(data.foam){
            total_sum += getSum(data.thickness_back, back_foam, data.foam) * (side_module_length/200)
        }
        total_sum += surelySum(armrest_foam, sofa_thickness) * (quantity_armrest-1)
    } else if(data.configuration == "угловой_с_оттоманкой"){
        total_sum += data.cloth_base * (base_length/200) * price_cloth
        if(data.foam){
            total_sum += getSum(data.thickness_pillow, base_foam, data.foam) * (side_module_length/200)
        }
        if(data.legs || data.frame_base == "массив_рамы"){
            total_sum += getPriceForName(base_plywood, "на_ножках") * (side_module_length/200)
        } else{
            total_sum += getPriceForName(base_plywood, "без_ножек") * (side_module_length/200)
        }
    }
    if(data.configuration != "прямой"){
        total_sum += side_module_length/200 * store_state.div_other_expenses
        total_sum += specialistSum(store_state.sprecialists, data, sizeName(size_categories, side_module_length), sofa_specialists_price)
        total_sum += getSum(sizeName(store_state.sofas_sizes_categories, side_module_length), frame, data.frame_base)

    }
    //Швея в зависимости от ткани
    if(data.cloth){
        total_sum += getPriceForName(store_state.sprecialists, "Швея") * getSum(getTypeForName(store_state.materials, data.cloth), material_complexity, data.material_complex)
    }
    complexity = getComplexity( store_state.materials, data.cloth)
    // console.log(`цена дивана * сложность организации = ${total_sum} * ${complexity}`, "=", total_sum * complexity )
    total_sum = total_sum * complexity
    //////////////////
    if(data.legs){
        total_sum += getSumForQuantity(base_length, legs, data.legs)
    }
    if(data.configuration != "прямой"){
        if(data.legs){
            total_sum += getSumForQuantity(side_module_length, legs, data.legs)
        }
    }
    if(data.kant){
        total_sum += kantSpecialist(store_state.sprecialists, data, sizeName(size_categories, base_length), sofa_specialists_price)
    }
    /////////////////
    return Math.ceil(total_sum)
}

export default totalPriceSofas