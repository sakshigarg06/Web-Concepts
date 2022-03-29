let count = 0;
const fun = () => {
    console.log("run", count++);
}

let timer;
const throttle = (fn, delay) => {
    if(timer) return;

    timer = true;
    setTimeout(() => {
        fn();
        timer = false;
    }, delay);
}

const run = () => {
    throttle(fun, 1000);
}
