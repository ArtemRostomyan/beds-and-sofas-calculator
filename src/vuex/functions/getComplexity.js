function getComplexity(array, name){
    let complexity = 0
    array.forEach(item => {
        if(item.name == name){
            complexity = item.complexity_organization
        }
    })
    return complexity
}

export default getComplexity