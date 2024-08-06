// HOF
function forEach(elems, action) {
    for(i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}