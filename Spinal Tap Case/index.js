function spinalCase(str) {
    let arr = [];
    str.split('').forEach((element, index) => {
        console.log(arr);
        if (element === element.toUpperCase() && (element !== ' ' && element !== "_" && element !== '-')) {
            (index === 0 || arr[arr.length-1] ==='-') ? arr.push(element.toLowerCase()) : arr.push('-' + element.toLowerCase());
        } else if (element === ' ' || element === "_") {
            arr.push('-');
        } else {
            arr.push(element);
        }
    });

    return arr.join('');
}
