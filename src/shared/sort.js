/**
 * Function to sort alphabetically an array of objects by some specific key.
 * 
 * @param {String} property Key of the object to sort.
 */
function dynamicSort(property) {
    var sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a,b) {
        if(sortOrder == -1){
            return b[property].toString().localeCompare(a[property]);
        }else{
            return a[property].toString().localeCompare(b[property]);
        }        
    };
}

export default dynamicSort;
