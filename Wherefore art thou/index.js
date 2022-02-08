function whatIsInAName(collection, source) {
    const arr = [];
    collection.forEach((item) => {
        let isAcceptable = true;
        for (let prop in source) {
            if (item.hasOwnProperty(prop) && item[prop] === source[prop]) {
                isAcceptable = true;
            } else {
                isAcceptable = false
                break;
            };
        }
        if (isAcceptable) {
            arr.push(item);
        }
    });
    return arr;
}
