let count = 0;
const fun = () => {
    console.log("run", count++);
}

// const debounce = function(fn, delay) {
//     let timer;
//     return function() {
//         let context = this,
//         args = arguments;
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn.apply(context, args);
//         }, delay);
//     }
// }

// const run = debounce(fun, 1000);

let timer;
const debounce = (fn, delay) => {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
}

const run = () => {
    debounce(fun, 1000);
}