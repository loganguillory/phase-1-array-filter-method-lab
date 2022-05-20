function findMatching(names, string){
    let filteredArray = names.filter(name => name.toLowerCase() === string.toLowerCase())
    return filteredArray
    }
    
function fuzzyMatch(names, string){
    let filteredArray = names.filter(name => name.substring(0, string.length) === string)
        return filteredArray
    }


function matchName(arr, string){
    return arr.filter(driver => driver.name === string);
}