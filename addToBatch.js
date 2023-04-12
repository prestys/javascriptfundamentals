const addToBatch = (array, num) => {
    if(array.length >= 5){
        return array;
    } else {
        return array.concat(num);
    }
}