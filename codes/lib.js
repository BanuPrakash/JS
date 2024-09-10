// HOF because "predicate" will be a function
function filter(elems, predicate) {
    let result = [];
        forEach(elems, function (elem) {
            if(predicate(elem)) {
                result.push(elem);
            }
        })

    return result;
}


// HOF because "transforFn" will be a function
function map(elems, transformFn) {
    let result = [];
    forEach(elems, function (elem) {       
            result.push(transformFn(elem));
    })
    return result;
}


// HOF because "action" will be a function
// OCP
function forEach(elems, action) {
    for(var i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}