function sizeName(array, global){
    let size = ''
    array.forEach(item => {
        if(item.size.min_width <= global && global <= item.size.max_width ){
            size = item.name
        }
    })
    return size
}

export default sizeName