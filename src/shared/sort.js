/**
 * Function to sort alphabetically an array of objects by some specific key.
 * 
 * @param {String} property Key of the object to sort.
 */
function dynamicSort(property) {
    let ascending = true;

    if(property[0] === "-") {
        ascending = false;
        property = property.substr(1);
    }

    return function (a, b) {

        if (a === null && b !== null) return 1;
        if (b === null && a !== null) return -1;
        if (a === null && b === null) return 0;

        const result = a - b;

        if (isNaN(result)) {
            return ascending ? 
            a[property].toString().localeCompare(b[property]) : 
            b[property].toString().localeCompare(a[property]);
        } else {
            return ascending ? result : -result;
        }    
    };
}

export default dynamicSort;
